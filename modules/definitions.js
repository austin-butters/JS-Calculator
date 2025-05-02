// definitions.js

// -- HARDCODED CONSTANT DEFINITIONS -- //

// A LIST OF ALL BUTTONS AND THEIR MAIN PROPERTIES // NOTE -- Need to add a seperate buttonEnabled object so that buttons don't get pushed when syntactically invalid. (e.g. too many right brackets, starting with a factorial or divide, but a minus would be fine. These will change over time depending on the last input.)
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
    buttonInverseReturnFunction: () => clickButton('operatorTimesEToThe'), // THIS IS WRONG! IT SHOULD BE eToThe, WHICH IS THE ACTUAL INVERSE OF A NATURAL LOG. CHANGE THIS NAME LATER (AS IT'S CURRENTLY HARDCODED), BUT FOR NOW IT WILL FUNCTIONALLY BE E TO THE.
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
    buttonTextContent: 'C',
    buttonInverseTextContent: 'AC',
    buttonToggledOn: undefined,
    buttonReturnFunction: () => clickButton('functionClear'),
    buttonInverseReturnFunction: () => clickButton('functionClearAll'),
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
}

// BUTTON ORDER (THE LAYOUT OF ALL BUTTONS) //
export const buttonOrder = [
  31, 30, 26, 15, 16, 17, 33, 32, 18, 22, 7, 8, 9, 14, 28, 19, 21, 4, 5, 6, 13,
  27, 20, 25, 1, 2, 3, 12, 29, 23, 24, 0, 10, 34, 11,
]

// A LIST OF ALL SETTINGS (BY THE BUTTON VALUES) //
export const allSettingOptions = [
  'settingDeg',
  'settingRad',
  'settingInv',
  'settingNotInv',
]

// A LIST OF DISPLAY VALUES FOR DIFFERENT INPUTS //
export const inputDisplayValues = {
  num0: '0',
  num1: '1',
  num2: '2',
  num3: '3',
  num4: '4',
  num5: '5',
  num6: '6',
  num7: '7',
  num8: '8',
  num9: '9',
  point: '.',
  operatorPlus: ' + ',
  operatorMinus: ' - ',
  operatorTimes: ' × ',
  operatorDivide: ' ÷ ',
  bracketLeft: '(',
  bracketRight: ')',
  operatorPercentOf: '%',
  operatorSin: ' sin',
  operatorSinInverse: ' sin⁻¹',
  operatorCos: ' cos',
  operatorCosInverse: ' cos⁻¹',
  operatorTan: ' tan',
  operatorTanInverse: ' tan⁻¹',
  operatorLog: ' log',
  operatorTimesTenToThe: '×10^',
  operatorLogNatural: ' ln',
  operatorTimesEToThe: 'e^', // CHANGED TO eToThe, BUT NAME WILL BE CHANGED LATER.
  operatorToThe: '^',
  operatorThRootOf: '√',
  operatorSqrt: '√',
  operatorSquared: '^2 ',
  operatorFactorial: '!',
  numE: 'e',
  numPi: 'π',
  valueAns: 'Ans',
}

// A LIST OF OPERATORS THAT NEED TO BE FOLLOWED BY A LEFT BRACKET //
export const bracketOpeners = [
  'operatorSin',
  'operatorSinInverse',
  'operatorCos',
  'operatorCosInverse',
  'operatorTan',
  'operatorTanInverse',
  'operatorLog',
  'operatorLogNatural',
  'operatorThRootOf',
  'operatorSqrt',
]

// A LIST OF ALL INFIX OPERATORS //
export const allInfixOperators = [
  // True Basic Operators
  'operatorPlus',
  'operatorMinus',
  'operatorTimes',
  'operatorDivide',
  // Effective Basic Operators
  'operatorToThe',
  'operatorTimesTenToThe',
  'operatorTimesEToThe',
  'operatorThRootOf',
  // NOTE: It's possible that operatorThRootOf shouldn't be included here but for now it doesn't seem like it's needed as it puts brackets around itself. This may need to be changed in future.
]

// A LIST OF VALUES TO DISPLAY A MULTIPLICATION SYMBOL AFTER, ONLY WHEN FOLLOWED BY A DIGIT CONSTANT (OR ANS).
export const displaytTimesAfterWhenBeforeDigit = [
  // Note: This is only particularly useful for the displayed expression, not evaluation.
  'numE',
  'numPi',
  'operatorPercentOf',
  'operatorFactorial',
  'valueAns',
]

// A LIST OF VALUES TO DISPLAY A MULTIPLICATION SYMBOL BEFORE IF FOLLOWING A VALUE FROM displayTimesAfterWhenBeforeDigit:
export const displayTimesBeforeIfNeeded = [
  'num0',
  'num1',
  'num2',
  'num3',
  'num4',
  'num5',
  'num6',
  'num7',
  'num8',
  'num9',
  'point', // This is a constant for this purpose
  'valueAns',
]

// A LIST OF VALID EXPRESSION ENDERS (WHICH ACT AS A STARTING POINT FOR A NEW EXPRESSION THAT OPERATORS CAN BE APPLIED TO)
export const expressionEnders = [
  // Numerical Constants
  'num0',
  'num2',
  'num3',
  'num4',
  'num5',
  'num6',
  'num7',
  'num8',
  'num9',
  'point', // Effective constant, Interpret a number ending in a decimal point as that number with no fractional part.
  'numE',
  'numPi',
  'valueAns',
  // Separators
  'bracketRight',
  // Postfix operators
  'operatorPercentOf',
  'operatorFactorial',
]
