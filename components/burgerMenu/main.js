class BurgerMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Enables Shadow DOM for encapsulation
    }

    connectedCallback() {
        const text = this.getAttribute('text');
        this.shadowRoot.innerHTML = `
        <style></style>
        <div class="navBar">
            <img src="logo.png" alt="Logo" class="logo">
            <ul class="navLinks">
                <div class="center">
                    <li><a href="main.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="ourStory.html">Our Story</a></li>
                </div>
                <div class="right">
                    <li><a href="reservations.html">Reservations</a></li>
                </div>
            </ul>
        </div>
    `;
    }
}

customElements.define('burger-menu', BurgerMenu);