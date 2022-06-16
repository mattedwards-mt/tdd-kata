# Roman Numeral Converter

## A tool to convert integers to Roman Numeral strings.

### Using locally
Navigate to the root of the project in your Terminal
and type the following...


```javascript
node
const rnc = require("./src/roman-numeral-converter");
const converter = new rnc();

// EXAMPLE USAGE
// -------------
converter.toRoman(1666)  // returns "MDCLXVI"
```
