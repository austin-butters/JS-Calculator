// PSEUDOCODE //
// Declare variables for styling in a module style.js
// Write and export an updateStyles() function to update calculator's style. (Specifically colors, for now at least.)
// Takes a paramater for which style object from the styles.js module to use for styling.
// Firstly, appends a child to <head>, which adds a new stylesheet from assets/styles/style-options.
// The updateStyles function must apply styles in order from least to most specific, e.g. general colors being overwritten by specific colors.
// This is so that in future, styling uptions can be added easily.

const styleDefault = {}

export function updateStyles(whichStyle) {
  const newStyleSheet = document.createElement('link')
  newStyleSheet.rel = 'stylesheet'
  newStyleSheet.href = '../assets/styles/style-options.css'
  document.getElementsByTagName('head')[0].appendChild(newStyleSheet)
}
