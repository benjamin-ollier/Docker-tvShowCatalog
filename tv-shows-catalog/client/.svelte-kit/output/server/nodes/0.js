

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.kKNDV8pv.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.Z58yM-qa.js"];
export const stylesheets = ["_app/immutable/assets/0.MAwRljNJ.css"];
export const fonts = [];
