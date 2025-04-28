// PSEUDOCODE //
// Generate buttons
// Update Styles
// Remove page blocker

import { generateButtons } from './generate-buttons.js'
import { updateStyles } from './update-styles.js'

export function initialize() {
  console.log('initialize:', 'Function initialize() called.') // TEST LOG
  generateButtons()
  updateStyles()
  document.getElementById('page-blocker').remove()
}
