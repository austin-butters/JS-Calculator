// PSEUDOCODE //
// Generate buttons
// Remove page blocker

import { buttonList } from './button-list.js'
import { generateButtons } from './generate-buttons.js'

export function initialize() {
  console.log('initialize:', 'Function initialize() called.') // TEST LOG
  generateButtons(buttonList)
  document.getElementById('page-blocker').remove()
}
