<script lang="ts">
    import type { Snippet } from "svelte";
    import Calendar from "./calendar.svelte";
</script>

<main>
    <div class="mainContainer">
        <h2>Book a table</h2>
        <Calendar />
    </div>
</main>

<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url("../assets/reservations.png");
        background-size: 100% auto;
        height: 100vh;
    }
    h2 {
        color: white;
    }
</style>
