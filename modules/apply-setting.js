// This still needs to be written.

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
