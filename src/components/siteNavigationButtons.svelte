<script lang="ts">
    import Button from "./button.svelte";
</script>

<main>
    <div class="buttonsContainer">
        <Button border={false} link="">Home</Button>
        <Button border={false} link="bla">Menu</Button>
        <Button border={false} link="bla">Contact</Button>
        <Button border={false} link="bla">Our Story</Button>
    </div>
</main>

<style>
    .buttonsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
