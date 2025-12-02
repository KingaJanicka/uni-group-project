<script lang="ts">
    import MenuItems from "./menuItems.svelte";
    import Button from "./button.svelte";
    let section = $state("lunch");
</script>

<main>
    <div class="mainContainer">
        <h2>Our Menu</h2>
        <div class="sectionButtons">
            <button
                style={section == "breakfast"
                    ? "border: 2px black solid; font-weight: bold"
                    : "border: none"}
                onclick={() => {
                    section = "breakfast";
                }}
            >
                Breakfast
            </button>
            <button
                style={section == "lunch"
                    ? "border: 2px black solid; font-weight: bold"
                    : "border: none"}
                onclick={() => {
                    section = "lunch";
                }}
            >
                Lunch
            </button>
            <button
                style={section == "dinner"
                    ? "border: 2px black solid; font-weight: bold"
                    : "border: none"}
                onclick={() => {
                    section = "dinner";
                }}
            >
                Dinner
            </button>
            <button
                style={section == "drinks"
                    ? "border: 2px black solid; font-weight: bold"
                    : "border: none"}
                onclick={() => {
                    section = "drinks";
                }}
            >
                Drinks
            </button>
        </div>
        <div class="reservationContainer">
            <Button border={false} link="/reservations"
                >Book a reservation ↗</Button
            >
        </div>
        <div><MenuItems /></div>
    </div>
</main>

<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button {
        font-size: x-large;
        color: black;
        background-color: rgba(0, 0, 0, 0.05);
        border: none;
        padding: 0.5em 1em;
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 1em;
    }
    button:hover {
        cursor: pointer;
        border: 2px solid black;
    }
    .sectionButtons {
        width: 30em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .reservationContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        padding: 2em 20vw 2em 0em;
    }
</style>
