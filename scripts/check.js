const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const data = JSON.parse(fs.readFileSync(path.join(root, "public", "data", "prospects.json"), "utf8"));

const required = [
  "Estudio digital",
  "data-field=\"company\"",
  "growthCanvas",
  "Modo interno",
  "window.SolversStudy"
];

const missing = required.filter((item) => !index.includes(item));
if (missing.length) {
  throw new Error(`Missing required markers: ${missing.join(", ")}`);
}

if (!Array.isArray(data.prospects) || data.prospects.length < 3) {
  throw new Error("Expected at least three prospect demos");
}

for (const prospect of data.prospects) {
  const fields = ["slug", "company", "sector", "city", "accent", "findings", "campaigns", "deliverables"];
  const empty = fields.filter((field) => !prospect[field] || (Array.isArray(prospect[field]) && !prospect[field].length));
  if (empty.length) {
    throw new Error(`${prospect.slug || "unknown"} missing: ${empty.join(", ")}`);
  }
}

console.log(`OK: ${data.prospects.length} prospect demos and template markers verified.`);
