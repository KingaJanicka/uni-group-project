import "clsx";
import { B as Button } from "../../chunks/button.js";
function SiteNavigationButtons($$renderer) {
  $$renderer.push(`<main><div class="buttonsContainer svelte-1lxjuq6">`);
  Button($$renderer, {
    border: false,
    link: "/",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Home`);
    }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    border: false,
    link: "/menu",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Menu`);
    }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    border: false,
    link: "/contact",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Contact`);
    }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    border: false,
    link: "/our-story",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Our Story`);
    }
  });
  $$renderer.push(`<!----></div></main>`);
}
function Navbar($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-1ha2lk6"><div class="logoContainer svelte-1ha2lk6">Logotype</div> <div class="linkContainer svelte-1ha2lk6">`);
  SiteNavigationButtons($$renderer);
  $$renderer.push(`<!----></div> <div class="buttonContainer svelte-1ha2lk6">`);
  Button($$renderer, {
    border: true,
    link: "/reservations",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Reservations`);
    }
  });
  $$renderer.push(`<!----></div></div></main>`);
}
function Footer($$renderer) {
  $$renderer.push(`<main><div class="footerContainer svelte-1jfonih"><div class="getInTouch"><h2 class="svelte-1jfonih">Get in Touch</h2> <div><p class="svelte-1jfonih">example@company.com</p> <br/> <p class="svelte-1jfonih">0700 000000</p></div></div> <div class="hours"><h2 class="svelte-1jfonih">Opening Hours</h2> <div><p class="svelte-1jfonih">Mon - Fri</p> <p class="svelte-1jfonih">10:00ma - 10:00pm</p> <br/> <p class="svelte-1jfonih">Sat - Sun</p> <p class="svelte-1jfonih">5:00pm - 9:00pm</p></div></div> <div class="location"><h2 class="svelte-1jfonih">Location</h2> <div><p class="svelte-1jfonih">145 Victoria Street, London</p> <p class="svelte-1jfonih">SW1E 5NT</p></div></div></div></main>`);
}
function _layout($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<main><div class="overflowContainer svelte-12qhfyh">`);
  Navbar($$renderer);
  $$renderer.push(`<!---->  `);
  children($$renderer);
  $$renderer.push(`<!----> <div class="scrollContainer svelte-12qhfyh">`);
  Footer($$renderer);
  $$renderer.push(`<!----></div></div></main>`);
}
export {
  _layout as default
};
