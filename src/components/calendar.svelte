<script lang="ts">
    import type { Snippet } from "svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="fieldContainer">
            <div>Date:</div>
            <input class="calendar" type="date" step="1" />
        </div>
        <div class="fieldContainer">
            <div>Time:</div>
            <select name="time" class="time" id="time">
                {#each { length: 11 }, idx}
                    <option value={(idx + 10) * 100 + 0}>{idx + 10}:00</option>
                    <option value={(idx + 10) * 100 + 15}>{idx + 10}:15</option>
                    <option value={(idx + 10) * 100 + 30}>{idx + 10}:30</option>
                    <option value={(idx + 10) * 100 + 45}>{idx + 10}:45</option>
                {/each}
            </select>
        </div>
        <div class="fieldContainer">
            <div>Seats:</div>
            <select name="seats" class="seats" id="seats">
                {#each { length: 12 }, idx}
                    <option value={idx + 1}>{idx + 1}</option>
                {/each}
            </select>
        </div>
    </div>
</main>

<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 15em;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 1em;
        padding: 20vh 15vh;
    }
    .fieldContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1em;
        font-size: larger;
    }
    .calendar {
        font-size: x-large;
    }
    option,
    select {
        font-size: large;
    }
</style>
