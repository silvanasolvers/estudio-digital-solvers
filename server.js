const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "public");
const leadStorePath = path.join(__dirname, "data", "study-leads.jsonl");
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "content-type": type,
    "cache-control": status === 200 ? "public, max-age=60" : "no-store"
  });
  res.end(body);
}

function sendJson(res, status, body) {
  send(res, status, JSON.stringify(body), "application/json; charset=utf-8");
}

function collectBody(req, limit = 65536) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > limit) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function cleanText(value, max = 500) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function buildLead(payload, req) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
    prospect_slug: cleanText(payload.prospectSlug, 120),
    prospect_company: cleanText(payload.prospectCompany, 160),
    contact_name: cleanText(payload.contactName, 120),
    business_name: cleanText(payload.businessName, 160),
    phone: cleanText(payload.phone, 80),
    email: cleanText(payload.email, 160),
    interest: cleanText(payload.interest, 160),
    wants_meeting: Boolean(payload.wantsMeeting),
    preferred_time: cleanText(payload.preferredTime, 160),
    message: cleanText(payload.message, 1000),
    source_url: cleanText(payload.sourceUrl, 500),
    user_agent: cleanText(req.headers["user-agent"], 300)
  };
}

async function postJson(url, body, headers = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...headers
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`POST ${url} failed with ${response.status}`);
  }
}

async function persistLead(lead) {
  const channels = [];
  await fs.promises.mkdir(path.dirname(leadStorePath), { recursive: true });
  await fs.promises.appendFile(leadStorePath, `${JSON.stringify(lead)}\n`, "utf8");
  channels.push("local-jsonl");

  if (process.env.STUDY_LEADS_WEBHOOK_URL) {
    await postJson(process.env.STUDY_LEADS_WEBHOOK_URL, lead);
    channels.push("webhook");
  }

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const table = process.env.STUDY_LEADS_TABLE || "study_leads";
    const endpoint = `${process.env.SUPABASE_URL.replace(/\/$/, "")}/rest/v1/${encodeURIComponent(table)}`;
    await postJson(endpoint, lead, {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      prefer: "return=minimal"
    });
    channels.push("supabase");
  }

  return channels;
}

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const requested = path.normalize(cleanPath || "index.html");
  const fullPath = path.join(root, requested);
  if (!fullPath.startsWith(root)) return null;
  return fullPath;
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (req.method === "POST" && requestUrl.pathname === "/api/study-leads") {
    try {
      const body = await collectBody(req);
      const payload = JSON.parse(body || "{}");
      const lead = buildLead(payload, req);
      if (!lead.contact_name || !lead.business_name || !lead.phone) {
        sendJson(res, 400, { ok: false, error: "missing_required_fields" });
        return;
      }
      const channels = await persistLead(lead);
      sendJson(res, 200, { ok: true, id: lead.id, channels });
    } catch (error) {
      console.error("Unable to save study lead:", error);
      sendJson(res, 500, { ok: false, error: "unable_to_save_lead" });
    }
    return;
  }

  if (req.method && !["GET", "HEAD"].includes(req.method)) {
    send(res, 405, "Method not allowed");
    return;
  }

  const fullPath = resolveFile(req.url || "/");
  if (!fullPath) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(fullPath, (statError, stat) => {
    const filePath = !statError && stat.isFile() ? fullPath : path.join(root, "index.html");
    fs.readFile(filePath, (readError, content) => {
      if (readError) {
        send(res, 500, "Unable to load page");
        return;
      }
      send(res, 200, content, types[path.extname(filePath)] || "application/octet-stream");
    });
  });
});

server.listen(port, () => {
  console.log(`Estudio Digital Solvers running on http://localhost:${port}`);
});
