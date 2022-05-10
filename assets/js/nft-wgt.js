class NftWgt extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<object data="./assets/media/nft.svg" type="image/svg+xml"></object>`;
  }
}
window.customElements.define('nft-wgt', NftWgt);