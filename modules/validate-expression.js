// PSEUDOCODE //
// Takes an expressionInputList parameter, called with an argument of the same name.
// Firstly, insert the full syntax, more thoroughly that what is displayed.
//   Insert left brackets after operators that require it.
//   Insert a 0 + at the start of the operation and at the start of every expression (after every left bracket.)
//   Add how ever many closing brackets are needed.
//   Account for negatives
//      First, we have to find where the negatives (rather than subtractions) are.
//         Negatives are anything that follow another operator (e.g. 4 + -5, 5 --5 (which would account for double negatives.))
//         It would also be anything at the start of an expression (start or following a '('), but because we're inserting a 0+ this isn't nessicary to account for)
//         Anything else (a '-' appearing between expressions) is a subtraction
//         Anything else would be a syntax error (e.g. -+4, -*4 ).
//      Scan the inputs and repl
//      To account for negatives, must scan for every minus operator that fits the criteria above, and insert it inside brackets as it's own expression, brackets to be added (e.g. -5e becomes +(0-5e))
//      This happens after the initial 0+ insertions so we can insert just a zero when putting negatives inside brackets, making it 0-.
//
//   Insert multiplication between all complete expressions without an existing infix operator between them.
//   It's possible that this isn't the correct order to do it in but I believe it is.
// Return the validated expression.

import {
  bracketOpeners,
  allInfixOperators,
  expressionEnders,
  allConstants,
  allPostfixOperators,
  allNonDigitConstants,
} from './definitions.js'

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
    'validateExpression: Accounted for negatives = ',
    tempWorkingArray
  ) // TEST LOG
  // DECONSTRUCT JOINT OPERATORS
  tempWorkingArray = deconstructOperators(tempWorkingArray)
  console.log(
    'validateExpression: Joint operators deconstructed = ',
    tempWorkingArray
  ) // TEST LOG
  // To make inserting implied multiplication easier, we should first group expressions.
  // GROUP LOW-LEVEL EXPRESSIONS
  tempWorkingArray = groupExpressions(tempWorkingArray)
  console.log('validateExpression: grouped Expressions = ', tempWorkingArray) // TEST LOG
  // INSERT IMPLIED MULTIPLICATION
  tempWorkingArray = insertMultiplication(tempWorkingArray)
  console.log('validateExpression: Insert Multiplications = ', tempWorkingArray) // TEST LOG
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
  console.log('accountForNegatives() called with array ', tempWorkingArrayArg) // TEST LOG
  let tempWorkingArray = tempWorkingArrayArg
  // First, we can simply remove all double negatives, so we don't have to waste time working with them.
  // REMOVE DOUBLE NEGATIVES
  tempWorkingArray = removeDoubleNegatives(tempWorkingArray)
  console.log('Removed Double Negatives: ', tempWorkingArray) // TEST LOG
  // REPLACE +- WITH +
  tempWorkingArray = removePlusMinus(tempWorkingArray)
  console.log('instances of "+-" replaced with "-": ', tempWorkingArray) // TEST LOG
  // PLACE BRACKETS AROUND NEGATIVE EXPRESSIONS
  tempWorkingArray = insertBracketsAroundNegativeExpressions(tempWorkingArray)
  console.log(
    'Inserted brackets around remaining negative expressions: ',
    tempWorkingArray
  ) // TEST LOG
  return tempWorkingArray
}

// SUB FUNCTIONS FOR accountForNegatives() //
function removeDoubleNegatives(tempWorkingArray) {
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
        // Because starting an expression with a negative sign is valid syntax, we don't want to end up accidentally turning (--5) into (0++5) when double negatives are removed, after 0+ insertion. To solve this problem, we'll scan back in the working array from the initial minus. If it's preceded by a (0+ we can be almost certain that the user didn't type that manually, so we'll assume they didn't and we WONT insert the plus, because it's already there.
        if (
          expressionEnders.includes(
            tempWorkingArray[doubleNegativeScanIndex - 1]
          )
        ) {
          // We don't want to create ++ and the + is already there, so we'll ommit it, adding nothing to the array if it's preceded by '(0+'.
          // When a double negative that resolves to a plus is not after a bracket insertion:
          //   We also don't want to resolve a double negative into a positive if it's preceded by a plus or any operator, because then we get a syntax error.
          //   To resolve this, we need to push 'operatorPlus' ONLY if the double negative string is preceded by an expression ender (a numerical value, a right bracket, or a post fix operator.)
          //   Otherwise, we should push NO value, allowing the number itself to be the start of the new expression, because we don't need to start with a plus sign.
          // This means we only need to push the plus on one condition, if it follows an expression ender, otherwise we ommit it.
          tempDoubleNegativeRemoval.push('operatorPlus')
        }
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
  return tempDoubleNegativeRemoval
  // At this point, negatives can only really exist if typed after a ^, *, /, +
}

function removePlusMinus(tempWorkingArray) {
  // removePlusMinus()
  // This function isn't entirely nessicary as all infix operators including + preceding a negative will be accounted for,
  // But dealing with negatives is a complicated recursive function so it's easier to remove some of them by turning +-n into -n,
  // so that the function can be called less often.
  // Like other functions, takes a tempWorkingArray parameter and is called with an argument of the same name.
  // Must scan for any instances of operatorPlus immediately followed by operatorMinus and replace with a single operatorMinus
  const tempRemovePlusMinus = []
  for (let i = 0; i < tempWorkingArray.length; i++) {
    if (
      tempWorkingArray[i] !== 'operatorPlus' &&
      tempWorkingArray[i] !== 'operatorMinus'
    ) {
      // Is neither a + or -, push value
      tempRemovePlusMinus.push(tempWorkingArray[i])
    } else if (
      tempWorkingArray[i] === 'operatorPlus' &&
      tempWorkingArray[i + 1] !== 'operatorMinus'
    ) {
      // Is a plus that is NOT followed by a minus - push the plus value (if it is followed by a minus it will be skipped and accounted for when the next iteration reaches the minus.)
      tempRemovePlusMinus.push('operatorPlus')
    } else if (
      tempWorkingArray[i] === 'operatorMinus' &&
      tempWorkingArray[i - 1] !== 'operatorPlus'
    ) {
      // Is a minus that is NOT preceded by a plus, - push the minus value.
      tempRemovePlusMinus.push('operatorMinus')
    } else if (
      tempWorkingArray[i] === 'operatorMinus' &&
      tempWorkingArray[i - 1] === 'operatorPlus'
    ) {
      // Is a '+-', push only a '-'
      tempRemovePlusMinus.push('operatorMinus')
    }
  }
  return tempRemovePlusMinus
}

function insertBracketsAroundNegativeExpressions(tempWorkingArray) {
  let tempNegativeBracketInsertion = []
  // At this point, we have far fewer negatives. The definition remains unchanged:
  //    Negatives are anything that follow another infix operator (e.g. 4 + -5, 5 --5 (which would account for double negatives.))
  //       It would also be anything at the start of an expression (start or following a '('), but because we're inserting a 0+ this isn't nessicary to account for)
  //       Anything else (a '-' appearing between expressions) is a subtraction
  //       Anything else would be a syntax error (e.g. -+4, -*4 ).
  for (let i = 0; i < tempWorkingArray.length; i++) {
    // Check if it follows an infix operator
    if (
      tempWorkingArray[i] === 'operatorMinus' &&
      allInfixOperators.includes(tempWorkingArray[i - 1])
    ) {
      // Is an operatorMinus that qualifies as a negative, meaning we need to find the subexpression that follows.
      // Find full sub expression
      // To do this, we need to first save the index position of the current negative sign
      // Then scan forwards until we find the end of the following sub expression
      // If an opening bracket immediately follows, we'll need to scan until we find it's closing bracket (skipping nested brackets)
      // Same thing for a prefix operator, which will be followed by brackets.
      // Scan until a closing bracket is reached
      // If no opening bracket or prefix operator follows it, scan until any non numerical value is reached (i.e. any postfix operator, any prefix operator, any basic operator, or a bracket.)

      // Declare required variables
      console.log('negative operator found at i =', i) // TEST LOG
      const subExpression = []
      const negativeSignIndex = i
      let openBracketCount
      let firstBracketReached
      let subExpressionValueBreakIndex
      // Determine if it's a bracketed expression.
      if (
        bracketOpeners.includes(tempWorkingArray[i + 1]) ||
        tempWorkingArray[i + 1] === 'bracketLeft'
      ) {
        // Is a bracketed expression
        openBracketCount = 0
        console.log('The negative is a bracketed expression') // TEST LOG
        // Find bracketed expression
        for (let j = negativeSignIndex; j < tempWorkingArray.length; j++) {
          subExpression.push(tempWorkingArray[j])
          if (tempWorkingArray[j] === 'bracketLeft') {
            openBracketCount++
            firstBracketReached = true
          } else if (tempWorkingArray[j] === 'bracketRight') {
            openBracketCount--
          }
          if (firstBracketReached && openBracketCount === 0) {
            subExpressionValueBreakIndex = j // Ends on the last value that IS part of the subExpression.
            break
          }
        }
        // For bracketed expressions, brackets will be automatically closed already so we don't have to worry about them ending at the end of the expression.
      } else {
        // Is not a bracketed expression
        console.log('The negative is not a bracketed expression') // TEST LOG
        // Push initial minus sign, then start scanning after it.
        subExpression.push(tempWorkingArray[i])
        for (let j = negativeSignIndex + 1; j < tempWorkingArray.length; j++) {
          if (allConstants.includes(tempWorkingArray[j])) {
            subExpression.push(tempWorkingArray[j])
            if (j === tempWorkingArray.length - 1) {
              subExpressionValueBreakIndex = j
              break
            }
          } else {
            subExpressionValueBreakIndex = j - 1 // Ends on the last value that WAS part of the subExpression
            break
          }
        }
      }
      console.log(
        'SubExpression excluding postfix operators ends at index = ',
        subExpressionValueBreakIndex
      ) // TEST LOG
      console.log('current subExpression = ', subExpression) // TEST LOG
      // INLUDE POSTFIX OPERATORS
      // We now know where it ends, subExpressionValueBreakIndex is the position of the last item in the subexpression.
      // We need to include postfix operators in the sub expression as they need to be evaluated first.
      for (
        let j = subExpressionValueBreakIndex + 1;
        j < tempWorkingArray.length;
        j++
      ) {
        if (allPostfixOperators.includes(tempWorkingArray[j])) {
          subExpression.push(tempWorkingArray[j])
        } else {
          break
        }
      }
      console.log(
        'Inserted postfix operators into subExpression: ',
        subExpression
      ) // TEST LOG
      // We now have a full subexpression array.
      // We'll push it to the tempNegativeBracketInsertion Array, surrounded by brackets.
      // We will then iterate i as needed so that we start after the subexpression in the next scan iteration.
      tempNegativeBracketInsertion.push('bracketLeft', 'num0')
      for (const token of subExpression) {
        tempNegativeBracketInsertion.push(token)
      }
      tempNegativeBracketInsertion.push('bracketRight')
      i += subExpression.length - 1 // Very Important that this is right. The -1 accounts for I being raised by 1 in the next iteration.
    } else {
      // Is not an operatorMinus that qualifies as a negative, push the value to the array.
      tempNegativeBracketInsertion.push(tempWorkingArray[i])
    }
  }
  // One last step. If negative bracketed expressions contain negatives nested negative expressions, these will have been skipped and wont be acounted for yet. But the outer negative expression now qualifies as a subtraction rather than a negative, so the nested negative expressions are now "exposed". We need to check if there are any, and if there are, recursively call this function again, with the tempNegativeBracketInsertion array as it's argument.
  let needsAnotherPass
  for (let i = 0; i < tempNegativeBracketInsertion.length; i++) {
    if (
      tempNegativeBracketInsertion[i] === 'operatorMinus' &&
      allInfixOperators.includes(tempNegativeBracketInsertion[i - 1])
    ) {
      // Still Contains negative expressions:
      needsAnotherPass = true
      console.log('Insert brackets around negatives: Needs another pass.') // TEST LOG
      break
    }
  }
  if (needsAnotherPass) {
    tempNegativeBracketInsertion = insertBracketsAroundNegativeExpressions(
      tempNegativeBracketInsertion
    )
  }

  // FINALLY, IN ALL CASES, RETURN tempNegativeBracketInsertion
  return tempNegativeBracketInsertion
}

//
// !! NEED TO MAKE SURE THAT BRACKETED EXPRESSIONS DON'T CONTAIN NEGATIVES WITHIN THEMSELVES THAT ARE UNACCOUNTED FOR. WE CAN SOLVE THIS BY RECURSIVELY CALLING THE FUNCTION ON IT BEFORE PUSHING IT TO THE WORKING ARRAY.
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

// Start scanning from the position of the negative sign
// Scan until the closing bracket is reached,
// Pushing values to the array.
// Update openBrackedCount only if a bracketed expression and the first bracket has been reached.

// Break when brackets are closed AFTER reaching the first bracket

// If not a bracketed expression, scan until a non numerical value is reached, we don't need to do anything more as we've already pushed the value to the subExpression array. The above conditionals only occur of it's a bracketed expression so won't affect this.
// We have to continue until we reach anny non-numerical value.

// After the for loop, WE NEED TO CHECK FOR POSTFIX OPERATORS AND SCAN THROUGH THEM. THEY NEED TO BE INCLUDED WITHIN THE NEGATIVE EXPRESSION, AS THEY HAVE A HIGHER PRECEDENCE SO MUST BE GROUPED WITH THEIR PRECEDING EXPRESSIONS. SQUARED OPERATORS WILL BE INCLUDED HERE.
//
//

// let secondScanIndex
// for (let j = firstScanBreakIndex + 1; j < tempWorkingArray.length; j++) {
//   if (allPostfixOperators.includes(tempWorkingArray[j])) {
//     subExpression.push(tempWorkingArray[j])
//     secondScanIndex = j
//   } else {
//     break
//   }
// }

// CURRENTLY WORKING ON THIS SECTION
//
//
//
// We now have the position of the start and end of the full expression. We need to insert it with brackets on either side, and move i to the correct position to continue scanning from the end of the expression without repeating.
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
// We now have the length of double negative. With that we can convert into a + or - , and iterate i forwards in the temp working array to scan again.
// If even, convert to negative, otherwise convert to plus
// Move i forward in the array working array the nessicary amount.
// Is even, replace with plus
// Is odd, replace with minus
// At this point, i is still at the index of the initial minus in the tempWorkingArray. We now have to move i forward to the first non-minus item in the array, before we continue scaning.
// We have a doubleNegativeLength variable which is inclusive of the initial negative. We can add this to i, to move forwards to the next non double negative.
//
//
//
//
//
//
//
//

function deconstructOperators(tempWorkingArray) {
  const tempDeconstructOperators = []
  for (const token of tempWorkingArray) {
    switch (token) {
      case 'operatorTimesTenToThe':
        tempDeconstructOperators.push(
          'operatorTimes',
          'num1',
          'num0',
          'operatorToThe'
        )
        break
      case 'operatorTimesEToThe':
        tempDeconstructOperators.push('numE', 'operatorToThe') // NOTE THAT timesEToThe is an outdated name that needs to be fixed. It's just e^.
        break
      default:
        tempDeconstructOperators.push(token)
    }
  }
  return tempDeconstructOperators
}

function groupExpressions(tempWorkingArray) {
  // We already have certain expressions grouped according with brackets, both from manual user input and syntax insertion
  // To make things easier, we're also going to group all low-level expressions (i.e. constants) into brackets.
  // e.g. 54.3AnsEPi would all be grouped together, with multiplications between the non digit values.
  // In the above example, if it were immedialy followed by a digit number, that would be the start of a new low-level expression, which would later have multiplication inserted.
  // The other thing we WOULD need to group is the e^ operator but we don't need to because it's now categorised as a bracket opening prefix operator and is also broken down into it's parts.
  // After that, check which brackets have postfix operators and put them and the postfix operator inside another pair of brackets.
  // This will make it far easier to insert insert implied multiplication afterwards because the only place it's needed is between bracketed expressions.
  //
  // Scan the whole array, pushing each value into the array with additional brackets, as needed.
  const tempGroupExpressions = []
  for (let i = 0; i < tempWorkingArray.length; i++) {
    const token = tempWorkingArray[i]
    const precedingToken = tempWorkingArray[i - 1]
    let digitsReached = true
    if (!allConstants.includes(token)) {
      // Not a constant
      // If not a constant, we need to still check if we've just gone passed a low level expression. If we have, push a closing bracket as well as the value, otherwise, just push the value.
      if (allConstants.includes(precedingToken)) {
        tempGroupExpressions.push('bracketRight', token)
      } else {
        tempGroupExpressions.push(token)
      }
    } else {
      // Is a constant
      // Check if it's the first constant in the expression
      if (!allConstants.includes(precedingToken)) {
        // Is the first constant in the array, not preceded by a constant - Push it's value preceded by an opening bracket.
        tempGroupExpressions.push('bracketLeft', token)
      } else {
        // Is not the first constant, is preceded by one.
        // Check if it's a digit or not
        if (allNonDigitConstants.includes(token)) {
          // Is not a digit, push it's value preceded by an operatorTimes
          tempGroupExpressions.push('operatorTimes', token)
        } else {
          // Is a digit
          // Check if it's preceded by a non digit constant (indicating the start of a new expression)
          if (allNonDigitConstants.includes(precedingToken)) {
            // Is a digit preceded by a non digit constant
            // close and open a new expression (don't worry about the implied multiplication as this will be handled later), new expression starting with the token.
            tempGroupExpressions.push('bracketRight', 'bracketLeft', token)
          } else {
            // Is a digit preceded by a digit (i.e. part of the same number)
            // push it's value alone
            tempGroupExpressions.push(token)
          }
        }
      }
    }
    // Finally, for each iteration in the for loop we need to check if we're at the end of the tempWorkingArray and on a constant.
    // If we are, (i.e. the array ends in a constant that isn't nested in any brackets)
    // then we need to also push a closing bracket.
    if (i === tempWorkingArray.length - 1 && allConstants.includes(token)) {
      tempGroupExpressions.push('bracketRight')
    }
  }
  return tempGroupExpressions
}

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
function insertMultiplication(tempWorkingArray) {
  // Insert the remaining implied multiplication operators
  // At this point (after all other functions have run, and numbers are all contained in brackets), this is only nessicary:
  // After a postfix operator or right bracket (expression ender) AND before a prefix operator or left bracket (expression starter)
  const tempInsertMultiplication = []
  for (let i = 0; i < tempWorkingArray.length; i++) {
    const token = tempWorkingArray[i]
    const nextToken = tempWorkingArray[i + 1]
    const isExpressionEnder =
      allPostfixOperators.includes(token) || token === 'bracketRight'
    const isFollowedByExpressionStarter =
      bracketOpeners.includes(nextToken) || nextToken === 'bracketLeft'
    if (isExpressionEnder && isFollowedByExpressionStarter) {
      tempInsertMultiplication.push(token, 'operatortimes')
    } else {
      tempInsertMultiplication.push(token)
    }
  }
  return tempInsertMultiplication
}
