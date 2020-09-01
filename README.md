# \<dile-dni-generator-input>

The user introduces their dni numbers and their related letter is automatically calculated.

Go to [DEMOS page](https://dile-dni-generator-input.polydile.com)!

## Installation
```bash
npm i dile-dni-generator-input
```

## Usage
```html
<script type="module">
  import 'dile-dni-generator-input/dile-dni-generator-input.js';
</script>

<dile-dni-generator-input></dile-dni-generator-input>
```

## Properties

- **dni**: Set initial value to the input. This property syncs to the input field value property.
- **label**: Label to the element.
- **placeholder**: Set a placeholder to the input element.
- **disabled**: Disable the input field.


## Styles

You can customize it using CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--dile-dni-generator-input-width | Input element width | 100%
--dile-dni-generator-input-border-width | Input element border width | 1px
--dile-dni-generator-input-border-color | Input element border color | #888
--dile-dni-generator-input-border-radius | Input element border radius | 16px
--dile-dni-generator-input-focus-border-color | Input element border on focus | #6af
--dile-dni-generator-input-disabled-border-color | Input element border when disabled | #eee
--dile-dni-generator-input-font-size | Input element font size | 1em
--dile-dni-generator-input-line-height | Input element line height | 1.5em
--dile-dni-generator-input-label-font-family | Font family for the label | elvetica, sans-serif
--dile-dni-generator-input-label-font-size | Font size for the label | 1em
--dile-dni-generator-input-label-color | Color for the label text | #59e
--dile-dni-generator-input-label-font-weight | Label text font weight | normal
--dile-dni-generator-input-label-margin-bottom | Label marging bottom | 4px
--dile-dni-generator-input-background-color | Color for the background input element | #fff
--dile-dni-generator-input-padding | Padding for the input text | 8px

## Events

| Name | Description | Data |
| -----| ----------- | ---- |
| backspace-pressed | backspace key pressed| Object |


## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```
## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
