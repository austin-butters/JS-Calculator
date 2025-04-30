// PSEUDOCODE //
// Update Styles
// Generate buttons
// Update Pseudocode - Add key down events, e.g. shift for inverse setting.
// Remove page blocker

import { updateStyles } from './update-styles.js'
import { generateButtons } from './generate-buttons.js'
import { addKeyDownEvents } from './add-keydown-events.js'

export function initialize() {
  console.log('initialize:', 'Function initialize() called.') // TEST LOG
  updateStyles()
  generateButtons()
  addKeyDownEvents()
  document.getElementById('page-blocker').remove()
}
