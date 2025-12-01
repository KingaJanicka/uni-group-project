<script lang="ts">
  import Navbar from "./components/navbar.svelte";
  import hero from "./assets/hero.jpg";
  import Hero from "./components/hero.svelte";
</script>

<main>
  <Navbar />
  <div class="scrollContainerHero"><Hero /></div>
  <div class="scrollContainerWelcome"></div>
  <div class="scrollContainerOpinions"></div>
  <div class="scrollContainerFooter"></div>
</main>

<style>
  .scrollContainerHero {
  }
</style>
