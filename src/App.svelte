<script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import hero from "./assets/hero.jpg";
  import Hero from "./components/hero.svelte";
  import Footer from "./components/footer.svelte";
  import Welcome from "./components/welcome.svelte";
  import Reviews from "./components/reviews.svelte";
</script>

<main>
  <div class="overflowContainer">
    <Navbar />
    <div class="scrollContainer"><Hero /></div>
    <div class="scrollContainer"><Welcome /></div>
    <div class="scrollContainer"><Reviews /></div>
    <div class="scrollContainer"><Footer /></div>
  </div>
</main>

<style>
  .scrollContainer {
    scroll-snap-align: start;
    padding-top: 3em;
  }
  .overflowContainer {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }
</style>
