
import { LitElement, html, css } from 'lit';

export type ObjectEditorProps = {
  target: {[x:string]: any}
  header?: string
  mode?: string
}

export class ObjectEditor extends LitElement {

  static get styles() {
    return css`

    
    :host {
      font-family: sans-serif;
    }
    :host * {
      box-sizing: border-box;
    }

    .main {
      background: white;
      border: 1px solid gray;
    }

    button {
      padding: 10px;
      min-width: 25px;
    }

    .header {
      padding: 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      color: white;
      background: black;
      font-size: 80%;
    }

    .header span {
      font-weight: 800;
      font-size: 120%;
    }

    .container {
      background: white;
      border: 1px solid gray;
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .separate {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .attribute {
      width: 100%;
      font-size: 90%;
      padding: 15px;
      background: gainsboro;
      flex-grow: 1;
      margin: 10px;
      border-radius: 10px;
    }

    .name {
      font-weight: 800;
      padding-right: 10px;
    }

    .value {
      font-size: 80%;
    }

    `;
  }
    
    static get properties() {
      return {
        target: {
          type: Object,
          reflect: true,
        },
        header: {
          type: String,
          reflect: true,
        },
        mode: {
          type: String,
          reflect: true,
        },
      };
    }

    target: ObjectEditorProps['target']
    header: ObjectEditorProps['header']
    history: any[] = []
    mode: string

    constructor(props: ObjectEditorProps = {target: {}, header: 'Object'}) {
      super();

      this.target = props.target ?? {}
      this.header = props.header ?? 'Object'
      this.mode = props.mode ?? 'view'

    }
    
    willUpdate(changedProps:any) {
      // console.log(changedProps)
      if (changedProps.has('target')) {

      }
    }

    getActions = (key:string, o:any) => {

      let actions;

      if (typeof o[key] === 'object') {
        actions = html`<button @click="${() => {
          this.history.push({parent: o, key: this.header})
          this.target = o[key]
          this.header = key
          this.mode = (Array.isArray(o[key])) ? 'plot' : 'view'
      }}">${Array.isArray(o[key]) ? html`Plot` : html`View`}</button>`
      }

      return html`
      <div class="actions">
            ${actions}
      </div>
      `
    }


    getElement = (key:string, o: any) => {

        
        return html`
        <div class="attribute separate">
        <div>
          <span class="name">${key}</span><br>
          <span class="value">${(
            typeof o[key] === 'object' 
            ? (Object.keys(o[key]).length ? o[key].constructor.name : html`Empty ${o[key].constructor.name}`)
            : o[key])}</span>
        </div>
          ${this.getActions(key, o)}
        </div>`

    }
  
    render() {

      return html`
      <div>
        <div class="header separate">
          <span>${this.header}</span>
          ${ (this.history.length > 0) ? html`<button @click="${() => {
              const historyItem = this.history.pop()
              this.header = historyItem.key
              this.target = historyItem.parent
          }}">Go Back</button>` : `No History`}
        </div>
        <div class="container">
              ${(
                this.mode === 'view' 
                ? Object.keys(this.target)?.map(key => this.getElement(key, this.target))
                : Object.keys(this.target)?.map(key => this.getElement(key, this.target)) // TODO: Implement plot
              )}
        </div>
      </div>
    `
    }
  }
  
  customElements.define('brainsatplay-object-editor', ObjectEditor);