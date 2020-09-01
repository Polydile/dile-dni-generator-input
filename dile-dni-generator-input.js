import { html, css, LitElement } from 'lit-element';

export class DileDniGeneratorInput extends LitElement {
  static get properties() {
    return {
      /** Set initial value to the input. This property syncs to the input field value property */
      dni: { type: String },
      /** Label to the element */
      label: { type: String },
      /** Set a placeholder to the input element */
      placeholder: { type: String },
      /** Disable the input field */
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.dni = '';
    this.label = '';
    this.placeholder = 'Please insert DNI numbers';
    this.disabled = false;
    this.lengthConstraint = 8;
    this.dniMaxLength = 12;
    this.type = 'number';
    this.letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
  }

  static get styles() {
    return css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
      padding: 24px;
    }
    label {
      display: block;
      padding: 4px;
      font-family: var(--dile-dni-generator-input-label-font-family, Helvetica, sans-serif);
      margin-bottom: var(--dile-dni-generator-input-label-margin-bottom, 4px);
      font-size: var(--dile-dni-generator-input-label-font-size, 1em);
      color: var(--dile-dni-generator-input-label-color, #59e);
      font-weight: var(--dile-dni-generator-input-label-font-weight, normal);
    }
    input {
      box-sizing: border-box;
      border-radius: var(--dile-dni-generator-input-border-radius, 16px);
      border: var(--dile-dni-generator-input-border-width, 1px) solid var(--dile-dni-generator-input-border-color, #888);
      font-size: var(--dile-dni-generator-input-font-size, 1em);
      font-family: var(--dile-dni-generator-input-label-font-family, Helvetica, sans-serif);
      line-height: var(--dile-dni-generator-input-line-height, 1.5em);
      padding: var(--dile-dni-generator-input-padding, 8px);
      width: var(--dile-dni-generator-input-width, 100%);
      background-color: var(--dile-dni-generator-input-background-color, #fff);
      
    }
    input:focus {
      outline: none;
      border-color: var(--dile-dni-generator-input-focus-border-color, #6af)
    }
    input::placeholder {
      color: #ccc;
    }
    input:disabled {
      background-color: #f5f5f5;
      border-color: var(--dile-dni-generator-input-disabled-border-color, #eee);
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
    `;
  }

  render() {
    return html`
      <div>
        ${this.label ? html`<label for="textField">${this.label}</label>` : ''}
        <input
          id="dniGenerator"
          type=${this.type}
          maxlength=${this.dniMaxLength}
          name="${this.name}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${this._dniChanged}"
          @keydown="${this._lookForBackSpace}"
          .value="${this.dni}"
        />
      </div>
    `;
  }

  _dniChanged(e) {
    this.dni = e.target.value;
    if (this.dni && this.dni.length === this.lengthConstraint) {
      this.type = 'text';
      this.dni += ` - ${this._calculateLetter()}`;
    }
  }

  _calculateLetter() {
    return this.letters.charAt(this.dni % 23);
  }

  /**
   * Private method to dispatch events on backspace key pressed
   */
  _lookForBackSpace(e) {
    const keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 8) {
      this.dispatchEvent(new CustomEvent('backspace-pressed'));
      this.type = 'number';
      if (this.dni && this.dni.length === this.dniMaxLength) {
        this.dni = '';
      }
    }
  }
}

window.customElements.define('dile-dni-generator-input', DileDniGeneratorInput);
