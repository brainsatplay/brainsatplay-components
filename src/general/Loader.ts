// Note: Inspired by the Red Hat website https://www.redhat.com/en

import { LitElement, html, css } from 'lit';

export type LoaderProps = {
  progress: number;
  color?: string;
  background?: string;
}

export class Loader extends LitElement {

  static get styles() {
    return css`

    
    :host {
      font-family: sans-serif;
    }

    #container {  
      width: 100%;
    }

    #indicator { 
      width: 100%;
      height: 10px;
      overflow: hidden;
    }

    #indicator > div {
      width: 100%;
      height: 100%;
    }

    `;
  }
    
    static get properties() {
      return {
        progress: {
          type:Number,
          reflect: true,
        },
        color: {
          type: String,
          reflect: true,
        },
        background: {
          type: String,
          reflect: true,
        },
      };
    }

    progress: LoaderProps['progress']
    color: LoaderProps['color']
    background: LoaderProps['background']

    constructor(props: LoaderProps = {progress: 0}) {
      super();

      this.progress = props.progress ?? 0
      this.color = props.color ?? '#7aff80'
      this.background = props.background ?? '#d9d9d9'

    }
    
    willUpdate(_:any) {
      // console.log(changedProps)
      // if (changedProps.has('type')) {

      // }
    }

    render() {

      return html`
        <div id="indicator" style="background:${this.background}">
          <div style="width:${this.progress * 100}%; background: ${this.color}"></div>
        </div>
    `
    }
  }
  
  customElements.define('brainsatplay-loader', Loader);