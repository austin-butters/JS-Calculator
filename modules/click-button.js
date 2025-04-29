// PSEUDOCODE //
// Declare an empty inputListAll array. This is the true list of ALL inputs (button clicks) from the user, since they started using the calculator.
// When a button is clicked, it calls the function clickButton() with a whichButton parameter that specifies what button was clicked.
// In the clickButton function, simply push the argument (e.g. num1, num7, operatorPlus) to the inputList all array.
// Call a processInputs() function, which is another module to be imported.

const inputListAll = []

export function clickButton(whichButton) {
  inputListAll.push(whichButton)
  console.log('click-button: inputListAll: ', inputListAll)
  processInputs(inputListAll)
}
