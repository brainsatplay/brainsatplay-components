// Note: Inspired by the Red Hat website https://www.redhat.com/en

import { LitElement, html, css } from 'lit';

export type LoaderProps = {
  progress: number;
  color?: string;
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
      border: 1px solid white;
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
      };
    }

    progress: LoaderProps['progress']
    color: LoaderProps['color']

    constructor(props: LoaderProps = {progress: 0}) {
      super();

      this.progress = props.progress ?? 0
      this.color = props.color ?? '#0fb3ff'

    }
    
    willUpdate(_:any) {
      // console.log(changedProps)
      // if (changedProps.has('type')) {

      // }
    }

    render() {

      return html`
        <div id="indicator">
          <div style="width:${this.progress * 100}%; background: ${this.color}"></div>
        </div>
    `
    }
  }
  
  customElements.define('brainsatplay-loader', Loader);