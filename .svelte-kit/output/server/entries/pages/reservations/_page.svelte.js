import "clsx";
import { y as ensure_array_like } from "../../../chunks/index.js";
import { S as SubmitButton } from "../../../chunks/submitButton.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Calendar($$renderer) {
  $$renderer.push(`<main class="svelte-ky9602"><div class="infoInput svelte-ky9602"><div class="fieldContainer svelte-ky9602"><div class="svelte-ky9602">Date:</div> <input class="calendar svelte-ky9602" type="date" step="1"/></div> <div class="fieldContainer svelte-ky9602"><div class="svelte-ky9602">Time:</div> <select name="time" class="time svelte-ky9602" id="time"><!--[-->`);
  const each_array = ensure_array_like({ length: 11 });
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    $$renderer.option(
      { value: (idx + 10) * 100 + 0, class: "" },
      ($$renderer2) => {
        $$renderer2.push(`${escape_html(idx + 10)}:00`);
      },
      "svelte-ky9602"
    );
    $$renderer.push(` `);
    $$renderer.option(
      { value: (idx + 10) * 100 + 15, class: "" },
      ($$renderer2) => {
        $$renderer2.push(`${escape_html(idx + 10)}:15`);
      },
      "svelte-ky9602"
    );
    $$renderer.push(` `);
    $$renderer.option(
      { value: (idx + 10) * 100 + 30, class: "" },
      ($$renderer2) => {
        $$renderer2.push(`${escape_html(idx + 10)}:30`);
      },
      "svelte-ky9602"
    );
    $$renderer.push(` `);
    $$renderer.option(
      { value: (idx + 10) * 100 + 45, class: "" },
      ($$renderer2) => {
        $$renderer2.push(`${escape_html(idx + 10)}:45`);
      },
      "svelte-ky9602"
    );
  }
  $$renderer.push(`<!--]--></select></div> <div class="fieldContainer svelte-ky9602"><div class="svelte-ky9602">Seats:</div> <select name="seats" class="seats svelte-ky9602" id="seats"><!--[-->`);
  const each_array_1 = ensure_array_like({ length: 12 });
  for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
    $$renderer.option(
      { value: idx + 1, class: "" },
      ($$renderer2) => {
        $$renderer2.push(`${escape_html(idx + 1)}`);
      },
      "svelte-ky9602"
    );
  }
  $$renderer.push(`<!--]--></select></div> <div class="fieldContainer svelte-ky9602"><div class="svelte-ky9602">Name:</div> <input class="field svelte-ky9602" type="text" id="name" name="name" placeholder="Tell us your name"/></div> <div class="svelte-ky9602">`);
  SubmitButton($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Your date has been reserved! Check your Email`);
    }
  });
  $$renderer.push(`<!----></div></div></main>`);
}
function Booking($$renderer) {
  $$renderer.push(`<main class="svelte-fd6wrr"><div class="mainContainer svelte-fd6wrr"><h2 class="svelte-fd6wrr">Book a table</h2> `);
  Calendar($$renderer);
  $$renderer.push(`<!----></div></main>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="scrollContainer">`);
  Booking($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
