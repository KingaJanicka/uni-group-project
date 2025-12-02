<script lang="ts">
    import FoodItem from "./foodItem.svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="items">
            <FoodItem price="12" description="Futhrer description of said food"
                >Example Food</FoodItem
            >
            <FoodItem price="19" description="Futhrer description of said food"
                >Example Food</FoodItem
            >
            <FoodItem price="17" description="Futhrer description of said food"
                >Example Food</FoodItem
            >
            <FoodItem price="22" description="Futhrer description of said food"
                >Example Food</FoodItem
            >
            <FoodItem price="10" description="Futhrer description of said food"
                >Example Food</FoodItem
            >
        </div>
        <div class="image"></div>
    </div>
</main>

<style>
    .mainContainer {
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .items {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .image {
        background-image: url("../assets/menu.png");
        height: 65vh;
        width: 33vw;
    }
</style>
