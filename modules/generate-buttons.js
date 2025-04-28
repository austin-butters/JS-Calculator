// PSEUDOCODE //
// Take a buttonList parameter (which should be this list of buttons from button-list.js, when this function is called from initialize.js)
// Using a for...of loop, loop through all buttons in the object in order, as specified by the buttonOrder array.
// For every button, add a button to index.html
// To do this, I'll have to create a new element as a variable, then add it's classes and ids, then appendChild()
// Add it's id
// Add all of it's classes (using a for each loop to go through the array)
// Add it's display text
// Bind an onclick function to it, using the buttonReturnFunction() property.

import { buttonList } from './button-list.js'
import { buttonOrder } from './button-order.js'

export function generateButtons() {
  console.log(
    'generate-buttons:',
    'Function generateButtons() called. The buttonList is',
    buttonList
  ) // TEST LOG
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
    buttonToAdd.textContent = currentButton.buttonTextContent // Eventually this will change to a ternary depending on whether inverse or not, and this function will be reused to regenerate buttons.
    buttonToAdd.onclick = (event) => {
      currentButton.buttonReturnFunction()
    }
    document.getElementById('button-container').appendChild(buttonToAdd)
  }
}
