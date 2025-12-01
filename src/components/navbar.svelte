<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "./button.svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="logoContainer">Logotype</div>
        <div class="linkContainer">Linky links</div>
        <div class="buttonContainer"><Button>Reservations</Button></div>
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
    .mainContainer {
        position: fixed;
        top: 0px;
        left: 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100vw;
        background: #ffffff;
        padding: 1em 0em;
        margin: 0em;
    }
</style>
