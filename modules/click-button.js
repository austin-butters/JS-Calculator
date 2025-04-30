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

import { displayUserInputInfo } from './placeholder-functions.js' // FOR TESTING PURPOSES

// DEFINITION IMPORTS
import { allSettings } from './definitions.js'

// FUNCTION IMPORTS
import { applySetting } from './apply-settings.js'
import { evaluateExpression } from './evaluate-expression.js'

// CLICK BUTTON FUNCTION
let expressionInputList = []
export function clickButton(whichButton) {
  applySetting('settingNotInv')
  if (allSettings.includes(whichButton)) {
    console.log('Setting will be applied') // TEST LOG
    applySetting(whichButton)
  } else if (whichButton === 'functionClearAll') {
    expressionInputList = []
  } else if (whichButton === 'functionClear') {
    expressionInputList.pop()
  } else if (whichButton === 'functionEvaluate') {
    evaluateExpression(expressionInputList) // MODULE TO BE ADDED
  } else if (whichButton === 'operatorThRootOf') {
    alert(
      'This function is currently unavailable. Functionality will be added later'
    ) // FUNCTIONALITY TO BE ADDED
  } else {
    // else, it must now be a value to add to the expression.
    expressionInputList.push(whichButton)
  }
  //
  //
  displayUserInputInfo(expressionInputList) // FOR TESTING PURPOSES
}
