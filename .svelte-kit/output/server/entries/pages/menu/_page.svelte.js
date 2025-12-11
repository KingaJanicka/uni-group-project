import "clsx";
import { w as attr_style } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { B as Button } from "../../../chunks/button.js";
function FoodItem($$renderer, $$props) {
  const { children, description, price } = $$props;
  $$renderer.push(`<main><div class="mainContainer svelte-5t2xll"><div class="aboveLine svelte-5t2xll"><h3 class="svelte-5t2xll">`);
  children?.($$renderer);
  $$renderer.push(`<!----></h3> <h3 class="svelte-5t2xll">£${escape_html(price)}</h3></div> <div class="belowLine svelte-5t2xll">${escape_html(description)}</div></div></main>`);
}
function MenuItems($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-1cbn1dl"><div class="items svelte-1cbn1dl">`);
  FoodItem($$renderer, {
    price: "12",
    description: "Futhrer description of said food",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Example Food`);
    }
  });
  $$renderer.push(`<!----> `);
  FoodItem($$renderer, {
    price: "19",
    description: "Futhrer description of said food",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Example Food`);
    }
  });
  $$renderer.push(`<!----> `);
  FoodItem($$renderer, {
    price: "17",
    description: "Futhrer description of said food",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Example Food`);
    }
  });
  $$renderer.push(`<!----> `);
  FoodItem($$renderer, {
    price: "22",
    description: "Futhrer description of said food",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Example Food`);
    }
  });
  $$renderer.push(`<!----> `);
  FoodItem($$renderer, {
    price: "10",
    description: "Futhrer description of said food",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Example Food`);
    }
  });
  $$renderer.push(`<!----></div> <div class="image svelte-1cbn1dl"></div></div></main>`);
}
function Menu($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-yf8vl"><h2>Our Menu</h2> <div class="sectionButtons svelte-yf8vl"><button${attr_style("border: none")} class="svelte-yf8vl">Breakfast</button> <button${attr_style(
    "border: 2px black solid; font-weight: bold"
  )} class="svelte-yf8vl">Lunch</button> <button${attr_style("border: none")} class="svelte-yf8vl">Dinner</button> <button${attr_style("border: none")} class="svelte-yf8vl">Drinks</button></div> <div class="reservationContainer svelte-yf8vl">`);
  Button($$renderer, {
    border: false,
    link: "/reservations",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Book a reservation ↗`);
    }
  });
  $$renderer.push(`<!----></div> <div>`);
  MenuItems($$renderer);
  $$renderer.push(`<!----></div></div></main>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="scrollContainer">`);
  Menu($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
