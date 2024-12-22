# chained-compare

`chained-compare` is a lightweight utility for evaluating chained comparison expressions in JavaScript and TypeScript. It introduces a simple and intuitive way to write multi-condition comparisons in a readable, declarative style using tagged template literals.

With `chained-compare`, you can write expressions like `` `${x} < 10 < ${y}` `` and have them evaluated accurately, mimicking the behavior of mathematical comparison chains.

---

## Features

- **Chained Comparisons:** Supports operators like `<`, `<=`, `>`, and `>=`.
- **Safe Evaluation:** Parses and evaluates expressions without relying on `eval`.
- **Lightweight:** No dependencies and minimal overhead.
- **TypeScript Support:** Fully typed for enhanced development experience.

---

## Installation

Install the package using npm or yarn:

```bash
npm install chained-compare
```
## Usage

Import the compare function and use it in your code with tagged template literals:

```javascript
const { compare } = require('chained-compare');

const x = 5;
const y = 20;

if (compare`${x} < 10 < ${y}`) {
    console.log("The condition holds true!");
} else {
    console.log("The condition does not hold.");
}
```

Why Use chained-compare?
- Improved Readability: Write clean and natural chained comparison expressions.
- Lightweight: Zero dependencies and minimal performance overhead.
- TypeScript Support: Fully typed for robust development.

chained-compare is perfect for developers who value clear, maintainable code while simplifying complex comparison logic.