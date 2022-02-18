
import { LitElement, html, css } from 'lit';

type ElementType = {
  name: string
  type: string
  onclick?: Function,
}

export type FileSystemProps = {
  files: ElementType[];
}

export class FileSystem extends LitElement {

  static get styles() {
    return css`

    
    :host {
      font-family: sans-serif;
    }
    :host * {
      box-sizing: border-box;
    }

    .container {
      background: white;
      border: 1px solid gray;
    }

    .header {
      padding: 10px;
      border-bottom: 1px solid gray;
    }

    .files {
      width: 100%;
      padding: 10px;
    }

    .file {
      width: 100%;
      font-size: 90%;
      padding: 10px 15px;
      background: gainsboro;
    }

    `;
  }
    
    static get properties() {
      return {
        files: {
          type: Array,
          reflect: true,
        },
      };
    }

    files: FileSystemProps['files']

    constructor(props: FileSystemProps = {files: []}) {
      super();

      this.files = props.files ?? []

    }
    
    willUpdate(_:any) {
      // console.log(changedProps)
      // if (changedProps.has('type')) {

      // }
    }

    getElement = (o: ElementType) => {
      switch (o.type){

        case 'button': 
          return html`<a class="file" onclick="${o.onclick}"><button>${o.name}</button></a>`

        default:
          return html`<a class="file" onclick="${o.onclick}" >${o.name}</a>`

      }
    }
  
    render() {



      return html`
      <div class="container">
        <div class="header">Container</div>
        <div class="files">
            ${this.files?.map(o => this.getElement(o))}
        </div>
      </div>

    `
    }
  }
  
  customElements.define('brainsatplay-filesystem', FileSystem);