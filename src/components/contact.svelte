<script lang="ts">
    import ContactForm from "./contactForm.svelte";
</script>

<main>
    <div class="mainContainer">
        <div class="image1" />
        <div class="formContainer">
            <h2>We'd love to hear from you</h2>
            <ContactForm />
        </div>
        <div class="image2" />
    </div>
</main>

<style>
    .mainContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: top;
        margin: 3em 4em;
        height: 80vh;
    }
    .formContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .image1 {
        height: 13em;
        width: 20em;
        background-image: url("../assets/contact1.png");
        background-size: 100% auto;
        rotate: -25.55deg;
        border-radius: 1em;
        margin-top: 7em;
    }
    .image2 {
        height: 13em;
        width: 20em;
        background-image: url("../assets/contact2.png");
        background-size: 100% auto;
        rotate: 109.5deg;
        border-radius: 1em;
        margin-top: 22em;
        margin-right: -2em;
        margin-left: 2em;
    }
</style>
