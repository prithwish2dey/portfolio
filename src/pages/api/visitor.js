// pages/api/visitor.js
let countryCounts = {}; // Will be stored in memory (resets on cold start); for persistent use a DB

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { country } = req.body;

    if (!country) {
      return res.status(400).json({ error: "Country is required" });
    }

    countryCounts[country] = (countryCounts[country] || 0) + 1;

    return res.status(200).json({ stats: countryCounts });
  } else if (req.method === "GET") {
    return res.status(200).json({ stats: countryCounts });
  } else {
    res.status(405).end();
  }
}
