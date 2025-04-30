import { inputDisplayValues, bracketOpeners } from './definitions.js'

export function generateDisplatedInput(expressionInputList) {
  console.log(
    'Displayed Input will be generated. Function not yet written. expressionInputList = ',
    expressionInputList
  ) // TEST LOG
  // This function must return a value to be used.
  const displayedInput = []
  for (const input of expressionInputList) {
    displayedInput.push(inputDisplayValues[input])
    if (bracketOpeners.includes(input)) {
      displayedInput.push(inputDisplayValues.bracketLeft)
    }
  }
  // Needs to scan displayed input array and insert times symbols where needed:
  //   After 'validExpressionEnders', i.e. anything that ends a valid expression, IF followed by a validExpressionStarter.
  //   Declare these as objects in the definitions module.
  //   After factorial/percentOf operators that are followed by anything other than infix operators, postfix operators, or separators like brackets. (i.e they are followed by values or prefix operators)
  //
  return displayedInput.join('')
}
