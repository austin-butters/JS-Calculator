// This still needs to be written.

import { generateButtons } from './generate-buttons.js'
import { displayCurrentSettings } from './placeholder-functions.js'

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
  } else if (setting === 'settingNotInv') {
    currentSettings.isInverse = false
  } else if (setting === 'settingDeg') {
    currentSettings.isRadians = false
  } else if (setting === 'settingRad') {
    currentSettings.isRadians = true
  }
  generateButtons()
  displayCurrentSettings(currentSettings) // FOR TESTING PURPOSES
}
