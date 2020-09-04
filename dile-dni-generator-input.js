import { html, css, LitElement } from 'lit-element';
import { DileInput } from '@dile/dile-input';

export class DileDniGeneratorInput extends DileInput {
 
  constructor() {
    super();
    this.lengthConstraint = 8;
    this.dniMaxLength = 12;
    this.type = 'number';
    this.letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
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
          .value="${this.value}"
        />
      </div>
    `;
  }

  _dniChanged(e) {
    this.value = e.target.value;
    if (this.value && this.value.length === this.lengthConstraint) {
      this.type = 'text';
      this.value += ` - ${this._calculateLetter()}`;
    }
  }

  _calculateLetter() {
    return this.letters.charAt(this.dni % 23);
  }

  _lookForBackSpace(e) {
    const keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 8) {
      this.dispatchEvent(new CustomEvent('backspace-pressed'));
      this.type = 'number';
      if (this.value && this.value.length === this.dniMaxLength) {
        this.value = '';
      }
    }
  }
}

window.customElements.define('dile-dni-generator-input', DileDniGeneratorInput);
