import { A as API_BASE_URL } from './private-0jl9soJc.js';
import { e as error } from './index-q5FEf9Bi.js';

const load = async ({ fetch, params: { id } }) => {
  const response = await fetch(`${API_BASE_URL}/tv-shows/${id}`);
  if (!response.ok) {
    throw error(response.status, await response.json());
  }
  const tvShow = await response.json();
  return {
    tvShow
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Aomg2Hn7.js')).default;
const server_id = "src/routes/tv-shows/[id=integer]/[[slug]]/+page.server.ts";
const imports = ["_app/immutable/nodes/3.Dpsd7dp5.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.Z58yM-qa.js"];
const stylesheets = ["_app/immutable/assets/3.crggmvye.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-01-Nto3B.js.map
