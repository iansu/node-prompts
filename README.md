# Node Prompts

A POC of a Node.js implementation of the Web APIs for alert, confirm and prompt

## Usage

### Alert

```js
await alert('Please confirm');
```

### Confirm

```js
const result = await confirm('Are you sure?');

if (result) {
  // do something
}
```

### Prompt

```js
// prompt with no default value
const result = await prompt('What is your name?');
console.log(result);

// prompt with a default value
const resultWithDefault = await prompt('What is your age?', 18);
console.log(resultWithDefault);
```
