const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SRC = path.join(__dirname, '..', 'src', 'components');
const OUT = path.join(__dirname, '..', 'data');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function extractArraysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const re = /export const (\w+)\s*=\s*(\[[\s\S]*?\]);/g;
  const found = {};
  let m;
  while ((m = re.exec(content)) !== null) {
    const name = m[1];
    const arrayLiteral = m[2];
    try {
      // Evaluate the array literal safely inside a VM context
      const script = new vm.Script('(' + arrayLiteral + ')');
      const result = script.runInNewContext({});
      found[name] = result;
    } catch (err) {
      console.error('Failed to evaluate array', name, 'in', filePath, err.message);
    }
  }
  return found;
}

function run() {
  const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));
  const aggregate = {};
  files.forEach((f) => {
    const full = path.join(SRC, f);
    const arrays = extractArraysFromFile(full);
    Object.assign(aggregate, arrays);
  });

  // Write each extracted array into data/
  Object.entries(aggregate).forEach(([k, v]) => {
    const outFile = path.join(OUT, `${k}.json`);
    fs.writeFileSync(outFile, JSON.stringify(v, null, 2));
    console.log('Wrote', outFile);
  });

  // also write a combined publications file if both exist
  if (aggregate.journalPublications || aggregate.conferencePublications) {
    const pubs = [ ...(aggregate.conferencePublications || []), ...(aggregate.journalPublications || []) ];
    fs.writeFileSync(path.join(OUT, 'publications.json'), JSON.stringify(pubs, null, 2));
    console.log('Wrote', path.join(OUT, 'publications.json'));
  }

  // galleryImages -> gallery.json
  if (aggregate.galleryImages) {
    fs.writeFileSync(path.join(OUT, 'gallery.json'), JSON.stringify(aggregate.galleryImages, null, 2));
    console.log('Wrote', path.join(OUT, 'gallery.json'));
  }

  console.log('Extraction complete.');
}

run();
