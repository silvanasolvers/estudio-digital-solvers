const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const data = JSON.parse(fs.readFileSync(path.join(root, "public", "data", "prospects.json"), "utf8"));
const jardinStudy = fs.readFileSync(path.join(root, "public", "el-jardin-de-provenza-spa.html"), "utf8");
const vitruStudy = fs.readFileSync(path.join(root, "public", "vitru-dermatologia-estetica.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

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

const jardinMarkers = [
  "El bienestar no debería",
  "Tres fricciones entre el primer mensaje y una reserva confirmable.",
  "Una anfitriona digital hecha para El Jardín.",
  "De “quiero reservar” a una solicitud con servicio, fecha, personas y contexto.",
  "RESPONDER: RESERVAS",
  "#131512",
  "#B4FF39",
  "Solvers_Logo_08_Eyes_White_Transparent.png",
  "Solvers_Logo_08_Wordmark_White.svg"
];

const jardinMissing = jardinMarkers.filter((item) => !jardinStudy.includes(item));
if (jardinMissing.length) {
  throw new Error(`El Jardín study missing: ${jardinMissing.join(", ")}`);
}

if (/<form\b/i.test(jardinStudy) || /<input\b/i.test(jardinStudy) || /<textarea\b/i.test(jardinStudy)) {
  throw new Error("El Jardín study must not contain a lead form.");
}

if (!server.includes('"/empresa/el-jardin-de-provenza-spa"')) {
  throw new Error("El Jardín route is not mapped to its short-study template.");
}

const vitruMarkers = [
  "VITRU se presenta en Instagram como Dermatología Estética &amp; LifeStyle.",
  "Tres fricciones entre el primer mensaje y una cita orientada.",
  "Una coordinadora digital hecha para VITRU.",
  "No recibe ni interpreta detalles clínicos sensibles, ni recomienda o confirma tratamientos.",
  "RESPONDER: VALORACIONES",
  "#131512",
  "#B4FF39",
  "Solvers_Logo_08_Eyes_White_Transparent.png",
  "Solvers_Logo_08_Wordmark_White.svg"
];

const vitruMissing = vitruMarkers.filter((item) => !vitruStudy.includes(item));
if (vitruMissing.length) {
  throw new Error(`VITRU study missing: ${vitruMissing.join(", ")}`);
}

if (/<form\b/i.test(vitruStudy) || /<input\b/i.test(vitruStudy) || /<textarea\b/i.test(vitruStudy)) {
  throw new Error("VITRU study must not contain a lead form.");
}

if (!server.includes('"/empresa/vitru-dermatologia-estetica"')) {
  throw new Error("VITRU route is not mapped to its short-study template.");
}

for (const asset of [
  "Archivo-Variable.ttf",
  "JetBrainsMono-Variable.ttf",
  "Solvers_Logo_08_Eyes_White_Transparent.png",
  "Solvers_Logo_08_Wordmark_White.svg"
]) {
  if (!fs.existsSync(path.join(root, "public", "brand", asset))) {
    throw new Error(`El Jardín study missing brand asset: ${asset}`);
  }
}

console.log(`OK: ${data.prospects.length} prospect demos and template markers verified.`);
