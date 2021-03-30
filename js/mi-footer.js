class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<p>
        &copy; 2021 Marco antonio Morales Rios
        
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
