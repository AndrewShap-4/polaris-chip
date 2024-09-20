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
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        justify-content: space-around; 
        flex-wrap: wrap; 
        margin: 20px;
      }

      .card {
        width: 350px;
        border: 5px solid black;
        padding: 20px;
        margin: 20px;
        height: 400px;
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
        width: 200px;
        height: 60px;
        padding: 10px;
        border: 2px solid black;
        border-radius: 8px;
        text-align: center;
        font-size: 20px;
        background-color: #1eb300
        }

      a:hover {
        background-color: #b30000;
      }

      .img {
        width: 300px;
        height: 125px;
        padding: 6px;
      }
    `;
  }

  render() {
    return html`
    <div class="card">
    <img src="${this.imageSrc}" alt="Card Image"/>
  <h1>
    "${this.title}"
  </h1>
  <p>
    ${this.description}
  </p>
  <a href="${this.link}">${this.button}</a>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      button: { type: String },
      imageSrc: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
