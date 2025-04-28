// PSEUDOCODE //
// Declare variables for styling in a module style-options.js
// Write and export an updateStyles() function to update calculator's style. (Specifically colors, for now at least.)
// Takes a paramater for which style object from the styles.js module to use for styling.
// If no argument for style, use the default.
// Firstly, appends a child to <head>, which adds a new stylesheet from assets/styles/style-options.
// The updateStyles function must apply styles in order from least to most specific, e.g. general colors being overwritten by specific colors. This will be done with an array in the style-options.js module
// This is so that in future, styling uptions can be added easily.

import { style0 } from './style-options.js'

const styleDefault = style0

export function updateStyles(whichStyle) {
  console.log('update-styles: Function updateStyles() has been called.') // TEST LOG
  if (whichStyle === undefined) {
    whichStyle = styleDefault
  }
  console.log('update-styles: whichStyle = ', whichStyle) // TEST LOG
  const newStyleSheet = document.createElement('link')
  newStyleSheet.rel = 'stylesheet'
  newStyleSheet.href = '../assets/styles/current-style.css'
  document.getElementsByTagName('head')[0].appendChild(newStyleSheet)
  for (const style in whichStyle) {
    console.log('update-styles: Will add style:', style) // TEST LOG
    document.documentElement.style.setProperty(style, whichStyle[style])
  }
}
