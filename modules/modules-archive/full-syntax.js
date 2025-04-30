// full-syntax.js
//NOTE: [0, +, 1, [], 4, ] opening and closing nested arrays with brackets is likely a more efficient method that what I'm currently coding. Come back to this if I have time.

// When processing the user's inputs, often extra syntax needs to be included.
// For example, every sqrt needs a left bracket inserted after it,
// and every pair of adjacent coefficients and constants (e.g 5e) needs a times symbol inserted (but not nessicarily displayed.)
// Finally, in certain cases an empty placeholder needs to be inserted, which will be a string 'empty'
// This means that we need a few objects to define things:

//
// AN OBJECT TO REPLACE INPUTS WITH:
// To avoid certain problems we need a separator to preserve information about what the user actually input.
// The array needs to start with 0+ so that no errors arise with negative numbers. This  will be called startSectionInsertion and is declared as a variable that can be accessed by the inputReplacementValues object.
// startSectionInsertion will also be inserted after every bracket, as it's a new section that could cause errors when evaluated seperately.
// Constants will remain unchanged
// Basic operators will remain unchanged, as they take two parameters on either side and form the most simple separation of expressions.

const startSectionInsertionValue = ['num0', 'operatorPlus']
const bracketLeftReplacementValues = [
  'bracketLeft',
  startSectionInsertionValue,
].flat()

export const inputReplacementValues = {
  inputSeparatorUndefined: 'inputSeparatorUndefined',
  inputSeparatorDefault: 'inputSeparatorDefault', // This is very important to avoid creating syntax errors and will be inserted between each of the following replacement values. For example we need yrootx to be processed as y * root(x), so we can replace operatorThRootOf with *(_root x), which could cause errors if someone previously typed a plus. We'll use separators for this, and later remove all multiplication operators directly following another operator. (This is, as far as I can tell right now, the only error that this will cause. BUT! we have to make sure we use the separators so that we don't remove intentionally typed negative numbers. This shouldn't be to hard as constants don't have a times inserted before them, and with negative si)
  inputSeparatorTimes: 'inputSeparatorTimes', // Used instead of the standard separator when two values are next to eachother with no basic operator, e.g. 5e, 5log4. The only exception is for factorials which come directly after with a normal separator.
  startSectionInsertion: startSectionInsertionValue,
  num0: ['num0'],
  num1: ['num1'],
  num2: ['num2'],
  num3: ['num3'],
  num4: ['num4'],
  num5: ['num5'],
  num6: ['num6'],
  num7: ['num7'],
  num8: ['num8'],
  num9: ['num9'],
  point: ['point'],
  operatorPlus: ['operatorPlus'],
  operatorMinus: ['operatorMinus'],
  operatorTimes: ['operatorTimes'],
  operatorDivide: ['operatorDivide'],
  bracketLeft: [bracketLeftReplacementValues].flat(),
  bracketRight: ['bracketRight'],
  operatorPercentOf: ['operatorPercentOf'], // In this case, we could replace 'operatorPercentOf' with a series of more basic operations that find x% of y, where x imediately preceeds it and y immediately follows. But we don't want to display all of this on the screen, so we'll have to write a unique function for percent of that is treated as multiplication when it comes to BEDMAS, e.g. replace it with BEDM%AS.
  operatorSin: ['operatorSin', bracketLeftReplacementValues].flat(), // This is the simplest case of replacing, where applying a sine opens a new bracket. When clear is pressed we'll have to check anything before a left bracket to decide if we should delete it aswell. However, all trig functions must begin with a multiplication (which will later be removed if nessicary as commented above.) CHANGE: We DONT need multiplication value inserted before these falues. There's a FAR simpler way: If any two values are next to eachother without a basic operator, treat the separator as a multiplication when evaluating. THIS IS SOMETHING I NEED TO COME BACK TO.
  operatorSinInverse: [
    'operatorSinInverse',
    bracketLeftReplacementValues,
  ].flat(),
  operatorCos: ['operatorCos', bracketLeftReplacementValues].flat(),
  operatorCosInverse: [
    'operatorCosInverse',
    bracketLeftReplacementValues,
  ].flat(),
  operatorTan: ['operatorTan', bracketLeftReplacementValues].flat(),
  operatorTanInverse: [
    'operatorTanInverse',
    bracketLeftReplacementValues,
  ].flat(),
  operatorLog: ['operatorLog', bracketLeftReplacementValues].flat(),
  operatorTimesTenToThe: ['operatorTimes', 'num1', 'num0', 'operatorToThe'], // A more complicated one, and in this case it's also what we want to display to the user.
  operatorLogNatural: [
    'operatorLogNatural',
    bracketLeftReplacementValues,
  ].flat(),
  operatorTimesEToThe: ['operatorTimes', 'numE', 'operatorToThe'], // This is a more complicated one, because what we want to display is 5e^4, while functionaly we need it to be 5 * e ^ 4. In this case, we'll retructure it as 5*e^4, but when generating displayed input, we'll have to remove any multiplication symbols between numbers and e or pi.
  operatorToThe: ['operatorToThe'],
  operatorThRootOf: [
    bracketLeftReplacementValues,
    'empty',
    'operatorThRootOf',
    bracketLeftReplacementValues,
  ].flat(), // This is the weirdest case we have. The function we'll eventually write for 'xth root of y' is what the operatorThRootOf will perform. We'll have to display (_rooty) which means there's an empty space, and the expression will evaluate to undefined until we have a function to move positions where we are typing. There's a left bracket, which will be there even if the user manually opens it with the left bracket button (it which case they'd get double (( brackets. For now, this is the best I can do but eventually I might write a function to determine whether or not to add that left bracket based on if a left bracket is opened already. This could be done by nesting everything in an object for a leftBracketIsPresent or not state.
  operatorSqrt: ['operatorSqrt', bracketLeftReplacementValues].flat(), // This must remain seperate from operatorThRootOf as display is reprocessed with each input, someone mid-typing the 21st root of something would end up stuck with a square root, which is displayed as the root symbol without the 2.
  operatorSquared: ['operatorSquared'],
  operatorFactorial: ['operatorFactorial'],
  numE: ['numE'],
  numPi: ['numPi'],
  valueAns: ['valueAns'],
  functionClear: ['functionClear'], // Since we have input separators, we can use the clear function to clear based on actual user input, without checking if we need to delete multiple values.
  functionClearAll: ['functionClearAll'],
  functionEvaluate: ['functionEvaluate'],
}

//
// A LIST OF ALL CONSTANTS:
export const allConstants = [
  inputReplacementValues.num0,
  inputReplacementValues.num1,
  inputReplacementValues.num2,
  inputReplacementValues.num3,
  inputReplacementValues.num4,
  inputReplacementValues.num5,
  inputReplacementValues.num6,
  inputReplacementValues.num7,
  inputReplacementValues.num8,
  inputReplacementValues.num9,
  inputReplacementValues.numE,
  inputReplacementValues.numPi,
  inputReplacementValues.valueAns,
  inputReplacementValues.point, // This is a constant for this purpose.
]

//
// A LIST OF ALL BASIC OPERATORS:
// (Not inclusing all effective ones like percentOf, which is just x*0.01*y. Note that percent of should still be displayed with a * after it so should be read as a one parameter operator like factorial, where it comes after the parameter.)
// By 'Basic Operators', I mean all operators that take two parameters on either side.
export const allBasicOperators = [
  // True Basic Operators
  inputReplacementValues.operatorPlus,
  inputReplacementValues.operatorMinus,
  inputReplacementValues.operatorTimes,
  inputReplacementValues.operatorDivide,
  // Effective Basic Operators
  inputReplacementValues.operatorToThe,
  inputReplacementValues.operatorTimesTenToThe,
  inputReplacementValues.operatorTimesEToThe,
  // NOTE: It's possible that operatorThRootOf needs to be included here but for now it doesn't seem like it's needed as it puts brackets around itself. This may need to be changed in future.
]

//
// A LIST OF OPERATORS WITH ONE PARAMETER THAT FOLLOWS IT:
export const allOperatorsWithFollowingParameter = [
  // Trig
  inputReplacementValues.operatorSin,
  inputReplacementValues.operatorSinInverse,
  inputReplacementValues.operatorCos,
  inputReplacementValues.operatorCosInverse,
  inputReplacementValues.operatorTan,
  inputReplacementValues.operatorTanInverse,
  // Logarithms
]

//
// A LIST OF OPERATORS WITH ONE PARAMETER THAT PRECEDES IT:
export const allOperatorsWithPrecedingParameter = [
  inputReplacementValues.operatorPercentOf,
  inputReplacementValues.operatorSquared,
  inputReplacementValues.operatorFactorial,
]

//
// A LIST OF 'function' BUTTONS:
export const allButtonFunctions = [
  inputReplacementValues.functionClear,
  inputReplacementValues.functionClearAll,
  inputReplacementValues.functionEvaluate,
]

// A LIST OF ALL SEPARATOR VALUES:
export const allSeparatorValues = [
  inputReplacementValues.inputSeparatorUndefined,
  inputReplacementValues.inputSeparatorDefault,
  inputReplacementValues.inputSeparatorTimes,
]
