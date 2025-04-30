// Process this entry (It's own function)
//   This processThisEntry function takes the completeExpression array, and reassigns it until it returns an object with two properties: valid input for evaluation, and an input to display.
//   processCompleteExpression()
//     Takes an inputListThisEntryAll parameter, called with an argument of the same name.
//     Declare an array completeExpression
//     Declare inputs to add to the completeExpression array (The value button options, plus an empty space, etc.). These will be in a completeInputsFromUserInputs object with nested arrays. CHANGED to imported values from full-syntax.js
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
  allSeparatorValues,
} from './full-syntax.js'

export function processThisEntry(inputListThisEntryAll) {
  // TAKES AN inputListThisEntryAll PARAMETER, CALLED WITH THE inputListThisEntryAll ARRAY IN THE process-inputs MODULE.
  console.log(
    'The processThisEntry() function has been called with parameter ',
    inputListThisEntryAll
  ) // TEST LOG
  processCompleteExpression(inputListThisEntryAll)
  processClears()
  generateInputForDisplay()
}

function processCompleteExpression(inputListThisEntryAll) {
  let completeExpression = [inputReplacementValues.startSectionInsertion]
  for (let i = 0; i < inputListThisEntryAll.length; i++) {
    // Add undefined separator (will be separated later.)
    // Add relevant input
    completeExpression.push(inputReplacementValues.inputSeparatorUndefined)
    completeExpression.push(inputReplacementValues[inputListThisEntryAll[i]])
  }
  console.log(
    'Values and undefined separators added to completeExpression, which is now ',
    completeExpression
  ) // TEST LOG
  // Replace Separator values:
  // Default when either side of the separator is an effective basic operator, (i.e. the user has manually entered a chosen basic operation so we don't need a times inserted), and when inside a number (e.g. the 6 in 56.3)
  completeExpression = completeExpression.flat(Infinity)
  console.log(
    'completeExpression has been fully flattened, is now ',
    completeExpression
  ) // TEST LOG
  for (let i = 0; i < completeExpression.length; i++) {
    if (
      completeExpression[i] != inputReplacementValues.inputSeparatorUndefined
    ) {
      continue
    } else {
      // else, i is now the index position of an undefined separator.
      console.log(
        `Checking undefined separator at index ${i}, surrounding values:`,
        completeExpression[i - 1],
        completeExpression[i + 1]
      ) // TEST LOG
      if (
        // Inside a single number
        (allConstants.includes(completeExpression[i - 1]) &&
          allConstants.includes(completeExpression[i + 1])) ||
        // Either Side of separator is an effective basic operator
        allBasicOperators.includes(completeExpression[i - 1]) ||
        allBasicOperators.includes(completeExpression[i + 1])
      ) {
        // default
        console.log('Will use default separator.') // TEST LOG
      } else {
        // times
        console.log('Will use times separator.') // TEST LOG
      }
    }
  }
}
//   processCompleteExpression()
//     Takes an inputListThisEntryAll parameter, called with an argument of the same name.
//     Declare an array completeExpression
//     Declare inputs to add to the completeExpression array (The value button options, plus an empty space, etc.). These will be in a completeInputsFromUserInputs object with nested arrays. CHANGED to imported values from full-syntax.js
//     Scan the InputListThisEntryAll array and add relevant values from the completeInputsFromUserInputs object's arrays, preceded by undefined separators.
//     Flatten the full array completely so that it can be scanned easier, and all values in one level.
//     Scan array and replace undefined separators with correct ones.
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
