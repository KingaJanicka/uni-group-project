<script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import hero from "./assets/hero.jpg";
  import Hero from "./components/hero.svelte";
  import Footer from "./components/footer.svelte";
  import Welcome from "./components/welcome.svelte";
</script>

<main>
  <Navbar />
  <div class="scrollContainerHero"><Hero /></div>
  <div class="scrollContainerWelcome"><Welcome /></div>
  <div class="scrollContainerOpinions"></div>
  <div class="scrollContainerFooter"><Footer /></div>
</main>

<style>
  .scrollContainerHero {
  }
</style>
