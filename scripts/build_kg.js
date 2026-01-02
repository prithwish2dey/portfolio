const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const OUT = path.join(__dirname, '..', 'data', 'kg.json');

function slugify(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureNode(map, id, type, label, props = {}) {
  if (!map.nodesById[id]) {
    const node = { id, type, label, properties: props };
    map.nodes.push(node);
    map.nodesById[id] = node;
  }
  return map.nodesById[id];
}

function addEdge(map, from, to, rel) {
  map.edges.push({ from, to, rel });
}

function build() {
  const map = { nodes: [], edges: [], nodesById: {} };

  const pubsPath = path.join(DATA, 'publications.json');
  if (fs.existsSync(pubsPath)) {
    const pubs = JSON.parse(fs.readFileSync(pubsPath, 'utf8'));
    pubs.forEach((p, i) => {
      const paperId = `paper:${slugify(p.title)}:${i}`;
      ensureNode(map, paperId, 'Paper', p.title, { ...p });

      // authors
      (p.authors || []).forEach((a) => {
        const aid = `author:${slugify(a)}`;
        ensureNode(map, aid, 'Author', a);
        addEdge(map, aid, paperId, 'authored');
      });

      // venue
      const venue = p.conference || p.journal || p.publisher;
      if (venue) {
        const vid = `venue:${slugify(venue)}`;
        ensureNode(map, vid, 'Venue', venue);
        addEdge(map, paperId, vid, 'published_in');
      }

      // tags
      (p.tags || []).forEach((t) => {
        const tid = `tag:${slugify(t)}`;
        ensureNode(map, tid, 'Tag', t);
        addEdge(map, paperId, tid, 'has_tag');
      });
    });
  }

  const galleryPath = path.join(DATA, 'gallery.json');
  if (fs.existsSync(galleryPath)) {
    const images = JSON.parse(fs.readFileSync(galleryPath, 'utf8'));
    images.forEach((img, i) => {
      const id = `image:${i}`;
      ensureNode(map, id, 'Image', img.title || img.alt || `Image ${i}`, { src: img.src || img.url || img.image || null });
    });
  }

  fs.writeFileSync(OUT, JSON.stringify({ nodes: map.nodes, edges: map.edges }, null, 2));
  console.log('KG written to', OUT);
}

build();
