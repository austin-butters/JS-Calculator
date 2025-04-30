import { applySetting } from './apply-settings.js'

export function addKeystrokeEvents() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
      applySetting('settingInv')
    }
  })
  document.addEventListener('keyup', (event) => {
    applySetting('settingNotInv')
  })
}
