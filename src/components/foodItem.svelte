<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children: Snippet;
        description: string;
        price: string;
    }
    const { children, description, price }: Props = $props();
</script>

<main>
    <div class="mainContainer">
        <div class="aboveLine">
            <h3>{@render children?.()}</h3>
            <h3>£{price}</h3>
        </div>
        <div class="belowLine">{description}</div>
    </div>
</main>

<style>
    .mainContainer {
        width: 30em;
        padding: 0em 0em 1em 0em;
    }
    .aboveLine {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: flex-start;
        align-content: flex-start;
    }
    .belowLine {
        margin-top: -1.5em;
        font-size: medium;
        padding-bottom: 2em;
        font-size: 1em;
    }
    h3 {
        margin-top: 0;
        font-size: 1.5em;
    }
</style>
