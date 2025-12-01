<script lang="ts">
    import Button from "./button.svelte";
</script>

<main>
    <div class="buttonsContainer">
        <Button border={false}>Home</Button><Button border={false}>Menu</Button
        ><Button border={false}>Contact</Button><Button border={false}
            >Our Story</Button
        >
    </div>
</main>

<style>
    .buttonsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
