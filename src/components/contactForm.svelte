<script lang="ts"></script>

<main>
    <div class="mainContainer">
        <div class="fieldContainer">
            <label for="name">Name</label>
            <input
                class="field"
                type="text"
                id="name"
                name="name"
                placeholder="Tell us your name"
            />
        </div>
        <div class="fieldContainer">
            <label for="email">Email</label>
            <input
                class="field"
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
            />
        </div>
        <div class="fieldContainer">
            <label for="message">Message</label>
            <input
                class="message"
                type="text"
                id="message"
                name="message"
                placeholder="Let us know"
            />
        </div>
        <input class="button" type="submit" value="Submit" />
    </div>
</main>

<style>
    .mainContainer {
        width: 35vw;
        height: 55vh;
        border: 2px solid gainsboro;
        border-radius: 1em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .fieldContainer {
        display: flex;
        flex-direction: column;
        padding: 2em 2em 0em 2em;
        width: 90%;
    }
    .field {
        background-color: white;
        height: 2.5em;
        border-radius: 0.75em;
        padding: 0.2em 0.5em;
        color: black;
        font-size: 0.9em;
    }
    .message {
        background-color: white;
        height: 10em;
        border-radius: 0.75em;
        padding: 0.2em 0.5em;
        color: black;
        font-size: 0.9em;
    }
    ::placeholder {
        font-size: 1.1em;
        font-size: 0.9em;
    }
    .button {
        margin-top: 2em;
        width: 10em;
        height: 3em;
        font-size: large;
        background-color: white;
        border-radius: 2em;
        border: 1px solid grey;
        color: black;
    }
</style>
