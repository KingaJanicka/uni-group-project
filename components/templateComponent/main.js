class Template extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Enables Shadow DOM for encapsulation
  }

  connectedCallback() {
    const text = this.getAttribute('text');
    this.shadowRoot.innerHTML = `
      <style>
        .tooltip {
            background-color:blue;
        }
        .tooltip-text {
            visibility: hidden;
        }
        .tooltip:hover {
            visibility: visible;
            background-color:yellow;
        }
      </style>
      <div class="tooltip">
        <slot></slot>
        <span class="tooltip-text">${text}</span>
      </div>
    `;
  }
}

customElements.define('template', Template);