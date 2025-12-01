<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
</script>

<main>
    <div class="buttonContainer">
        <div>{@render children?.()}</div>
    </div>
</main>

<style>
    .buttonContainer {
        border: 2px black solid;
        border-radius: 2em;
        padding: 0.5em 2em;
        width: fit-content;
    }
</style>
