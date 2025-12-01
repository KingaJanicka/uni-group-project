<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
        border: boolean;
    }
    const { children, border }: Props = $props();
</script>

<main>
    <div
        class="buttonContainer"
        style={border ? "border: 2px black solid" : "border: none"}
    >
        <div>{@render children?.()}</div>
    </div>
</main>

<style>
    .buttonContainer {
        border-radius: 2em;
        padding: 0.5em 2em;
        width: fit-content;
    }
    .buttonContainer:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.075);
    }
</style>
