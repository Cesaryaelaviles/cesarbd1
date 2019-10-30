customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Cesar Yael Aviles IC-51M";
  }
}, { extends: "footer" });