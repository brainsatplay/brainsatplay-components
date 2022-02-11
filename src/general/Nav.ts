// Note: Inspired by the Red Hat website https://www.redhat.com/en

import { LitElement, html, css } from 'lit';

type ElementType = {
  content: string
  link?: string
  type?: string
}

export type NavProps = {
  primary: {
    menu: ElementType[]
    options: ElementType[]
  }
  secondary: ElementType[];
  brand: ElementType; // URL or string
  color?: string;
}

export class Nav extends LitElement {

  static get styles() {
    return css`

    

    :host{
      width: 100%;
      height: 100%;
      position: absolute; 
      top: 0;
      left: 0;
      font-family: sans-serif;
    }

    :host * {
      box-sizing: border-box;
    }

    nav {
      color: white;
      width: 100%;
      padding:  0px 25px;
      display: flex;
      align-items: center;
      background: #060606;
    }


    #primary {
      position: sticky; 
      top: 0;
      left: 0;
      height: 75px;
      max-height: 100px;
      justify-content: space-between;
      font-size: 80%;
    }

    #primary > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #secondary {
      height: 50px;
      max-height: 100px;
      justify-content: flex-end;
      border-bottom: 1px solid #3d3d3d;
      font-size: 75%;
    }

    a{
      color: white;
      text-decoration: none;
    }

    a:not(.brand) {
      height: 100%;
      width: 100%;
      max-width: 100px;
      display: flex;
      align-items: center; 
      justify-content: center;
      text-align: center;
    }

    .decorate {
      padding: 10px 15px;
    }

    #primary .decorate:hover {
      box-shadow: 0 4px 0 #0fb3ff inset;
    }

    #secondary .decorate:hover {
      box-shadow: 0 3px 0 #c4c4c4 inset;
    }

    button {
      border: 1px solid white;
      color: white;
      border-radius: 3px;
      background: transparent;
      padding: 5px 10px;
      margin: 10px;
    }

    button:hover {
      outline: 1.1px solid white;
      cursor: pointer;
    }

    @media only screen and (max-width: 800px) {
      #primary > #menu {
        display: none;
      }
    }

    `;
  }
    
    static get properties() {
      return {
        primary: {
          type: Object,
          reflect: true,
        },
        secondary: {
          type: Array,
          reflect: true,
        },
        brand: {
          type: Object,
        },
        color: {
          type: String,
          reflect: true,
        },
      };
    }

    primary: NavProps['primary']
    secondary: NavProps['secondary']

    color: NavProps['color']
    brand: NavProps['brand']

    constructor(props: NavProps = {brand: {
      content: 'My Brand',
    }, primary: {menu: [], options: []}, secondary: []}) {
      super();

      this.primary = props.primary ?? {menu: [], options: []}
      this.secondary = props.secondary ?? []
      this.color = props.color ?? 'blue'
      this.brand = props.brand ?? 'My Brand'

    }
    
    willUpdate(changedProps:any) {
      // console.log(changedProps)
      // if (changedProps.has('type')) {

      // }
    }

    getElement = (o: ElementType) => {
      switch (o.type){

        case 'button': 
          return html`<a href="${o.link}"><button>${o.content}</button></a>`

        default:
          return html`<a href="${o.link}" class="decorate">${o.content}</a>`

      }
    }
  
    render() {

      return html`
      <nav id="secondary">      
      ${this.secondary?.map(o => this.getElement(o))}
      </nav>
      <nav id="primary">
      ${ html`<a class="brand" href=${this.brand.link}>${(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(this.brand.content)) ? html`<img src="${this.brand.content}"></img>` : html`<h1>${this.brand.content.toUpperCase()}</h1>`}</a>`}
        <div id="menu">
          ${this.primary.menu?.map(o => this.getElement(o))}
        </div>
        <div id="options">
        ${this.primary.options?.map(o => this.getElement(o))}
        </div>

      </nav>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna nunc, tempor at nibh vel, blandit pulvinar nisl. Sed porttitor porta tortor maximus bibendum. Maecenas a gravida leo, pellentesque tristique ligula. Quisque rhoncus gravida tellus, et condimentum lectus. Cras laoreet nunc ac ex blandit venenatis. Vivamus hendrerit in sapien id porta. Quisque eu arcu quis nisi mollis pellentesque sit amet ut sem. Donec eget hendrerit enim, in commodo odio. Nam vitae ligula eu risus fermentum suscipit eget eget erat. Vivamus leo justo, vulputate quis volutpat vel, rutrum placerat velit. Sed semper felis ac massa mollis fringilla. Nulla facilisi.

Morbi id pellentesque nulla, ac egestas mauris. Maecenas et nulla sem. Nulla id dui lacus. Nulla elementum, lacus at mollis consequat, urna nisl sollicitudin lacus, aliquam malesuada purus massa id dolor. Praesent eget ligula sed purus eleifend mattis. Vestibulum a libero vitae nisl gravida commodo. In hac habitasse platea dictumst. Pellentesque convallis erat non ipsum luctus pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas et convallis orci. Maecenas sapien justo, iaculis et magna sed, tristique dictum velit.

Nullam sit amet lectus a quam rhoncus lobortis at at risus. Sed elementum congue scelerisque. Donec quis elementum massa. Nulla tristique orci elit, non interdum sem blandit in. Duis vehicula semper elit, ut maximus est semper quis. Nunc vitae lectus sapien. Maecenas vehicula nunc at augue pulvinar, posuere sodales risus tristique. Donec ornare malesuada eros facilisis dignissim. Sed a nunc nibh. Sed convallis, quam quis faucibus tristique, est velit malesuada mi, sed dictum magna enim nec ante. Ut fringilla mattis sem nec vestibulum.

Nullam id dui quis metus sollicitudin efficitur non nec lacus. Vestibulum sit amet nibh mattis ipsum sagittis dictum. Morbi vestibulum turpis non pellentesque faucibus. Maecenas ut porttitor lacus. Ut porta justo vitae lectus eleifend, et iaculis mauris porttitor. Fusce non risus ultricies, finibus tortor sed, facilisis arcu. Morbi id euismod justo, tempor vehicula purus. Cras quam justo, vulputate non mi vitae, laoreet pulvinar ex. Donec sit amet hendrerit turpis. Vestibulum vitae venenatis leo. Nulla imperdiet imperdiet purus nec dignissim.

Vivamus eget turpis urna. Morbi tempus, orci id maximus consequat, diam quam vehicula est, a venenatis risus massa vel metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin eget molestie quam, quis iaculis risus. Nulla in magna metus. Donec dictum leo nibh, a lobortis elit dapibus et. Nunc cursus velit eget tincidunt vulputate. Etiam ultricies consectetur diam. Aenean porttitor dolor vel velit sagittis blandit. In vitae est sit amet arcu aliquet hendrerit. Vestibulum ut lectus ultricies, tempor eros ut, ullamcorper turpis. Sed eget tellus nec augue imperdiet congue quis et ante. Nam eleifend elementum felis. Mauris efficitur dolor ac diam sagittis, et bibendum leo ullamcorper.


      </div>
    `
    }
  }
  
  customElements.define('brainsatplay-nav', Nav);