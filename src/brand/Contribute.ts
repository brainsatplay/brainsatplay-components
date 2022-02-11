import { LitElement, html, css } from 'lit';

export type ContributeProps = {
  verb?: 'donate' | 'contribute';
  color?: 'blue' | 'white';
}

export class Contribute extends LitElement {

  static get styles() {
    return css`

    img{
      width: 100%;
    }

    `;
  }
    
    static get properties() {
      return {
        verb: {
          type: String,
        },
        color: {
          type: String,
          reflect: true,
        },
      };
    }

    verb: ContributeProps['verb']
    color: ContributeProps['color']

    constructor(props: ContributeProps = {}) {
      super();

      this.verb = props.verb ?? 'contribute'
      this.color = props.color ?? 'blue'

    }
    
    willUpdate(_:any) {
      // console.log(changedProps)
      // if (changedProps.has('type')) {

      // }
    }
  
    render() {

      return html`
      <a href="https://opencollective.com/brainsatplay/donate" target="_blank">
        <img src="https://opencollective.com/brainsatplay/${this.verb}/button@2x.png?color=${this.color}"/>
      </a>
    `
    }
  }
  
  customElements.define('brainsatplay-contribute', Contribute);