import { applySetting } from './apply-settings.js'

export function addKeyDownEvents() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
      applySetting('settingInv')
    }
  })
  document.addEventListener('keyup', (event) => {
    applySetting('settingNotInv')
  })
}
