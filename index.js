const bootedAt = Date.now();
export default {
  async fetch(req) {
    const body = JSON.stringify({ ok: true, path: new URL(req.url).pathname, boot_ms: Date.now() - bootedAt });
    return new Response(body, { status: 200, headers: { 'content-type': 'application/json' } });
  },
};
