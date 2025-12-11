import "clsx";
import { S as SubmitButton } from "../../../chunks/submitButton.js";
function ContactForm($$renderer) {
  $$renderer.push(`<main class="svelte-1u1dtte"><div class="mainContainer svelte-1u1dtte"><div class="fieldContainer svelte-1u1dtte"><label for="name" class="svelte-1u1dtte">Name</label> <input class="field svelte-1u1dtte" type="text" id="name" name="name" placeholder="Tell us your name"/></div> <div class="fieldContainer svelte-1u1dtte"><label for="email" class="svelte-1u1dtte">Email</label> <input class="field svelte-1u1dtte" type="email" id="email" name="email" placeholder="example@email.com"/></div> <div class="fieldContainer svelte-1u1dtte"><label for="message" class="svelte-1u1dtte">Message</label> <textarea class="message svelte-1u1dtte" type="text" id="message" name="message" placeholder="Let us know"></textarea></div> `);
  SubmitButton($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->We will get back to you shortly!`);
    }
  });
  $$renderer.push(`<!----></div></main>`);
}
function Contact($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-1jcynm8"><div class="image1 svelte-1jcynm8"></div> <div class="formContainer svelte-1jcynm8"><h2>We'd love to hear from you</h2> `);
  ContactForm($$renderer);
  $$renderer.push(`<!----></div> <div class="image2 svelte-1jcynm8"></div></div></main>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="scrollContainer">`);
  Contact($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
