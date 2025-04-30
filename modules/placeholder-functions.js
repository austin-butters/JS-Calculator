// Display user input info:
const infoToDisplay = document.createElement('h1')
export function displayUserInputInfo(inputList) {
  const tempArray = []
  for (let i = 0; i < inputList.length; i++) {
    tempArray.push('<br>')
    tempArray.push(inputList[i])
  }
  infoToDisplay.innerHTML = 'User Inputs: ' + tempArray.toString()
  infoToDisplay.style = 'position: fixed; top: 10px; left: 10px;'
  document.getElementsByTagName('body')[0].appendChild(infoToDisplay)
}
