import "clsx";
import { a as attr } from "../../chunks/attributes.js";
function Hero($$renderer) {
  $$renderer.push(`<main class="svelte-1tpovv8"><div class="heroContainer svelte-1tpovv8"><h1 class="svelte-1tpovv8">Cool, catchy title</h1></div></main>`);
}
const gallery1 = "/_app/immutable/assets/galery1.DiPmu-14.png";
const gallery2 = "/_app/immutable/assets/galery2.pa68SBPw.png";
const gallery3 = "/_app/immutable/assets/galery3.CYFkfqj6.png";
const gallery4 = "/_app/immutable/assets/galery4.VIPpvcAb.png";
const gallery5 = "/_app/immutable/assets/galery5.C-D10ujC.png";
const gallery6 = "/_app/immutable/assets/galery6.DcjUdQTM.png";
const gallery7 = "/_app/immutable/assets/galery7.dTrVlZ1-.png";
const gallery8 = "/_app/immutable/assets/galery8.B9sTsmUw.png";
function WeclomeGrid($$renderer) {
  $$renderer.push(`<main><div class="welcomeGridContainer svelte-g5qmxa"><div class="innerContainer svelte-g5qmxa"><div class="column1 svelte-g5qmxa"><img${attr("src", gallery1)} alt="Food" class="svelte-g5qmxa"/> <img${attr("src", gallery2)} alt="Food" class="svelte-g5qmxa"/></div> <div class="column2 svelte-g5qmxa"><img${attr("src", gallery3)} alt="Food" class="svelte-g5qmxa"/> <img${attr("src", gallery4)} alt="Food" class="svelte-g5qmxa"/></div> <div class="column3 svelte-g5qmxa"><img${attr("src", gallery5)} alt="Food" class="svelte-g5qmxa"/> <img${attr("src", gallery6)} alt="Food" class="svelte-g5qmxa"/></div> <div class="column4 svelte-g5qmxa"><img${attr("src", gallery7)} alt="Food" class="svelte-g5qmxa"/> <img${attr("src", gallery8)} alt="Food" class="svelte-g5qmxa"/></div></div></div></main>`);
}
function Welcome($$renderer) {
  $$renderer.push(`<main><div class="mainContainer"><div class="welcomeContainer svelte-4a2gw4"><h2>Welcome Message</h2> <div class="welcomeText svelte-4a2gw4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in metus id odio cursus gravida a a nibh.
                Pellentesque tempus tempor enim, ac finibus nulla cursus non.
                Vestibulum facilisis at enim in feugiat.</div></div> `);
  WeclomeGrid($$renderer);
  $$renderer.push(`<!----></div></main>`);
}
const review1 = "/_app/immutable/assets/review1.MwcNB__R.png";
function ReviewCard($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<main><div class="reviewCardContainer svelte-m6zqzy"><div class="stars svelte-m6zqzy">★★★★☆</div> <div>"`);
  children?.($$renderer);
  $$renderer.push(`<!---->"</div> <div class="add svelte-m6zqzy">via Trust Pilot</div></div></main>`);
}
function Reviews($$renderer) {
  $$renderer.push(`<main><div class="mainContainer svelte-81vk7l"><h2 class="svelte-81vk7l">What our customers think</h2> <div class="bodyContainer svelte-81vk7l"><div><img${attr("src", review1)} alt="Picture of tasty, tasty sushi" class="svelte-81vk7l"/></div> <div class="reviewsContainer svelte-81vk7l"><div class="reviewColumn1">`);
  ReviewCard($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac inibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.`);
    }
  });
  $$renderer.push(`<!----> `);
  ReviewCard($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.`);
    }
  });
  $$renderer.push(`<!----></div> <div class="reviewColumn2">`);
  ReviewCard($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.`);
    }
  });
  $$renderer.push(`<!----> `);
  ReviewCard($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.`);
    }
  });
  $$renderer.push(`<!----></div></div></div></div></main>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="scrollContainer">`);
  Hero($$renderer);
  $$renderer.push(`<!----></div> <div class="scrollContainer">`);
  Welcome($$renderer);
  $$renderer.push(`<!----></div> <div class="scrollContainer">`);
  Reviews($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
