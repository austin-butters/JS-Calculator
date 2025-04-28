// PSEUDOCODE //
// Remove page blocker
// Declare button types in object. Object must include
// Button's id
// Whether button types into expression or changes a setting
// Button's return value (leave as '' if n/a)
// Generate buttons

export function initialize() {
  console.log('Initialize:', 'Function initialize() called.') // TEST LOG
  document.getElementById('page-blocker').remove()
}
