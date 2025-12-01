<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
</script>

<main>
    <div class="reviewCardContainer">
        <div class="stars">★★★★☆</div>
        <div>"{@render children?.()}"</div>
        <div class="add">via Trust Pilot</div>
    </div>
</main>

<style>
    .reviewCardContainer {
        border: 2px lightgray solid;
        border-radius: 2em;
        padding: 0.5em 2em;
        width: fit-content;
        margin: 0em 1em 0.5em 1em;
    }
    .stars {
        color: gold;
    }
    .add {
        text-align: right;
        font-size: medium;
        font-style: italic;
    }
</style>
