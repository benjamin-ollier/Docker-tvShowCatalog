import { A as API_BASE_URL } from './private-0jl9soJc.js';

const load = async ({ fetch }) => {
  const response = await fetch(`${API_BASE_URL}/tv-shows`);
  const tvShows = await response.json();
  return {
    tvShows: tvShows.sort((a, b) => b.rating.average - a.rating.average)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ULKfbZ0q.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.IbnOBdW8.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.Z58yM-qa.js"];
const stylesheets = ["_app/immutable/assets/2.fYnmHc-f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-UpDiMCnu.js.map
