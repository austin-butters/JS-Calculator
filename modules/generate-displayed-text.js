// PSEUDOCODE //
// Needs to scan displayed input array and insert times symbols where needed:
//   After valid 'expressionEnders', i.e. anything that ends a valid expression, IF followed by a valid expressionStarter or another expressionEnder.
//   Declare these as objects in the definitions module.
//   After factorial/percentOf operators that are followed by anything other than infix operators, postfix operators, or separators like brackets. (i.e they are followed by values or prefix operators)
//   // Update pseudocode - After thinking about it more the only times it's actually needed visually are after non-value constants and postfix operators (i.e e, pi, Ans, %, !).
//   //   But only if followed by a number constant (including a '.').

import {
  inputDisplayValues,
  bracketOpeners,
  displaytTimesAfterWhenBeforeDigit,
  displayTimesBeforeIfNeeded,
} from './definitions.js'

export function generateDisplayedInput(expressionInputList) {
  console.log(
    'Displayed Input will be generated. Function not yet written. expressionInputList = ',
    expressionInputList
  ) // TEST LOG
  // This function must return a value to be used.
  const displayedInput = []
  for (let i = 0; i < expressionInputList.length; i++) {
    // Push value
    displayedInput.push(inputDisplayValues[expressionInputList[i]])
    if (bracketOpeners.includes(expressionInputList[i])) {
      displayedInput.push(inputDisplayValues.bracketLeft)
    }
    // Separate with multiplication if needed
    if (
      displaytTimesAfterWhenBeforeDigit.includes(expressionInputList[i]) &&
      displayTimesBeforeIfNeeded.includes(expressionInputList[i + 1])
    ) {
      displayedInput.push(inputDisplayValues['operatorTimes'])
    }
  }
  // addClosingBrackets()
  let leftBracketCount = 0
  let rightBracketCount = 0
  for (const token of displayedInput) {
    if (token === inputDisplayValues['bracketLeft']) {
      leftBracketCount++
    } else if (token === inputDisplayValues['bracketRight']) {
      rightBracketCount++
    }
  }
  const impliedBrackets = leftBracketCount - rightBracketCount
  let impliedBracketString = ''
  for (let i = 1; i <= impliedBrackets; i++) {
    impliedBracketString =
      impliedBracketString + inputDisplayValues.bracketRight
  }
  return (
    displayedInput.join('') +
    '<span style="color: blue;">' +
    // The styling here may be something to refactor so it's not hardcoded like it is now, in future.
    impliedBracketString +
    '<span>'
  )
}
