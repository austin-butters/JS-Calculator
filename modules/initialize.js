// PSEUDOCODE //
// Remove page blocker
// Declare button types in object. Object must include
// Button's id
// Whether button types into expression or changes a setting
// Button's return value (leave as '' if n/a)
// Generate buttons
import { buttonList } from './button-list.js'

export function initialize() {
  console.log('Initialize:', 'Function initialize() called.') // TEST LOG
  console.log('Initialise: logging buttonList object: ', buttonList)
  document.getElementById('page-blocker').remove()
}
