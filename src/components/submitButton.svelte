<script lang="ts">
    let popupOn: boolean = $state(false);
    import { clickOutside } from "./clickOutside";
    interface Props {
        children: Snippet;
    }
    const { children }: Props = $props();
</script>

<main>
    <input
        class="button"
        type="submit"
        value="Submit"
        onclick={(event) => (event.stopPropagation(), (popupOn = true))}
    />
    {#if popupOn === true}
        <div class="popupContainer">
            <div
                class="popup"
                use:clickOutside
                onoutsideclick={() => (popupOn = false)}
            >
                {@render children?.()}
            </div>
        </div>
    {/if}
</main>

<style>
    .button {
        font-family: fustat;
        margin-top: 2em;
        width: 10em;
        height: 3em;
        font-size: large;
        background-color: white;
        border-radius: 2em;
        border: 1px solid grey;
        color: black;
    }
    .button:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2);
    }
    .popup {
        padding: 2em;
        border: 1px solid gainsboro;
        border-radius: 1em;
        text-align: center;
        background: rgb(239, 239, 239);
        font-size: larger;
    }
    .popupContainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
