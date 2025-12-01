<script lang="ts">
    import type { Snippet } from "svelte";
    import gallery1 from "../assets/galery1.png";
    import gallery2 from "../assets/galery2.png";
    import gallery3 from "../assets/galery3.png";
    import gallery4 from "../assets/galery4.png";
    import gallery5 from "../assets/galery5.png";
    import gallery6 from "../assets/galery6.png";
    import gallery7 from "../assets/galery7.png";
    import gallery8 from "../assets/galery8.png";
</script>

<main>
    <div class="welcomeGridContainer">
        <div class="innerContainer">
            <div class="column1">
                <img src={gallery1} alt="Food" />
                <img src={gallery2} alt="Food" />
            </div>
            <div class="column2">
                <img src={gallery3} alt="Food" />
                <img src={gallery4} alt="Food" />
            </div>
            <div class="column3">
                <img src={gallery5} alt="Food" />
                <img src={gallery6} alt="Food" />
            </div>
            <div class="column4">
                <img src={gallery7} alt="Food" />
                <img src={gallery8} alt="Food" />
            </div>
        </div>
    </div>
</main>

<style>
    .welcomeGridContainer {
        overflow: hidden;
        position: relative;
        height: 65vh;
    }
    .innerContainer {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        padding: 0 1em;
        top: -5em;
    }
    .column1 {
        margin-top: 5em;
        text-align: center;
    }
    .column2 {
        margin-top: 1em;
        text-align: center;
    }
    .column3 {
        margin-bottom: 5em;
        text-align: center;
    }
    .column4 {
        text-align: center;
    }
    img {
        max-width: 24vw;
    }
</style>
