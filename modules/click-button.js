import { buttonList } from './button-list.js'

export function clickButton(whichButton) {
  console.log(
    'click-button: The clickButton() function has been called. isInverse = ',
    buttonList.isInverse,
    'whichButton = ',
    whichButton
  ) // TEST LOG
}
