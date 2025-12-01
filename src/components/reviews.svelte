<script lang="ts">
    import type { Snippet } from "svelte";
    import review1 from "../assets/review1.png";
    import ReviewCard from "./reviewCard.svelte";
</script>

<main>
    <div class="mainContainer">
        <h2>What our customers think</h2>
        <div class="bodyContainer">
            <div><img src={review1} alt="Picture of tasty, tasty sushi" /></div>
            <div class="reviewsContainer">
                <div class="reviewColumn1">
                    <ReviewCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nunc commodo fermentum
                        ante quis.
                    </ReviewCard>
                    <ReviewCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nunc commodo fermentum
                        ante quis.
                    </ReviewCard>
                </div>
                <div class="reviewColumn2">
                    <ReviewCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nunc commodo fermentum
                        ante quis.
                    </ReviewCard>
                    <ReviewCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum in metus id odio cursus gravida a a nibh.
                        Pellentesque tempus tempor enim, ac finibus nulla cursus
                        non. Vestibulum facilisis at enim in feugiat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nunc commodo fermentum
                        ante quis.
                    </ReviewCard>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .mainContainer {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 30vw;
    }
    .bodyContainer {
        display: flex;
        flex-direction: row;
    }
    .reviewsContainer {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>
