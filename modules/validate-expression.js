// PSEUDOCODE //
// Takes an expressionInputList parameter, called with an argument of the same name.
// Firstly, insert the full syntax, more thoroughly that what is displayed.
//   Insert left brackets after operators that require it.
//   Insert a 0 + at the start of the operation and at the start of every expression (after every left bracket.)
//   Account for negatives
//      First, we have to find where the negatives (rather than subtractions) are.
//         Negatives are anything that follow another operator (e.g. 4 + -5, 5 --5 (which would account for double negatives.))
//         It would also be anything at the start of an expression (start or following a '('), but because we're inserting a 0+ this isn't nessicary to account for)
//         Anything else (a '-' appearing between expressions) is a subtraction
//         Anything else would be a syntax error (e.g. -+4, -*4 ).
//      Scan the inputs and repl
//      To account for negatives, must scan for every minus operator that fits the criteria above, and insert it inside brackets as it's own expression, brackets to be added (e.g. -5e becomes +(0-5e))
//      This happens after the initial 0+ insertions so we can insert just a zero when putting negatives inside brackets, making it 0-.
//   Insert multiplication between all complete expressions without an existing infix operator between them.
//   Substitue joint operators for their indivitual parts (e.g. operatorTimesTenToThe becomes operatorTimes, num1, num0, operatorToThe, )
//   Add how ever many closing brackets are needed.
//   It's possible that this isn't the correct order to do it in but I believe it is.
// Return the validated expression.

import { bracketOpeners, allInfixOperators } from './definitions.js'

export function validateExpression(expressionInputList) {
  // DECLARE TEMPORARY WORKING ARRAY
  let tempWorkingArray = expressionInputList
  console.log('validateExpression: Initial expression = ', tempWorkingArray) // TEST LOG
  // INSERT LEFT BRACKETS
  tempWorkingArray = insertLeftBrackets(tempWorkingArray)
  console.log('validateExpression: Bracket insertion = ', tempWorkingArray) // TEST LOG
  // INSERT 0+ LEADERS
  tempWorkingArray = insertZeroPlusLeaders(tempWorkingArray)
  console.log('validateExpression: 0+ Leaders = ', tempWorkingArray) // TEST LOG
  // ACCOUNT FOR NEGATIVES
  tempWorkingArray = accountForNegatives(tempWorkingArray)
  console.log(
    'validateExpression: Accounting for negatives = ',
    tempWorkingArray
  ) // TEST LOG
}

// -- SUB FUNCTIONS -- //

function insertLeftBrackets(tempWorkingArray) {
  const tempBracketInsertion = []
  for (let i = 0; i < tempWorkingArray.length; i++) {
    tempBracketInsertion.push(tempWorkingArray[i])
    if (bracketOpeners.includes(tempWorkingArray[i])) {
      tempBracketInsertion.push('bracketLeft')
    }
  }
  return tempBracketInsertion
}

function insertZeroPlusLeaders(tempWorkingArray) {
  const tempZeroPlusInsertion = []
  tempZeroPlusInsertion.push('num0', 'operatorPlus')
  for (let i = 0; i < tempWorkingArray.length; i++) {
    tempZeroPlusInsertion.push(tempWorkingArray[i])
    if (tempWorkingArray[i] === 'bracketLeft') {
      tempZeroPlusInsertion.push('num0', 'operatorPlus')
    }
  }
  return tempZeroPlusInsertion
}

function accountForNegatives(tempWorkingArray) {
  const tempAccountForNegatives = []
  for (let i = 0; i < tempZeroPlusInsertion.length; i++) {
    if (
      tempWorkingArray[i] === 'operatorMinus' &&
      allInfixOperators.includes(tempWorkingArray[i - 1])
    ) {
      // Negative value has been found
      // SCAN UNTIL A FULL EXPRESSION IS REACHED
      const tempCompleteSubExpression = []
      // If the next index is also minus we have a double negative, allow that to be part of it's own expression, rather than the end of an expression. This means we're scanning until we reach any infix operator except if the imediate following one is a minus sign, we include it in the complete expression we're looking for which we'll validate (calling the validateExpression function recursively.) We also have to account for brackets.
      // All minus signs that follow in a row after the initial minus must be included in the subexpression as part of double negatives.
      let followingMinusCount = 0
      for (let j = i + 1; j < tempWorkingArray.length; j++) {
        // We start at the position immediately following i, the initial operatorMinus that qualifies as a negative.
      }
      //
      //
      //
      //
      //
      //
      // Before we scan through the array further to find a complete expression after the negative
      for (let j = i + 1; j < tempWorkingArray.length; j++) {
        // Starting from the next position after the minus sign... We'll check what it is.
        // If THE FIRST position after i in the reference array is
        let leftBracketCount = 0
        let rightBracketCount = 0
        if (j)
          if (
            allInfixOperators.includes(tempWorkingArray[i]) &&
            tempWorkingArray[i] !== 'operatorMinus'
          ) {
            // We've reached the end of an expression
          }
        if (tempWorkingArray[j] === 'bracketLeft') {
          leftBracketCount++
        } else if (tempWorkingArray[j] === 'bracketRight') {
          rightBracketCount++
        }
        if (leftBracketCount - rightBracketCount === 0) {
          // Complete expression has been found
        }
      }
    }
  }

  //   Account for negatives
  //      First, we have to find where the negatives (rather than subtractions) are.
  //         Negatives are anything that follow another operator (e.g. 4 + -5, 5 --5 (which would account for double negatives.))
  //         It would also be anything at the start of an expression (start or following a '('), but because we're inserting a 0+ this isn't nessicary to account for)
  //         Anything else (a '-' appearing between expressions) is a subtraction
  //         Anything else would be a syntax error (e.g. -+4, -*4 ).
  //      Scan the inputs and replace
  //      To account for negatives, must scan for every minus operator that fits the criteria above, and insert it inside brackets as it's own expression, brackets to be added (e.g. -5e becomes +(0-5e))
  //      This happens after the initial 0+ insertions so we can insert just a zero when putting negatives inside brackets, making it 0-.
  //    When inserting negatives, we need to insert everything included in that negative expression and then inclose it in a bracket. This gets complicated, but we can scan until the end of the expression storing it in a temp array, then call the validateExpression function from within itself to return the validated value of that expression, then push it to the array and insert a right bracket, after which we continue from after the point of the end of the expression. Won't be able to test this untill the function is fully written because it contains itself.

  //
  //
}
