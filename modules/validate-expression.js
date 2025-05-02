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
  console.log('validateExpression: Left Bracket insertion = ', tempWorkingArray) // TEST LOG
  // INSERT 0+ LEADERS
  tempWorkingArray = insertZeroPlusLeaders(tempWorkingArray)
  console.log('validateExpression: 0+ Leaders = ', tempWorkingArray) // TEST LOG
  // CLOSE OPEN BRACKETS
  tempWorkingArray = insertClosingBrackets(tempWorkingArray)
  console.log(
    'validateExpression: closing brackets inserted = ',
    tempWorkingArray
  ) // TEST LOG
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

function insertClosingBrackets(tempWorkingArray) {
  let openBracketCount = 0
  for (let i = 0; i < tempWorkingArray.length; i++) {
    if (tempWorkingArray[i] === 'bracketLeft') {
      openBracketCount++
    } else if (tempWorkingArray[i] === 'bracketRight') {
      openBracketCount--
    }
    // NEED TO ACCOUNT FOR SYNTAX ERROR OF TOO MANY RIGHT BRACKETS HERE
  }
  console.log('validateExpression: openBracketCount = ', openBracketCount) // TEST LOG
  for (let i = 0; openBracketCount > 0; i++) {
    tempWorkingArray.push('bracketRight')
    openBracketCount--
  }
  return tempWorkingArray
}

function accountForNegatives(tempWorkingArrayArg) {
  let tempWorkingArray = tempWorkingArrayArg
  // Temp working array will be reassigned a number of times, but it's best practice not to reassign arguments, so the argument has a different name and is reassigned.
  console.log('accountForNegatives() called with array ', tempWorkingArray) // TEST LOG
  // First, we can simply remove all double negatives, so we don't have to waste time working with them.
  // REMOVE DOUBLE NEGATIVES
  const tempDoubleNegativeRemoval = []
  let doubleNegativeScanIndex = 0
  while (doubleNegativeScanIndex < tempWorkingArray.length) {
    if (tempWorkingArray[doubleNegativeScanIndex] !== 'operatorMinus') {
      tempDoubleNegativeRemoval.push(tempWorkingArray[doubleNegativeScanIndex])
      doubleNegativeScanIndex += 1
    } else if (
      tempWorkingArray[doubleNegativeScanIndex + 1] !== 'operatorMinus'
    ) {
      tempDoubleNegativeRemoval.push(tempWorkingArray[doubleNegativeScanIndex])
      doubleNegativeScanIndex += 1
    } else {
      // We have a double (or triple, quadriple, etc) negative starting at the index 'i'
      // We need to determine how many we have.
      let doubleNegativeLength = 0
      for (let j = doubleNegativeScanIndex; j < tempWorkingArray.length; j++) {
        if (tempWorkingArray[j] === 'operatorMinus') {
          doubleNegativeLength++
        } else {
          break
        }
      }
      // Push + or - from double negative length
      if (doubleNegativeLength % 2 === 0) {
        // Is even, becomes a positive
        tempDoubleNegativeRemoval.push('operatorPlus')
      } else {
        // Is odd, becomes a negative
        tempDoubleNegativeRemoval.push('operatorMinus')
      }
      // Move forward in the working array before continuing scanning.
      doubleNegativeScanIndex += doubleNegativeLength
    }
  }
  console.log(
    'Double negatives removed. The new expression is ',
    tempDoubleNegativeRemoval
  ) // TEST LOG
  // At this point, negatives can only really exist if typed after a ^, *, /, +

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // We now have the length of double negative. With that we can convert into a + or - , and iterate i forwards in the temp working array to scan again.
  // If even, convert to negative, otherwise convert to plus
  // Move i forward in the array working array the nessicary amount.
  // Is even, replace with plus
  // Is odd, replace with minus
  // At this point, i is still at the index of the initial minus in the tempWorkingArray. We now have to move i forward to the first non-minus item in the array, before we continue scaning.
  // We have a doubleNegativeLength variable which is inclusive of the initial negative. We can add this to i, to move forwards to the next non double negative.

  const tempAccountForNegatives = []
  for (let i = 0; i < tempWorkingArray.length; i++) {
    // Only perform task if we run into a minus sign that ALSO qualifies as a negative, rather than a regular subtraction.
    if (
      tempWorkingArray[i] === 'operatorMinus' &&
      allInfixOperators.includes(tempWorkingArray[i - 1])
      // i.e. we run into a minus sign that follows an infix operator (including a minus at the start of an expression, as follows a plus from the 0+ leaders.)
    ) {
      // We have run into a negative:
      console.log(
        'Ran into a negative in the working array at index position ',
        i
      ) // TEST LOG
      // CHECK FOR DOUBLE NEGATIVES - how many minus signs immediately follow it? (All of these are also qualify as negatives because they follow a -, which is an infix operator.)
      let followingNegatives = 0
      for (let j = i + 1; j < tempWorkingArray.length; j++) {
        // Starting from the position immediately after the initial operatorMinus,
        if (tempWorkingArray[j] === 'operatorMinus') {
          followingNegatives++
        } else {
          break
        }
      }
      console.log('Following Negative Signs: ', followingNegatives) // TEST LOG
      // We now have a variable followingNegatives which tells us how many negatives (excluding the initial one) follow the initial negative we ran into.

      // FIND THE NEXT COMPLETE EXPRESSION FOLLOWING THE NEGATIVE
      // A complete expression is a string of negative signs followed by either:
      //   Anything contained within brackets, or
      //   Anything contained within brackets following a prefix operator that is followed by brackets (e.g. log(5 * -7))
      //   A complete string of numerical (1 -9, ., e, pi) values and postfix operators (%, !)
      //
      //

      // Save the position of the minus (negative) sign we're currently operating on.
      const currentNegativeIndex = i
      // Declare temp array for sub expression.
      const tempCompleteSubExpression = []
      // Declare an openBrackets variable to determine when the expression should end, if contained in brackets
      // push all double negatives into sub expression AND move forwards in the working array. (NOTE: DONT DO THIS IN THE LOOP, MOVE FORWARDS AFTER THE EXPRESSION HAS BEEN FOUND BY IT'S LENGTH IN THE WORKING ARRAY)
      for (let j = 0; j <= followingNegatives; j++) {
        tempCompleteSubExpression.push('operatorMinus')
      }
      console.log(
        'double negatives pushed into tempCompleteSubExpression, which is: ',
        tempCompleteSubExpression
      ) // TEST LOG
      //
      // Continue scanning forwards until we reach the end of a complete subexpression
      // We start scanning from the position immediately after the double negatives, using j, e.g. in '--(5+log(3)' we start from the first '('
      // There are a few types of complete expressions to be looking for. We need to determine which type it is.
      //   A bracketed expression:
      if (tempWorkingArray[i + followingNegatives] === 'bracketLeft') {
        console.log('Negative Bracketed Expression Found.') // TEST LOG
        for (
          let j = i + followingNegatives + 1;
          j < tempWorkingArray.length;
          j++ // Scans from position immediately following double negatives until the end of the working array.
        ) {}
      }
    }
  }
}

//
//
//
//
//
//
//
// for (let i = 0; i < tempZeroPlusInsertion.length; i++) {
//   if (
//     tempWorkingArray[i] === 'operatorMinus' &&
//     allInfixOperators.includes(tempWorkingArray[i - 1])
//   ) {
//     // Negative value has been found
//     // SCAN UNTIL A FULL EXPRESSION IS REACHED
//     const tempCompleteSubExpression = []
//     // If the next index is also minus we have a double negative, allow that to be part of it's own expression, rather than the end of an expression. This means we're scanning until we reach any infix operator except if the imediate following one is a minus sign, we include it in the complete expression we're looking for which we'll validate (calling the validateExpression function recursively.) We also have to account for brackets.
//     // All minus signs that follow in a row after the initial minus must be included in the subexpression as part of double negatives.
//     let followingMinusCount = 0
//     for (let j = i + 1; j < tempWorkingArray.length; j++) {
//       // We start at the position immediately following i, the initial operatorMinus that qualifies as a negative.
//     }
//     //
//     //
//     //
//     //
//     //
//     //
//     // Before we scan through the array further to find a complete expression after the negative
//     for (let j = i + 1; j < tempWorkingArray.length; j++) {
//       // Starting from the next position after the minus sign... We'll check what it is.
//       // If THE FIRST position after i in the reference array is
//       let leftBracketCount = 0
//       let rightBracketCount = 0
//       if (j)
//         if (
//           allInfixOperators.includes(tempWorkingArray[i]) &&
//           tempWorkingArray[i] !== 'operatorMinus'
//         ) {
//           // We've reached the end of an expression
//         }
//       if (tempWorkingArray[j] === 'bracketLeft') {
//         leftBracketCount++
//       } else if (tempWorkingArray[j] === 'bracketRight') {
//         rightBracketCount++
//       }
//       if (leftBracketCount - rightBracketCount === 0) {
//         // Complete expression has been found
//       }
//     }
//   }
// }

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
