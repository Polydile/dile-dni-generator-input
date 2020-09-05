import { html, fixture, expect } from '@open-wc/testing';
import '../dile-dni-generator-input.js';
import sinon from '../node_modules/sinon/pkg/sinon-esm.js';

describe('DileDniGeneratorInput', () => {
  it('should be calculate their dni related letter on dni input', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    const dniInput = el.shadowRoot.getElementById('dniGenerator');
    dniInput.value = '71100766';
    const inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
    });
    dniInput.dispatchEvent(inputEvent);
    expect(el.value).to.equal('71100766 - S');
  });

  it('should not calculate their dni related letter when the dni input length is less than 8 digits', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    const dniInput = el.shadowRoot.getElementById('dniGenerator');
    dniInput.value = '711007';
    const inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
    });
    dniInput.dispatchEvent(inputEvent);
    expect(el.value).to.equal('711007');
  });

  it('should delete the user input on backspace keydow', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    el.value = '71100766 - S';
    const callback = sinon.spy();
    el.addEventListener('backspace-pressed', callback, { once: true });
    const dniInput = el.shadowRoot.getElementById('dniGenerator');
    const keyDownEvent = new Event('keydown', {
      bubbles: true,
      cancelable: true,
    });
    keyDownEvent.keyCode = 8;
    dniInput.dispatchEvent(keyDownEvent);
    expect(el.value).to.equal('');
    expect(callback).called;
  });

  it('should not delete the user input on backspace keydow if the user has not yet finished his entry', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    el.value = '711';
    const dniInput = el.shadowRoot.getElementById('dniGenerator');
    const keyDownEvent = new Event('keydown', {
      bubbles: true,
      cancelable: true,
    });
    keyDownEvent.keyCode = 8;
    dniInput.dispatchEvent(keyDownEvent);
    expect(el.value).to.equal('711');
  });

  it('should not delete the user input when other key different to backspace is down', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    el.value = '711';
    const dniInput = el.shadowRoot.getElementById('dniGenerator');
    const keyDownEvent = new Event('keydown', {
      bubbles: true,
      cancelable: true,
    });
    keyDownEvent.which = 9;
    dniInput.dispatchEvent(keyDownEvent);
    expect(el.value).to.equal('711');
  });

  it('should receive the label attribute', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input
        label="DNI letter generator input"
      ></dile-dni-generator-input>
    `);
    expect(el.label).to.equal('DNI letter generator input');
  });

  it('should be initialize with defalut label value', async () => {
    const el = await fixture(html`
      <dile-dni-generator-input></dile-dni-generator-input>
    `);
    expect(el.label).to.equal('');
  });
});
