// PSEUDOCODE //
// Declare an empty inputListAll array. This is the true list of ALL inputs (button clicks) from the user, since they started using the calculator.
// When a button is clicked, it calls the function clickButton() with a whichButton parameter that specifies what button was clicked.
// In the clickButton function, simply push the argument (e.g. num1, num7, operatorPlus) to the inputList all array.
// Call a processInputs() function, which is another module to be imported.

// UPDATED PSEUDOCODE //
// Declare an empty array expressionInputList
// When a button is clicked, if clearAll, clear the inputList array
// else if a setting, apply that setting.
// else if clear, clear the last input from unserInputList
// else if operatorThRootOf, do nothing but alert that functionality will be added.
// else if equals, evaluate the expression.
// else it must be an input to add to the current expression
// Update Pseudocode - We want the inverse functions to only apply for one click, so every button click when inverse should revert settings to not inverse. This can actually be applied to every button click, and if the button clicked was the inverse button it will later reupdate the inverse state accordingly.

// Update Pseudocode: Finally, we need to generate an input to display to the user, as well as an input ready for evaluation (which we only need to generate directly before evaluating.)

import { displayUserInputInfo } from './placeholder-functions.js' // FOR TESTING PURPOSES

// DEFINITION IMPORTS
import { allSettingOptions } from './definitions.js'

// FUNCTION AND DYNAMIC VALUE IMPORTS
import { applySetting, currentSettings } from './apply-setting.js'
import { validateExpression } from './validate-expression.js'
import { evaluateExpression } from './evaluate-expression.js'
import { generateDisplayedInput } from './generate-displayed-text.js'
import { inputMemory, ansMemory } from './memory-management.js'

// CLICK BUTTON FUNCTION
let expressionInputList = []
export function clickButton(whichButton) {
  if (
    currentSettings.isInverse === true &&
    !allSettingOptions.includes(whichButton)
  ) {
    applySetting('settingNotInv')
  } //  - Changed. Won't be called on every button click as it wastes processing power. The extra thought in a conditional here is less than generating buttons every time.
  if (allSettingOptions.includes(whichButton)) {
    console.log('Setting will be applied') // TEST LOG
    applySetting(whichButton)
  } else if (whichButton === 'functionClearAll') {
    expressionInputList = []
  } else if (whichButton === 'functionClear') {
    expressionInputList.pop()
  } else if (whichButton === 'functionEvaluate') {
    inputMemory.push(expressionInputList)
    expressionInputList = []
    const evaluatedExpression = evaluateExpression(
      validateExpression(inputMemory[inputMemory.length - 1])
    )
    ansMemory.push(evaluatedExpression)
    console.log('evaluatedExpression = ', evaluatedExpression) // TEST LOG
  } else if (whichButton === 'operatorThRootOf') {
    alert(
      'This function is currently unavailable. Functionality will be added later'
    ) // FUNCTIONALITY TO BE ADDED
  } else {
    // else, it must now be a value to add to the expression.
    expressionInputList.push(whichButton)
  }
  if (expressionInputList.length === 0) {
    // Has been cleared so must have been evaluated
    document.getElementById('displayed-text').innerHTML =
      ansMemory[ansMemory.length - 1]
  } else {
    document.getElementById('displayed-text').innerHTML =
      generateDisplayedInput(expressionInputList)
  }
  //
  //
  displayUserInputInfo(expressionInputList) // FOR TESTING PURPOSES
}

// Valid expression:
// We have an input list which may or may not be valid, either way we need to make a valid version of it (returning 'invalid' if invalid.)
// This is what will be used when evaluating, rather than the user's direct input.
