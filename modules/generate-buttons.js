// PSEUDOCODE //
// Take a buttonList parameter (which should be this list of buttons from button-list.js, when this function is called from initialize.js)
// Using a for...of loop, loop through all buttons in the object in order, as specified by the buttonOrder array.
// For every button, add a button to index.html
// To do this, I'll have to create a new element as a variable, then add it's classes and ids, then appendChild()
// Add it's id
// Add all of it's classes (using a for each loop to go through the array)
// Add it's display text
// Bind an onclick function to it, using the buttonReturnFunction() property.
// Update Pseudocode: As buttons must be regenerated when certain updates are made (like clicking the inverse button), the generateButtons() function must first clear all existing buttons. I'll do this by clearing all of the innerHTML from the div.
// Update Pseudocode: Button text must generate based on whether inverse is on or off.
// Update Pseudocode: Clear button needs a double click function to clear all - This has been changed to a shift key event listener, in a different module.

import { buttonList, buttonOrder } from './definitions.js'
import { currentSettings } from './apply-setting.js'

export function generateButtons() {
  console.log(
    'generate-buttons:',
    'Function generateButtons() called. The buttonList is',
    buttonList
  ) // TEST LOG
  document.getElementById('button-container').innerHTML = ''
  for (const buttonNumber of buttonOrder) {
    const currentButton = buttonList[buttonNumber]
    console.log('Adding all buttons. Button: ', currentButton) // TEST LOG
    const buttonToAdd = document.createElement('button')
    buttonToAdd.id = currentButton.buttonId
    console.log(
      'This is a test. Classes to add are: ',
      currentButton.buttonClasses
    ) // TEST LOG
    for (const classToAdd of currentButton.buttonClasses) {
      buttonToAdd.classList.add(classToAdd)
    }
    buttonToAdd.textContent = currentSettings.isInverse
      ? currentButton.buttonInverseTextContent
      : currentButton.buttonTextContent
    buttonToAdd.onclick = (event) => {
      if (currentSettings.isInverse) {
        currentButton.buttonInverseReturnFunction()
      } else {
        currentButton.buttonReturnFunction()
      }
    }
    document.getElementById('button-container').appendChild(buttonToAdd)
  }
}
