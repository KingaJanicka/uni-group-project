import { w as attr_style, x as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
import { a as attr } from "./attributes.js";
function Button($$renderer, $$props) {
  const { children, border, link } = $$props;
  $$renderer.push(`<main><a${attr("href", `${stringify(base)}/${stringify(link)}`)} class="svelte-1ca9ruk"><div class="buttonContainer svelte-1ca9ruk"${attr_style(border ? "border: 2px black solid" : "border: none")}><div>`);
  children?.($$renderer);
  $$renderer.push(`<!----></div></div></a></main>`);
}
export {
  Button as B
};
