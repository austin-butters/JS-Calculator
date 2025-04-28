// styles.js
// This module stores styling information to be used by the update-styles.js module.
// Each style option is an object containing sub-objects for each existing class, and classes to add
// Must apply in a specific order, usually from most general to most specific (e.g. all buttons, then specific button colors).
// In the object, keys are the variable name, and values are the values to assign.

// The current variables I'm using are just for color. They are (as of 29/04/2025, 03:29AM)
// --body-background-color
// --calculator-container-background-color
// --calculator-display-background-color
// --calculator-display-border-color
// --displayed-text-font-family
// --displayed-text-font-size
// --displayed-text-color
// --button-background-color
// --button-font-family
// --button-font-size
// --button-color
// --buttontype-value-background-color
// --buttontype-setting-background-color
// --buttontype-operator-background-color
// --buttontype-basic-operator-background-color
// --buttontype-constant-background-color
// --buttontype-integer-background-color

const styleTemplate = {
  // Change values accordingly when adding new options. currently all values set to undefined.
  '--body-background-color': undefined,
  '--calculator-container-background-color': undefined,
  '--calculator-display-background-color': undefined,
  '--calculator-display-border-color': undefined,
  '--displayed-text-font-family': undefined,
  '--displayed-text-font-size': undefined,
  '--displayed-text-color': undefined,
  '--button-background-color': undefined,
  '--button-font-family': undefined,
  '--button-font-size': undefined,
  '--button-color': undefined,
  '--buttontype-value-background-color': undefined,
  '--buttontype-setting-background-color': undefined,
  '--buttontype-operator-background-color': undefined,
  '--buttontype-basic-operator-background-color': undefined,
  '--buttontype-constant-background-color': undefined,
  '--buttontype-integer-background-color': undefined,
}

export const style0 = {
  '--body-background-color': '#ffffff',
  '--calculator-container-background-color': '#d8d7ce',
  '--calculator-display-background-color': '#a7b99c',
  '--calculator-display-border-color': '#000000',
  '--displayed-text-font-family': 'helvetica',
  '--displayed-text-font-size': '1rem',
  '--displayed-text-color': '#000000',
  '--button-background-color': undefined,
  '--button-font-family': undefined,
  '--button-font-size': undefined,
  '--button-color': undefined,
  '--buttontype-value-background-color': undefined,
  '--buttontype-setting-background-color': undefined,
  '--buttontype-operator-background-color': undefined,
  '--buttontype-basic-operator-background-color': undefined,
  '--buttontype-constant-background-color': undefined,
  '--buttontype-integer-background-color': undefined,
}
