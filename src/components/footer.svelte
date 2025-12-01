<script lang="ts">
    import type { Snippet } from "svelte";
</script>

<main>
    <div class="footerContainer">
        <div class="getInTouch">
            <h2>Get in Touch</h2>
            <div>
                <p>example@company.com</p>
                <br />
                <p>0700 000000</p>
            </div>
        </div>
        <div class="hours">
            <h2>Opening Hours</h2>
            <div>
                <p>Mon - Fri</p>
                <p>10:00ma - 10:00pm</p>
                <br />
                <p>Sat - Sun</p>
                <p>5:00pm - 9:00pm</p>
            </div>
        </div>
        <div class="location">
            <h2>Location</h2>
            <div>
                <p>145 Victoria Street, London</p>
                <p>SW1E 5NT</p>
            </div>
        </div>
    </div>
</main>

<style>
    p {
        margin: 0em;
    }
    h2 {
        padding-bottom: 2.5em;
    }
    .footerContainer {
        padding: 3em 0em 5em 0em;
        color: white;
        background-color: #131313;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
