// PSEUDOCODE //
// Update Styles
// Generate buttons
// Remove page blocker

import { generateButtons } from './generate-buttons.js'
import { updateStyles } from './update-styles.js'

export function initialize() {
  console.log('initialize:', 'Function initialize() called.') // TEST LOG
  updateStyles()
  generateButtons()
  document.getElementById('page-blocker').remove()
}
