// Process this entry (It's own function)
//   This processThisEntry function takes the completeExpression array, and reassigns it until it returns an object with two properties: valid input for evaluation, and an input to display.
//   processCompleteExpression()
//     Declare an array completeExpression
//     Declare inputs to add to the completeExpression array (The value button options, plus an empty space, etc.). These will be in a completeInputsFromUserInputs object with nested arrays.
//     Scan the InputListThisEntryAll array and add relevant values from the completeInputsFromUserInputs object's arrays.
//     Return completeExpression array.
//   scanforClears() and delete accordingly. This function will return a new array to reassign completeExpression to. - IMPORTANT NOTE: sometimes clear needs to delete multiple things before it, like a sqrt and bracket, but NEVER another clear.
//   Declare processedInputs object for the displayed input's innerHTML (which will include grayed out closing brackets) and an input for evaluation.
//   generateInputForDisplay() - returns a value for the processedInputs object
//      addBracketsForDisplay() accordingly (including brackets after and around certain operators, and closing brackets as needed.)
//   generateInputForEvaluation() - returns a value for the processedInputs object
//     This function declares an array of values/operators/brackets, etc, in a valid order that can later be evaluated
//     Array must start with AC, 0, + so that it's always valid
//     addBracketsForEvaluation() accordingly. (e.g. after and around certain operators, closing brackets as needed, and around multiplied values like 5e, 2pi, etc.)
// // evaluateExpression() (It's own function, called ONLY if last input was an =. Is called with the input for evaluation as a parameter.) (It's own module.)
// NOTE: MAKE SURE THAT processThisEntry returns an object, as specified in the notes above.

// NOTE: WE HAVE TO ACCOUNT FOR DOUBLE NEGATIVES.

import {
  inputReplacementValues,
  allConstants,
  allBasicOperators,
  allOperatorsWithFollowingParameter,
  allOperatorsWithPrecedingParameter,
  allButtonFunctions,
} from './full-syntax-insertion.js'

export function processThisEntry(inputListThisEntryAll) {
  // TAKES AN inputListThisEntryAll PARAMETER, CALLED WITH THE inputListThisEntryAll ARRAY IN THE process-inputs MODULE.
  console.log(
    'The processThisEntry() function has been called with parameter ',
    inputListThisEntryAll
  ) // TEST LOG
  processCompleteExpression()
  processClears()
  generateInputForDisplay()
}

function processCompleteExpression() {
  const completeExpression = []
}
//   processCompleteExpression()
//     Declare an array completeExpression
//     Declare inputs to add to the completeExpression array (The value button options, plus an empty space, etc.). These will be in a completeInputsFromUserInputs object with nested arrays. CHANGED to imported values from full-syntax.js
//     Scan the InputListThisEntryAll array and add relevant values from the completeInputsFromUserInputs object's arrays.
//     Return completeExpression array.

//
//
//
//
//
//
//
//
function processClears(inputListThisEntryAll) {
  //   scanforClears() and delete accordingly. This function will return a new array to reassign completeExpression to. - IMPORTANT NOTE: sometimes clear needs to delete multiple things before it, like a sqrt and bracket, but NEVER another clear.
  // TAKES AN inputListThisEntryAll PARAMETER, CALLED WITH THE inputListThisEntryAll ARRAY.
  // PSEUDOCODE //
  // Scan through the whole inpurListThisEntryAll array
  // for each element in the array if not a functionClear, continue
  // Otherwise, check the value directly preceding it in the array
  //   If it's a number, basic operator,
}
