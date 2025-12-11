import "clsx";
function SubmitButton($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<main><input class="button svelte-vnknks" type="submit" value="Submit"/> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></main>`);
}
export {
  SubmitButton as S
};
