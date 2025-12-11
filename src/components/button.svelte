<script lang="ts">
    import type { Snippet } from "svelte";
    import { base } from "$app/paths";

    interface Props {
        children: Snippet;
        border: boolean;
        link: string;
    }
    const { children, border, link }: Props = $props();
</script>

<main>
    <a href="{base}/{link}">
        <div
            class="buttonContainer"
            style={border ? "border: 2px black solid" : "border: none"}
        >
            <div>{@render children?.()}</div>
        </div></a
    >
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
    a {
        color: black;
    }
</style>
