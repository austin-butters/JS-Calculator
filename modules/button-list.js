// PSEUDOCODE //
// Declare a list of buttons to be in the calculator
// These buttons will have their own (nested) objects, which will include:
//   Button's identifier, a number.
//   Button types, as a series of classes: setting or value? have an isValue boolean. Value buttons will return values to type in the calculator (like '1', '5', 'ans', '('), while non-value buttons will change settings (like deg/rad, inv, etc)
//      buttonClasses (an array of classes to add):
//      value/setting, Operator, basicOperator (for +, -, /, *), equals (only for the equals button)
//   Button's id (e.g. 'button-1', 'ans', 'sin'), etc.
//   Button's return function
//   Button's true/false state as a boolean, if a non-value button (like deg/rad, inv)
//   A textContentValue to display to the user in both normal and inverse cases.

// An example of a button's object:
// anyButton: {
//   buttonId: 'button-1',
//   buttonClasses: ['value/setting', 'operator', 'basic-operator', 'is-not-equals'],
//   buttonTextContent: '',
//   buttonInverseTextContent: '',
//   buttonToggledOn: undefined,
//   buttonReturnFunction: () => placeholderFunction(),
// }

// The return values of the buttons will later be entered into an array of command history.
function placeholderFunction() {
  // THIS IS A PLACEHOLDER TO BE DELETED.
  console.log('Button was clicked, placeholder called.')
}

export const buttonList = {
  // Numbers
  0: {
    buttonId: 'button-0',
    buttonClasses: ['value'],
    buttonTextContent: '0',
    buttonInverseTextContent: '0',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  1: {
    buttonId: 'button-1',
    buttonClasses: ['value'],
    buttonTextContent: '1',
    ButtonInverseTextContent: '1',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  2: {
    buttonId: 'button-2',
    buttonClasses: ['value'],
    buttonTextContent: '2',
    ButtonInverseTextContent: '2',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  3: {
    buttonId: 'button-3',
    buttonClasses: ['value'],
    buttonTextContent: '3',
    ButtonInverseTextContent: '3',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  4: {
    buttonId: 'button-4',
    buttonClasses: ['value'],
    buttonTextContent: '4',
    ButtonInverseTextContent: '4',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  5: {
    buttonId: 'button-5',
    buttonClasses: ['value'],
    buttonTextContent: '5',
    ButtonInverseTextContent: '5',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  6: {
    buttonId: 'button-6',
    buttonClasses: ['value'],
    buttonTextContent: '6',
    ButtonInverseTextContent: '6',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  7: {
    buttonId: 'button-7',
    buttonClasses: ['value'],
    buttonTextContent: '7',
    ButtonInverseTextContent: '7',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  8: {
    buttonId: 'button-8',
    buttonClasses: ['value'],
    buttonTextContent: '8',
    ButtonInverseTextContent: '8',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  9: {
    buttonId: 'button-9',
    buttonClasses: ['value'],
    buttonTextContent: '9',
    ButtonInverseTextContent: '9',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Decimal Point
  10: {
    buttonId: 'button-point',
    buttonClasses: ['value'],
    buttonTextContent: '.',
    ButtonInverseTextContent: '.',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Basic Operators
  11: {
    buttonId: 'button-plus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '+',
    ButtonInverseTextContent: '+',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  12: {
    buttonId: 'button-minus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '-',
    ButtonInverseTextContent: '-',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  13: {
    buttonId: 'button-times',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '×',
    ButtonInverseTextContent: '×',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  14: {
    buttonId: 'button-divide',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '÷',
    ButtonInverseTextContent: '÷',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Brackets
  15: {
    buttonId: 'button-leftbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '(',
    ButtonInverseTextContent: '(',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  16: {
    buttonId: 'button-rightbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: ')',
    ButtonInverseTextContent: ')',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Other Operators
  //   Percent of
  17: {
    buttonId: 'button-percentof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '%',
    ButtonInverseTextContent: '%',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //   Trigonometry
  18: {
    buttonId: 'button-sin',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'sin',
    ButtonInverseTextContent: 'sin⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  19: {
    buttonId: 'button-cos',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'cos',
    ButtonInverseTextContent: 'cos⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  20: {
    buttonId: 'button-tan',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'tan',
    ButtonInverseTextContent: 'tan⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //  Logarithms
  21: {
    buttonId: 'button-log',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'log',
    ButtonInverseTextContent: '×10ᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  22: {
    buttonId: 'button-ln',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'ln',
    ButtonInverseTextContent: 'eᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  23: {
    buttonId: 'button-exp',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '×10ᵡ',
    ButtonInverseTextContent: 'log',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //  Exponents
  24: {
    buttonId: 'button-tothepowerof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥ʸ',
    ButtonInverseTextContent: 'ʸ√𝑥',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  25: {
    buttonId: 'button-sqrt',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '√',
    ButtonInverseTextContent: '𝑥²',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //   Factorial
  26: {
    buttonId: 'button-factorial',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥!',
    ButtonInverseTextContent: '𝑥!',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //   Constants
  27: {
    buttonId: 'button-e',
    buttonClasses: ['value'],
    buttonTextContent: 'e',
    ButtonInverseTextContent: 'e',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  28: {
    buttonId: 'button-pi',
    buttonClasses: ['value'],
    buttonTextContent: 'π',
    ButtonInverseTextContent: 'π',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  //   Ans
  29: {
    buttonId: 'button-ans',
    buttonClasses: ['value'],
    buttonTextContent: 'Ans',
    ButtonInverseTextContent: 'Ans',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Toggle Buttons
  30: {
    buttonId: 'button-deg',
    buttonClasses: ['setting'],
    buttonTextContent: 'deg',
    ButtonInverseTextContent: 'deg',
    buttonToggledOn: true,
    buttonReturnFunction: () => placeholderFunction(),
  },
  31: {
    buttonId: 'button-rad',
    buttonClasses: ['setting'],
    buttonTextContent: 'rad',
    ButtonInverseTextContent: 'rad',
    buttonToggledOn: false,
    buttonReturnFunction: () => placeholderFunction(),
  },
  32: {
    buttonId: 'button-inverse',
    buttonClasses: ['setting'],
    buttonTextContent: 'inv',
    ButtonInverseTextContent: 'inv',
    buttonToggledOn: false,
    buttonReturnFunction: () => placeholderFunction(),
  },
  // Calculator Functions
  33: {
    buttonId: 'button-clearall',
    buttonClasses: ['value'],
    buttonTextContent: 'AC',
    ButtonInverseTextContent: 'AC',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
  34: {
    buttonId: 'button-equals',
    buttonClasses: ['value', 'operator', 'equals'],
    buttonTextContent: '=',
    ButtonInverseTextContent: '=',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => placeholderFunction(),
  },
}
