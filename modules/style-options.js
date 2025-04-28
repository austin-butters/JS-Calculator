// styles.js
// This module stores styling information to be used by the update-styles.js module.
// Each style option is an object containing sub-objects for each existing class, and classes to add
// Must apply in a specific order, usually from most general to most specific (e.g. all buttons, then specific button colors).
// In the object, keys are the variable name, and values are the values to assign.

const defaultApplicationOrder = ['--body-background-color']

export const style0 = {
  applicationOrder: [defaultApplicationOrder],
  '--body-background-color': 'green',
}
