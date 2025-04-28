// PSEUDOCODE //
// Generate buttons
// Remove page blocker

import { generateButtons } from './generate-buttons.js'

export function initialize() {
  console.log('initialize:', 'Function initialize() called.') // TEST LOG
  generateButtons()
  document.getElementById('page-blocker').remove()
}
