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
    buttonReturnFunction: () => clickButton('num0'),
    buttonInverseReturnFunction: () => clickButton('num0'),
  },
  1: {
    buttonId: 'button-1',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '1',
    buttonInverseTextContent: '1',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num1'),
    buttonInverseReturnFunction: () => clickButton('num1'),
  },
  2: {
    buttonId: 'button-2',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '2',
    buttonInverseTextContent: '2',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num2'),
    buttonInverseReturnFunction: () => clickButton('num2'),
  },
  3: {
    buttonId: 'button-3',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '3',
    buttonInverseTextContent: '3',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num3'),
    buttonInverseReturnFunction: () => clickButton('num3'),
  },
  4: {
    buttonId: 'button-4',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '4',
    buttonInverseTextContent: '4',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num4'),
    buttonInverseReturnFunction: () => clickButton('num4'),
  },
  5: {
    buttonId: 'button-5',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '5',
    buttonInverseTextContent: '5',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num5'),
    buttonInverseReturnFunction: () => clickButton('num5'),
  },
  6: {
    buttonId: 'button-6',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '6',
    buttonInverseTextContent: '6',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num6'),
    buttonInverseReturnFunction: () => clickButton('num6'),
  },
  7: {
    buttonId: 'button-7',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '7',
    buttonInverseTextContent: '7',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num7'),
    buttonInverseReturnFunction: () => clickButton('num7'),
  },
  8: {
    buttonId: 'button-8',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '8',
    buttonInverseTextContent: '8',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num8'),
    buttonInverseReturnFunction: () => clickButton('num8'),
  },
  9: {
    buttonId: 'button-9',
    buttonClasses: ['value', 'constant', 'integer'],
    buttonTextContent: '9',
    buttonInverseTextContent: '9',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('num9'),
    buttonInverseReturnFunction: () => clickButton('num9'),
  },
  // Decimal Point
  10: {
    buttonId: 'button-point',
    buttonClasses: ['value', 'constant', 'integer'], // Effective constant and integer, even if not mathematically accurate.
    buttonTextContent: '.',
    buttonInverseTextContent: '.',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('point'),
    buttonInverseReturnFunction: () => clickButton('point'),
  },
  // Basic Operators
  11: {
    buttonId: 'button-plus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '+',
    buttonInverseTextContent: '+',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorPlus'),
    buttonInverseReturnFunction: () => clickButton('operatorPlus'),
  },
  12: {
    buttonId: 'button-minus',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '-',
    buttonInverseTextContent: '-',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorMinus'),
    buttonInverseReturnFunction: () => clickButton('operatorMinus'),
  },
  13: {
    buttonId: 'button-times',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '×',
    buttonInverseTextContent: '×',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorTimes'),
    buttonInverseReturnFunction: () => clickButton('operatorTimes'),
  },
  14: {
    buttonId: 'button-divide',
    buttonClasses: ['value', 'operator', 'basic-operator'],
    buttonTextContent: '÷',
    buttonInverseTextContent: '÷',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorDivide'),
    buttonInverseReturnFunction: () => clickButton('operatorDivide'),
  },
  // Brackets
  15: {
    buttonId: 'button-leftbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '(',
    buttonInverseTextContent: '(',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('bracketLeft'),
    buttonInverseReturnFunction: () => clickButton('bracketLeft'),
  },
  16: {
    buttonId: 'button-rightbracket',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: ')',
    buttonInverseTextContent: ')',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('bracketRight'),
    buttonInverseReturnFunction: () => clickButton('bracketRight'),
  },
  // Other Operators
  //   Percent of
  17: {
    buttonId: 'button-percentof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '%',
    buttonInverseTextContent: '%',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorPercentOf'),
    buttonInverseReturnFunction: () => clickButton('operatorPercentOf'),
  },
  //   Trigonometry
  18: {
    buttonId: 'button-sin',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'sin',
    buttonInverseTextContent: 'sin⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorSin'),
    buttonInverseReturnFunction: () => clickButton('operatorSinInverse'),
  },
  19: {
    buttonId: 'button-cos',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'cos',
    buttonInverseTextContent: 'cos⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorCos'),
    buttonInverseReturnFunction: () => clickButton('operatorCosInverse'),
  },
  20: {
    buttonId: 'button-tan',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'tan',
    buttonInverseTextContent: 'tan⁻¹',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorTan'),
    buttonInverseReturnFunction: () => clickButton('operatorTanInverse'),
  },
  //  Logarithms
  21: {
    buttonId: 'button-log',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'log',
    buttonInverseTextContent: '×10ᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorLog'),
    buttonInverseReturnFunction: () => clickButton('operatorTimesTenToThe'),
  },
  22: {
    buttonId: 'button-ln',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: 'ln',
    buttonInverseTextContent: 'eᵡ',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorLogNatural'),
    buttonInverseReturnFunction: () => clickButton('operatorTimesEToThe'),
  },
  23: {
    buttonId: 'button-exp',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '×10ᵡ',
    buttonInverseTextContent: 'log',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorTimesTenToThe'),
    buttonInverseReturnFunction: () => clickButton('operatorLog'),
  },
  //  Exponents
  24: {
    buttonId: 'button-tothepowerof',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥ʸ',
    buttonInverseTextContent: 'ʸ√𝑥',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorToThe'),
    buttonInverseReturnFunction: () => clickButton('operatorThRootOf'),
  },
  25: {
    buttonId: 'button-sqrt',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '√',
    buttonInverseTextContent: '𝑥²',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorSqrt'),
    buttonInverseReturnFunction: () => clickButton('operatorSquared'),
  },
  //   Factorial
  26: {
    buttonId: 'button-factorial',
    buttonClasses: ['value', 'operator'],
    buttonTextContent: '𝑥!',
    buttonInverseTextContent: '𝑥!',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('operatorFactorial'),
    buttonInverseReturnFunction: () => clickButton('operatorFactorial'),
  },
  //   Constants
  27: {
    buttonId: 'button-e',
    buttonClasses: ['value', 'constant'],
    buttonTextContent: 'e',
    buttonInverseTextContent: 'e',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('numE'),
    buttonInverseReturnFunction: () => clickButton('numE'),
  },
  28: {
    buttonId: 'button-pi',
    buttonClasses: ['value', 'constant'],
    buttonTextContent: 'π',
    buttonInverseTextContent: 'π',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('numPi'),
    buttonInverseReturnFunction: () => clickButton('numPi'),
  },
  //   Ans
  29: {
    buttonId: 'button-ans',
    buttonClasses: ['value', 'constant', 'ans'], // This is kind of a constant as it changes value but always holds a set numerical value. For this purpose it is an effective constant.
    buttonTextContent: 'Ans',
    buttonInverseTextContent: 'Ans',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('valueAns'),
    buttonInverseReturnFunction: () => clickButton('valueAns'),
  },
  // Toggle Buttons
  30: {
    buttonId: 'button-deg',
    buttonClasses: ['setting'],
    buttonTextContent: 'deg',
    buttonInverseTextContent: 'deg',
    buttonToggledOn: true,
    buttonReturnFunction: () => clickButton('settingDeg'),
    buttonInverseReturnFunction: () => clickButton('settingDeg'),
  },
  31: {
    buttonId: 'button-rad',
    buttonClasses: ['setting'],
    buttonTextContent: 'rad',
    buttonInverseTextContent: 'rad',
    buttonToggledOn: false,
    buttonReturnFunction: () => clickButton('settingRad'),
    buttonInverseReturnFunction: () => clickButton('settingRad'),
  },
  32: {
    buttonId: 'button-inverse',
    buttonClasses: ['setting'],
    buttonTextContent: 'inv',
    buttonInverseTextContent: 'inv',
    buttonToggledOn: false,
    buttonReturnFunction: () => clickButton('settingInv'),
    buttonInverseReturnFunction: () => clickButton('settingNotInv'),
  },
  // Calculator Functions
  33: {
    buttonId: 'button-clear', // Add functionality for clear and all clear - double click for AC
    buttonClasses: ['value', 'clear'],
    buttonTextContent: 'C/AC',
    buttonInverseTextContent: 'C/AC',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('functionClear'),
    buttonInverseReturnFunction: () => clickButton('functionClear'),
    buttonDoubleClickReturnFunction: () => clickButton('functionClearAll'),
  },
  34: {
    buttonId: 'button-equals',
    buttonClasses: ['value', 'operator', 'equals'],
    buttonTextContent: '=',
    buttonInverseTextContent: '=',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('functionEvaluate'),
    buttonInverseReturnFunction: () => clickButton('functionEvaluate'),
  },
  // NON BUTTON PROPERTIES -- // THESE SETTINGS SHOULD BE MOVED TO A DIFFERENT SETTINGS MODULE.
  isInverse: false,
  isRadians: false,
}

// Making object dynamic, binding functinos, etc:
// PSEDUDOCODE //
// We need two options for buttonTextContent, for inverse and not inverse, and two options for buttonReturnFunction.
// Because we're generating these buttons based on a buttonOrder array, adding more properties to the buttonList object shouldn't change anything.
// (According to my current knowledge, ) buttonList is generated in the above state on import and then exists within the generate-buttons module. Once in that module, it can be manipulated.
// Add a property for isInverse, then
// Use ternaries for buttonTextContent (removing buttonInverseTextContent), and buttonReturn function.
// Update Pseudocode: These ternaries are invalid when the object is first being generated in the generate-buttons module. This means I can't use ternaries within the object, I shoulud instead use them within the generateButtons function, keeping the seperate properties for buttonTextContent and buttonInverseTextContent. Same with the return functions.
