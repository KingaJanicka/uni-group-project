

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/our-story/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BcYn77gK.js","_app/immutable/chunks/D_8NnygR.js","_app/immutable/chunks/Bw58evBX.js","_app/immutable/chunks/BTMmhkpL.js"];
export const stylesheets = ["_app/immutable/assets/5.BFKbtM-b.css"];
export const fonts = [];
