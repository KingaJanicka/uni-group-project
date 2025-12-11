import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DlMlGYx-.js","_app/immutable/chunks/D_8NnygR.js","_app/immutable/chunks/Bw58evBX.js","_app/immutable/chunks/Cv3jxWJw.js","_app/immutable/chunks/DrKZIh0E.js","_app/immutable/chunks/BTMmhkpL.js","_app/immutable/chunks/CkC4d6K5.js","_app/immutable/chunks/jHZ2ps61.js","_app/immutable/chunks/CJt4MO7-.js"];
export const stylesheets = ["_app/immutable/assets/button.C3NsbVIv.css","_app/immutable/assets/0.C77F3chs.css"];
export const fonts = [];
