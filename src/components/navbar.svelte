<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "./button.svelte";
    import SiteNavigationButtons from "./siteNavigationButtons.svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="logoContainer">Logotype</div>
        <div class="linkContainer"><SiteNavigationButtons /></div>
        <div class="buttonContainer">
            <Button border={true} link="/reservations">Reservations</Button>
        </div>
    </div>
</main>

<style>
    .logoContainer {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding: 0em 2em;
    }
    .linkContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .buttonContainer {
        display: flex;
        flex-direction: row;
        justify-content: end;
        padding: 0em 1.5em;
    }
    .buttonContainer :global(button){
         color:black;
    }
    .buttonContainer :global(a) {
        color:black;
    }
    .mainContainer {
        position: fixed;
        z-index: 100;
        top: 0px;
        left: 0px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        width: 100vw;
        padding: 1em 0em;
        margin: 0em;
        color:black;
        font-family: 'Fustat';
    }
</style>
