```js script
import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import { DileDniGeneratorInput } from '../dile-dni-generator-input.js';
import '../dile-dni-generator-input.js';

export default {
  title: 'DileDniGeneratorInput',
  component: 'dile-dni-generator-input',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# DileDniGeneratorInput

A component to generate letter on dni input

## Features

- The user introduces their dni numbers and their related letter is automatically calculated.

## How to use

### Installation

```bash
npm i dile-dni-generator-input
```

```js
import 'dile-dni-generator-input/dile-dni-generator-input.js';
```

```js preview-story
export const Simple = () => html`
  <dile-dni-generator-input
   placeholder="Please insert DNI numbers"
   ></dile-dni-generator-input>
`;
```

## Variations

###### Custom label

```js preview-story
export const CustomDNI = () => html`
  <style>
  .customized {
    --dile-input-border-radius: 16px;
    }
  </style>

    <dile-dni-generator-input
    class="customized"
    id="dniInput"
    placeholder="Please insert DNI numbers"
    label="DNI letter generator input"
    ></dile-dni-generator-input>
`
```
