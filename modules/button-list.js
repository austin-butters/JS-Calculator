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

import { clickButton } from './click-button.js'

export const buttonList = {
  // Numbers
  0: {
    buttonId: 'button-0',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '0',
    buttonInverseTextContent: '0',
    buttonToggledOn: undefined,
    buttonReturnFunction: (placeholderArg) => clickButton('0'),
  },
  1: {
    buttonId: 'button-1',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '1',
    buttonInverseTextContent: '1',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  2: {
    buttonId: 'button-2',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '2',
    buttonInverseTextContent: '2',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  3: {
    buttonId: 'button-3',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '3',
    buttonInverseTextContent: '3',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  4: {
    buttonId: 'button-4',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '4',
    buttonInverseTextContent: '4',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  5: {
    buttonId: 'button-5',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '5',
    buttonInverseTextContent: '5',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  6: {
    buttonId: 'button-6',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '6',
    buttonInverseTextContent: '6',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  7: {
    buttonId: 'button-7',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '7',
    buttonInverseTextContent: '7',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  8: {
    buttonId: 'button-8',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '8',
    buttonInverseTextContent: '8',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  9: {
    buttonId: 'button-9',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '9',
    buttonInverseTextContent: '9',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // Decimal Point
  10: {
    buttonId: 'button-point',
    buttonClasses: ['value', 'constant', 'integer'], // Effective constant and integer, even if not mathematically accurate.
    buttonTextContent: '.',
    buttonInverseTextContent: '.',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // Basic Operators
  11: {
    buttonId: 'button-plus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '+',
    buttonInverseTextContent: '+',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  12: {
    buttonId: 'button-minus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '-',
    buttonInverseTextContent: '-',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  13: {
    buttonId: 'button-times',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '×',
    buttonInverseTextContent: '×',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  14: {
    buttonId: 'button-divide',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '÷',
    buttonInverseTextContent: '÷',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // Brackets
  15: {
    buttonId: 'button-leftbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '(',
    buttonInverseTextContent: '(',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  16: {
    buttonId: 'button-rightbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: ')',
    buttonInverseTextContent: ')',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // Other Operators
  //   Percent of
  17: {
    buttonId: 'button-percentof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '%',
    buttonInverseTextContent: '%',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //   Trigonometry
  18: {
    buttonId: 'button-sin',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'sin',
    buttonInverseTextContent: 'sin⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  19: {
    buttonId: 'button-cos',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'cos',
    buttonInverseTextContent: 'cos⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  20: {
    buttonId: 'button-tan',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'tan',
    buttonInverseTextContent: 'tan⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //  Logarithms
  21: {
    buttonId: 'button-log',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'log',
    buttonInverseTextContent: '×10ᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  22: {
    buttonId: 'button-ln',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'ln',
    buttonInverseTextContent: 'eᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  23: {
    buttonId: 'button-exp',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '×10ᵡ',
    buttonInverseTextContent: 'log',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //  Exponents
  24: {
    buttonId: 'button-tothepowerof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥ʸ',
    buttonInverseTextContent: 'ʸ√𝑥',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  25: {
    buttonId: 'button-sqrt',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '√',
    buttonInverseTextContent: '𝑥²',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //   Factorial
  26: {
    buttonId: 'button-factorial',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥!',
    buttonInverseTextContent: '𝑥!',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //   Constants
  27: {
    buttonId: 'button-e',
    buttonClasses: ['value', 'constant'],
    buttonTextContent: 'e',
    buttonInverseTextContent: 'e',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  28: {
    buttonId: 'button-pi',
    buttonClasses: ['value', 'constant'],
    buttonTextContent: 'π',
    buttonInverseTextContent: 'π',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  //   Ans
  29: {
    buttonId: 'button-ans',
    buttonClasses: ['value', 'ans'],
    buttonTextContent: 'Ans',
    buttonInverseTextContent: 'Ans',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // Toggle Buttons
  30: {
    buttonId: 'button-deg',
    buttonClasses: ['setting'],
    buttonTextContent: 'deg',
    buttonInverseTextContent: 'deg',
    buttonToggledOn: true,
    buttonReturnFunction: () => clickButton(),
  },
  31: {
    buttonId: 'button-rad',
    buttonClasses: ['setting'],
    buttonTextContent: 'rad',
    buttonInverseTextContent: 'rad',
    buttonToggledOn: false,
    buttonReturnFunction: () => clickButton(),
  },
  32: {
    buttonId: 'button-inverse',
    buttonClasses: ['setting'],
    buttonTextContent: 'inv',
    buttonInverseTextContent: 'inv',
    buttonToggledOn: false,
    buttonReturnFunction: () => clickButton(),
  },
  // Calculator Functions
  33: {
    buttonId: 'button-clear', // Add functionality for clear and all clear
    buttonClasses: ['value', 'clear'],
    buttonTextContent: 'AC',
    buttonInverseTextContent: 'AC',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  34: {
    buttonId: 'button-equals',
    buttonClasses: ['value', 'operator', 'equals'],
    buttonTextContent: '=',
    buttonInverseTextContent: '=',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton(),
  },
  // NON BUTTON PROPERTIES
  isInverse: false,
}

// Making object dynamic, binding functinos, etc:
// PSEDUDOCODE //
// We need two options for buttonTextContent, for inverse and not inverse, and two options for buttonReturnFunction.
// Because we're generating these buttons based on a buttonOrder array, adding more properties to the buttonList object shouldn't change anything.
// (According to my current knowledge, ) buttonList is generated in the above state on import and then exists within the generate-buttons module. Once in that module, it can be manipulated.
// Add a property for isInverse, then
// Use ternaries for buttonTextContent (removing buttonInverseTextContent), and buttonReturn function.
// Update Pseudocode: These ternaries are invalid when the object is first being generated in the generate-buttons module. This means I can't use ternaries within the object, I shoulud instead use them within the generateButtons function, keeping the seperate properties for buttonTextContent and buttonInverseTextContent. Same with the return functions.
