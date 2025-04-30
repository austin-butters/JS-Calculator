// Display user input info:
const inputsToDisplay = document.createElement('h1')
export function displayUserInputInfo(inputList) {
  const tempArray = []
  for (let i = 0; i < inputList.length; i++) {
    tempArray.push('<br>')
    tempArray.push(inputList[i])
  }
  inputsToDisplay.innerHTML = 'User Inputs: ' + tempArray.toString()
  inputsToDisplay.style = 'position: fixed; top: 10px; left: 10px;'
  document.getElementsByTagName('body')[0].appendChild(inputsToDisplay)
}

// Display current settings:
const settingsToDisplay = document.createElement('h1')
export function displayCurrentSettings(settings) {
  settingsToDisplay.innerHTML =
    'isInverse: ' +
    settings.isInverse +
    '<br>' +
    'isRadians: ' +
    settings.isRadians
  settingsToDisplay.style = 'position: fixed; top: 10px; right: 10px;'
  document.getElementsByTagName('body')[0].appendChild(settingsToDisplay)
}
