import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'My Card';
    this.description = 'Description';
    this.link = '#';
    this.button = 'Details';
    this.imageSrc = 'Image';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        justify-content: space-around; 
        flex-wrap: wrap; 
        margin: 20px;
      }

      :host([fancy]) {
        display: block;
        background-color: blue;
        border: 5px solid black;
        box-shadow: 20px 10px 10px purple;
      }

      .card {
        width: 350px;
        border: 5px solid black;
        padding: 20px;
        margin: 20px;
        height: flex;
        background-color: lightgrey;
        text-align: center;
      }

      h1 {
        margin: 5px;
        font-size: 25px;
      }

      p {
        font-size: 15px;
        padding: 5px;
      }

      a {
        width: 70px;
        height: 20px;
        padding: 10px;
        margin: 20px;
        border: 2px solid black;
        border-radius: 8px;
        text-align: center;
        font-size: 20px;
        background-color: #1eb300;
        display: inline-block;
        border-radius: 5px;
        }

      a:hover {
        background-color: #b30000;
      }

      .img {
        width: 300px;
        height: 175px;
        padding: 6px;
        display: inline-block;
      }
    `;
  }

  render() {
    return html`
    <div class="card">
        <img class="img" src="${this.imageSrc}" alt="Card Image" />
        <h1>${this.title}</h1>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
        </details>
        <a href="${this.link}">${this.button}</a>
      </div>
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      button: { type: String },
      imageSrc: { type: String },
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
