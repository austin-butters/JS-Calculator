// PSEUDOCODE //
// Take a buttonList parameter (which should be this list of buttons from button-list.js, when this function is called from initialize.js)
// Using a for...in loop, loop through all buttons in the object.
// For every button, add a button to index.html
// Add it's id
// Add all of it's classes (using a for each loop to go through the array)
// Add it's display text
// Bind an onclick function to it, using the buttonReturnFunction() property.

export function generateButtons(buttonOrder, buttonList) {
  console.log(
    'generate-buttons:',
    'Function generateButtons() called. The buttonList is',
    buttonList
  ) // TEST LOG
  for (button in buttonList) {
    document.getElementById('button-container').app
  }
}
