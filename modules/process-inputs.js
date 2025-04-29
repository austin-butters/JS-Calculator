// PSEUDOCODE //
// Declare and export a processInputs() function.
// The processInputs() function takes an inputListAll parameter, which is the full list of inputs from the click-button module.
// It then follows these steps
// Separate values and settings: (It's own function)
//   Declares an array for inputListValues
//   Declares an array for inputListSettings, starting with degrees and not inverse settings.
//   Scans the full inputListAll array and pushes each item to inputListValues or inputListSettings accordiingly
// Process current settings: (It's own function, called ONLY if the most recent input was a setting option)
//   Declare and array for CurrentSettings
//   Scan the full inputListSettings array, starting from the end and moving backwards. (scanning from the end ensures that it finds the most recent settings.)
//   Keep scanning until all settings are found (if user has not clicked settings the default ones will already be included at the start of the array.)
//   // applySettings() - This will be it's own module.
// Process values: (It's own function, called ONLY if the most recent input was not a setting option. (an if/else))
//   Scan inputListValues array backwards and stop once an "All clear" is reached. Save the position of the latest all clear (this is where we'll start scanning for processed values)
//   Declare a inputListThisEntry array for values to process in the current entry.
//   From the saved position of the last "All clear", scan forward in the inputListValues array and push all values to the inputListThisEntryAll array.
//   processThisEntry() (It's own function)
// Process this entry (It's own function)
//   processCompleteExpression(0)
//     Declare an array completeExpression
//     Declare inputs to add to the completeExpression array (The value button options, plus an empty space, etc.). These will be in a completeInputsFromUserInputs object with nested arrays.
//     Scan the InputListThisEntryAll array and add relevant values from the completeInputsFromUserInputs object's arrays.
//     Return completeExpression array.
//   Declare processedInputs object for the displayed input's innerHTML (which will include grayed out closing brackets) and an input for evaluation.
//   This processThisEntry function takes the completeExpression array, and reassigns it until it returns an object with two properties: valid input for evaluation, and an input to display.
//   scanforClears() and delete accordingly. This function will return a new array to reassign completeExpression to.
//   generateInputForDisplay() - returns a value for the processedInputs object
//      addBracketsForDisplay() accordingly (including brackets after and around certain operators, and closing brackets as needed.)
//   generateInputForEvaluation() - returns a value for the processedInputs object
//     This function declares an array of values/operators/brackets, etc, in a valid order that can later be evaluated
//     Array must start with 0+ so that it's always valid
//     addBracketsForEvaluation() accordingly. (e.g. after and around certain operators, closing brackets as needed, and around multiplied values like 5e, 2pi, etc.)
// evaluateExpression() (It's own function, called ONLY if last input was an =. Is called with the input for evaluation as a parameter.) (It's own module.)

export function processInputs(inputListAll) {
  console.log('process-inputs: the processInputs() function has been called.') // TEST LOG
}
