// PSEUDOCODE //
// Declare an empty inputListAll array. This is the true list of ALL inputs (button clicks) from the user, since they started using the calculator.
// When a button is clicked, it calls the function clickButton() with a whichButton parameter that specifies what button was clicked.
// In the clickButton function, simply push the argument (e.g. num1, num7, operatorPlus) to the inputList all array.
// Call a processInputs() function, which is another module to be imported.

// UPDATED PSEUDOCODE //
// Declare an empty array UserInputList
// When a button is clicked, if clearAll, clear the inputList array
// else if a setting, apply that setting.
// else if clear, clear the last input from unserInputList
// else if operatorThRootOf, do nothing but alert that functionality will be added.
// else if equals, evaluate the expression.
// else it must be an input to add to the current expression

import { displayUserInputInfo } from './placeholder-functions.js' // FOR TESTING PURPOSES

const inputList = []

export function clickButton(whichButton) {
  inputList.push(whichButton)

  //
  //
  displayUserInputInfo(inputList) // FOR TESTING PURPOSES
}
