<script lang="ts">
    import type { Snippet } from "svelte";
    import hero from "../assets/hero.jpg";
    import WeclomeGrid from "./weclomeGrid.svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="welcomeContainer">
            <h2>Welcome Message</h2>
            <div class="welcomeText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum in metus id odio cursus gravida a a nibh.
                Pellentesque tempus tempor enim, ac finibus nulla cursus non.
                Vestibulum facilisis at enim in feugiat.
            </div>
        </div>
        <WeclomeGrid />
    </div>
</main>

<style>
    h1 {
        color: white;
        font-size: 6em;
    }
    .mainContainer {
        padding-bottom: 3em;
    }
    .welcomeContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .welcomeText {
        width: 85%;
        padding: 1em 0em 3em 0em;
    }
</style>
