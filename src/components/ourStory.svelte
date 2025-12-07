<script lang="ts">
    import ourStory1 from "../assets/ourStory1.png";
    import ourStory2 from "../assets/ourStory2.png";
</script>

<main>
    <div class="mainContainer">
        <h2>Our Story</h2>
        <div class="storyContainer">
            <div class="column1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean at mauris vel mi viverra dictum a a massa. Nunc ipsum
                    mi, auctor sit amet arcu mollis, dictum accumsan dui.
                    Suspendisse lobortis leo sed dolor congue, eget facilisis
                    leo lobortis.
                </p>
                <div class="image1" />
            </div>
            <div class="column2">
                <div class="image2" />
            </div>
        </div>
    </div>
</main>

<style>
    .mainContainer {
        padding-top:3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h2{
        font-family: Bethany Elingston;
    }
    p{
        font-family:Fustat;
    }
    .storyContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10em;
    }
    .column1 {
        width: 38vw;
    }
    p {
        font-size: larger;
    }
    .image1 {
        width: 100%;
        height: 35em;
        background-image: url("../assets/ourStory2.png");
        background-size: auto 100%;
    }
    .image2 {
        width: 100%;
        height: 35em;
        background-image: url("../assets/ourStory1.png");
        background-size: 100% auto;
    }
</style>
