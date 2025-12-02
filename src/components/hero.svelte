<script lang="ts">
    import type { Snippet } from "svelte";
    import hero from "../assets/hero.jpg";
</script>

<main>
    <div class="heroContainer"><h1>Cool, catchy title</h1></div>
</main>

<style>
    h1 {
        color: white;
        font-size: 6em;
    }
    .heroContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url("../assets/hero.jpg");
        background-size: auto 100%;
        height: 100vh;
        /* width: 100vw; */
    }
</style>
