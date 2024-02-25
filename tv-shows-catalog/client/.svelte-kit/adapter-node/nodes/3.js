import * as server from '../entries/pages/tv-shows/_id_integer_/__slug__/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tv-shows/_id_integer_/__slug__/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tv-shows/[id=integer]/[[slug]]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Dpsd7dp5.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.Z58yM-qa.js"];
export const stylesheets = ["_app/immutable/assets/3.crggmvye.css"];
export const fonts = [];
