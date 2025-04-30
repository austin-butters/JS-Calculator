// This still needs to be written.

import { buttonList } from './button-list.js' // FOR TESTING PURPOSES, TO BE CHANGED
import { generateButtons } from './generate-buttons'

export const currentSettings = {
  isInverse: false,
  isRadians: false,
}

export function applySetting(setting) {
  console.log(
    'apply-settings: the applySettings() function has been called. Function not yet written.'
  ) // TEST LOG
  if (setting === 'settingInv') {
    currentSettings.isInverse = true
    generateButtons()
  }
  if (setting === 'settingNotInv') {
    currentSettings.isInverse = false
    generateButtons()
  }
}
