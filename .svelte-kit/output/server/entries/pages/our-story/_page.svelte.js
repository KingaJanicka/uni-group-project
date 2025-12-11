import "clsx";
function OurStory($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-1yunoy5"><h2 class="svelte-1yunoy5">Our Story</h2> <div class="storyContainer svelte-1yunoy5"><div class="column1 svelte-1yunoy5"><p class="svelte-1yunoy5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean at mauris vel mi viverra dictum a a massa. Nunc ipsum
                    mi, auctor sit amet arcu mollis, dictum accumsan dui.
                    Suspendisse lobortis leo sed dolor congue, eget facilisis
                    leo lobortis.</p> <div class="image1 svelte-1yunoy5"></div></div> <div class="column2"><div class="image2 svelte-1yunoy5"></div></div></div></div></main>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="scrollContainer">`);
  OurStory($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
