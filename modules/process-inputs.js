// PSEUDOCODE //
// Declare and export a processInputs() function.
// The processInputs() function takes an inputListAll parameter, which is the full list of inputs from the click-button module.
// It then follows these steps
// Separate values and settings: (It's own function)
//   Declares an array for inputListValues
//   Declares an array for inputListSettings, starting with degrees and not inverse settings.
//   Scans the full inputListAll array and pushes each item to inputListValues or inputListSettings accordingly
//   Returns an object containing these arrays as properties.
// Process current settings: (It's own function, called ONLY if the most recent input was a setting option)
//   Declare and array for currentSettings
//   Scan the full inputListSettings array, starting from the end and moving backwards. (scanning from the end ensures that it finds the most recent settings.)
//   Keep scanning until all settings are found (if user has not clicked settings the default ones will already be included at the start of the array.)
//   // applySettings() - This will be it's own module.
// Process input values: (It's own function, called ONLY if the most recent input was not a setting option. (an if/else))
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
//   scanforClears() and delete accordingly. This function will return a new array to reassign completeExpression to. - IMPORTANT NOTE: sometimes clear needs to delete multiple things before it, like a sqrt and bracket, but NEVER another clear.
//   generateInputForDisplay() - returns a value for the processedInputs object
//      addBracketsForDisplay() accordingly (including brackets after and around certain operators, and closing brackets as needed.)
//   generateInputForEvaluation() - returns a value for the processedInputs object
//     This function declares an array of values/operators/brackets, etc, in a valid order that can later be evaluated
//     Array must start with 0+ so that it's always valid
//     addBracketsForEvaluation() accordingly. (e.g. after and around certain operators, closing brackets as needed, and around multiplied values like 5e, 2pi, etc.)
// // evaluateExpression() (It's own function, called ONLY if last input was an =. Is called with the input for evaluation as a parameter.) (It's own module.)

export function processInputs(inputListAll) {
  console.log('process-inputs: the processInputs() function has been called.') // TEST LOG
  // SEPARATE VALUES AND SETTINGS
  const valuesAndSettings = separateValuesAndSettings(inputListAll)
  // PROCESS CURRENT SETTINGS OR VALUES
  if (
    inputListAll[inputListAll.length - 1] === 'settingDeg' ||
    inputListAll[inputListAll.length - 1] === 'settingRad' ||
    inputListAll[inputListAll.length - 1] === 'settingInv' ||
    inputListAll[inputListAll.length - 1] === 'settingNotInv'
    // This is an example of something to refactor rather than hardcoding.
  ) {
    console.log(
      'You clicked a setting. The processCurrentSettings() function will be called.'
    ) // TEST LOG
    processCurrentSettings()
  } else {
    processInputValues()
  }
}

function separateValuesAndSettings(inputListAll) {
  // TAKES THE INPUTLISTALL PARAMETER, GIVEN AN ARGUMENT OF THE SAME NAME
  // SEPARATES VALUES AND SETTINGS IN ARRAYS AND RETURNS THE TWO ARRAYS IN AN OBJECT
  const inputListValuesAll = []
  const inputListSettingsAll = ['settingDeg', 'settingNotInv']
  for (const currentInputIndex of inputListAll) {
    if (
      currentInputIndex === 'settingDeg' ||
      currentInputIndex === 'settingRad' ||
      currentInputIndex === 'settingInv' ||
      currentInputIndex === 'settingNotInv'
    ) {
      inputListSettingsAll.push(currentInputIndex)
      console.log(
        'process-inputs: separateValuesAndSettings: inputListSettingsAll = ',
        inputListSettingsAll
      ) // TEST LOG
    } else {
      inputListValuesAll.push(currentInputIndex)
      console.log(
        'process-inputs: separateValuesAndSettings: inputListValuesAll = ',
        inputListValuesAll
      ) // TEST LOG
    }
  }
  const seperatedValuesAndSettings = {
    value: inputListValuesAll,
    settings: inputListSettingsAll,
  }
  return seperatedValuesAndSettings
}
