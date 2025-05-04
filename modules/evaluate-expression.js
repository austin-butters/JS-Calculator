// PSEUDOCODE //
// Individual operator functions are imported from the ./operators.js module.
// We need to apply operators in order of operations. That is:
//   Brackets (innermost to outermost)
//   Exponents (right to left)
//   Postfix operators (!, %, squared. Note that ! is the only true one here, but as these are all effective postfix operators for this project, evaluate them all with equal precedence, from left to right following an expression they're being applied to.)
//   Prefix operators (log, ln, trig functions)
//   Division
//   Multiplication
//   Addition
//   Subtraction
//
// To deal with brackets, which are there own, fully contained functions, we're going to have to recursively call the evaluateExpression function, finding a pair of brackets and passing it in.
// This means we have to scan the entire function until we find a complete pair of brackets, saving the expression as we go and passing it into the evaluateExpression function.
// We'll have to specifically find the first pair of brackets with no nested brackets.

// NOTE: None of this accounts for errors yet. That's something to add later.

export function evaluateExpression(expression) {
  console.log('Will evaluate expression ', expression) // TEST LOG
  // DECLARE A TEMPORARY VARIABLE TO MANIPULATE THROUGHOUT THIS FUNCTION
  let tempExpression = expression
  // CHECK IF BRACKET NESTING IS VALID
  if (!bracketNestingIsValid(tempExpression)) {
    console.log('Bracket Nesting is Invalid.') // TEST LOG
    return // CHANGE IN FUTURE WHEN HANDLING ERRORS - for now it's undefined as this is an important error to address while writing the code.
  }
  // EVALUATE INNERMOST BRACKETS FIRST
  while (hasBrackets(tempExpression)) {
    // Has brackets, call the evaluateFirstSubExpression() function,
    // which will run this function on a smaller part of it, skipping the bracket logic. It returns the full expression with the innermost bracket evaluated.
    // Continue doing this until there are no brackets (at which point the function will move on to the evaluation logic that evaluateFirstSubExpression uses, for the main expression.)
    tempExpression = evaluateFirstSubExpression(tempExpression)
    //
    //
    // break // IMPORTANT NOTE: THIS IS TEMPORARY SO THAT MY COMPUTER DOESN'T CRASH WHILE TESTING BEFORE I FINISH THE FUNCTION. EVENTUALLY IT WILL BE REMOVED, BUT WITH POTENTIAL SAFETY NETS IN PLACE FOR SYNTAX ERRORS, ETC.
    //
    //
  }
  // EVALUATION LOGIC
  tempExpression = processOperators(tempExpression)
  return tempExpression
}

// -- SUB FUNCTIONS --  //

// CHECKS //

function hasBrackets(expression) {
  for (const token of expression) {
    if (token === 'bracketLeft' || token === 'bracketRight') {
      console.log(expression, 'hasBrackets: ', true) // TEST LOG
      return true
    }
  }
  console.log(expression, 'hasBrackets: ', false) // TEST LOG
  return false
}

// Checks for valid bracket nesting and balance, important to avoid endless recursive evaluation
function bracketNestingIsValid(expression) {
  let openBrackets = 0
  for (const token of expression) {
    if (token === 'bracketLeft') {
      openBrackets++
    } else if (token === 'bracketRight') {
      openBrackets--
      if (openBrackets < 0) {
        return false
      }
    }
  }
  return openBrackets === 0
}

// PROCESSES //

function evaluateFirstSubExpression(expression) {
  let leftBracketIndex
  let rightBracketIndex
  for (let i = 0; i < expression.length; i++) {
    const token = expression[i]
    if (token === 'bracketLeft') {
      leftBracketIndex = i
      // Updated with each nested opening bracket
    } else if (token === 'bracketRight') {
      rightBracketIndex = i
      // The first right bracket we find, at which point leftBracketIndex is the index of the most recent right bracket.
      break
    }
  }
  // We now have the indexes of the opening and closing brackets.
  const subExpression = []
  for (let i = leftBracketIndex + 1; i < rightBracketIndex; i++) {
    subExpression.push(expression[i])
  }
  // subExpression now equals the inner contents of the brackets.
  // Evaluate the subexpression
  // Before evaluating, run another check to confirm theres no brackets contained in it.
  let evaluatedSubExpression
  if (hasBrackets(subExpression)) {
    return // ADD ERROR HANDLING LATER
  } else {
    evaluatedSubExpression = evaluateExpression(subExpression)
  }
  // We now have the evaluated subexpression (we will, once evaluateExpression written)
  // need to insert this in the entire expression in place of the brackets.
  const updatedExpression = []
  for (let i = 0; i < leftBracketIndex; i++) {
    updatedExpression.push(expression[i])
  }
  for (const token of evaluatedSubExpression) {
    updatedExpression.push(token)
  }
  for (let i = rightBracketIndex + 1; i < expression.length; i++) {
    updatedExpression.push(expression[i])
  }
  console.log('evaluateFirstSubExpression: Result = ', updatedExpression) // TEST LOG
  return updatedExpression
}

import {
  allConstants,
  allPostfixOperators,
  bracketOpeners,
  orderOfOperations,
} from './definitions.js'

function processOperators(expression) {
  if (hasBrackets(expression)) {
    // Shouldn't as this function is called only on
    return // HANDLE ERRORS IN FUTURE
  }
  let tempExpression = expression
  // We evaluate everything until there are no longer any operators. Once there aren't any, it must be a single number value in the expression.
  // When a single number, return it as the full expression.
  if (tempExpression.length === 1) {
    // Is a single value, meaning evaluation is now complete.
    return tempExpression
  } // WE CAN REMOVE THIS AS WE ONLY NEED TO CHECK ONCE, AFTER ALL OPERATIONS ARE EVALUATED. FOR TESTING PURPOSES, WE'LL KEEP IT HERE SO WE CAN SEE OPERATIONS CALLED ON NUMBERS (WHICH ARE CONTAINED IN THEIR OWN BRACKETS)
  const operations = {
    exponents: evaluateExponents,
    postfixOperators: evaluatePostfixOperators,
    prefixOperators: evaluatePrefixOperators,
    division: evaluateDivision,
    multiplication: evaluateMultiplication,
    addition: evaluateAddition,
    subtraction: evaluateSubtraction,
  }
  for (const currentOperation of orderOfOperations) {
    tempExpression = operations[currentOperation](tempExpression)
  }
  if (tempExpression.length === 1) {
    // Is a single value, meaning evaluation is now complete.
    return tempExpression
  } else {
    // DEAL WITH ERRORS
  }
  return [1] // REMOVE PLACEHOLDER, FOR NOW I'M TREATING ALL BRACKETED EXPRESSIONS AS EVALUATING TO 1
}

// OPERATION EVALUATION FUNCTIONS //

// Complete these functions, keeping in mind the order they must be applied (e.g. left to right, right to left, etc.)
// Keep in mind that at this point, no brackets exist in whatever expression is passed into the functions. This means operators are generally applied only to numbers.

// Import operators
import {
  add,
  subtract,
  multiply,
  divide,
  raiseTo,
  thRootOf,
  timesTenToThe, // MAY BECOME REDUNDANT
  timesEToThe, // MAY BECOME REDUNDANT
  convertToPercent,
  factorialOf,
  squared,
  sinOf,
  cosOf,
  tanOf,
  inverseSinOf,
  inverseCosOf,
  inverseTanOf,
  logOf,
  naturalLogOf,
  sqrtOf,
} from './operators.js'

function evaluatePostfixOperators(expression) {
  // The only valid scenario at this point is for operatorFactorial to follow a number value.
  console.log('evaluatePostfixOperators called with ', expression) // TEST LOG
  let tempExpression = []
  for (let i = 0; i < expression.length; i++) {
    const token = expression[i]
    const previousToken = expression[i - 1]
    const nextToken = expression[i + 1]
    // Check what the current token is an push to tempExpression accordingly.
    if (typeof token !== 'number' && !allPostfixOperators.includes(token)) {
      // Is not a constant or postfix operator, so is definately not part of an expression containing a postfix operator
      tempExpression.push(token)
    } else if (
      typeof token === 'number' &&
      !allPostfixOperators.includes(nextToken)
    ) {
      // Is a constant not followed by a postfix operator, not part of an expression containing a postfix operator, simply push the constant alone.
      tempExpression.push(token)
    } else if (
      typeof token === 'number' &&
      allPostfixOperators.includes(nextToken)
    ) {
      // Is a constant followed by a postfix operator, skip this iteration and the constant will be dealt with in the next iteration.
      continue
    } else if (allPostfixOperators.includes(token)) {
      // Current token is a post fix operator. Check if it follows a constant (which it should at the point of this function being called, as there are no brackets left.)
      if (typeof previousToken === 'number') {
        // Is a postfix operator preceded by a constant,
        // The constant will not have been pushed yet.
        // Push a single value, the constant with the operation applied
        const postfixOperationActions = {
          operatorPercentOf: () => convertToPercent(previousToken),
          operatorFactorial: () => factorialOf(previousToken),
          operatorSquared: () => squared(previousToken),
        }
        const operationToPerform = postfixOperationActions[token]
        if (operationToPerform) {
          // Is a valid postfix operator
          tempExpression.push(operationToPerform())
        } else {
          // Is not included in postfixOperationActions, is an error
          return // ADD ERROR HANDLING
        }
      } else {
        // HANDLE postfix chains.
        if (allPostfixOperators.includes(previousToken)) {
          // is a postfix operator preceded by another one. At this point we've already evaluated the previous postfix operator, so we can't evaluate this one right away.
          // Instead, simply push the postfix operator to the tempExpression, which will be reevaluated for postfix operators.
          tempExpression.push(token)
        } else {
          // Is a postfix operator not preceded by a constant or another postfix operator - which is a syntax error
          return // ADD ERROR HANDLING
        }
      }
    }
  }
  // We've now scanned through the whole array, evaluating the FIRST postfix operator in each expression.
  // Expression may still contain postfix operators, in which case we need to reevaluate it.
  let expressionContainsPostfixOperators
  for (const token of tempExpression) {
    if (allPostfixOperators.includes(token)) {
      expressionContainsPostfixOperators = true
    }
  }
  // We now have an expressionContainsPostfixOperators variable, if true we need to reevaluate expression before returning it
  // By calling this function recursively it will continuously reevaluate until there are no postfix operators left before returning the final tempExpression, with no postfix operators.
  console.log(
    'evalatePostFixOperators(): Before recursive function returns ',
    tempExpression
  )
  if (expressionContainsPostfixOperators) {
    tempExpression = evaluatePostfixOperators(tempExpression)
  }
  return tempExpression
}

function evaluateExponents(expression) {
  // At this point, we don't have to consider postfix operators as they're accounted for and won't be in the expression.
  // At this point, exponents should only ever fall between numbers, (as bracketed expressions eventually evaluate to single numbers), or after numbers and before prefix operators.
  // At this point postfix operators are also followed by a single number, so they can be evaluated first with their bracketed expression
  // BUT if the exponent is followed by a prefix operator with a number that is also raised to a power, we have to evaluate the later power first, then the prefix operation, then the initial power.
  // In all cases, exponents must be evaluated from right to left.
  // We'll have to scan from right to left and:
  //   Evaluate exponents between numbers
  // At which point we still have potential exponents before prefix operators.
  // BUT all remaining exponents have lower precedence than the prefix operators that follow them. They still have higher precedence than the prefix operators that precede them.
  // To deal with this, we will scan from right to left again:
  //   When we run into an exponent, find the expression to it's right
  //   Evaluate the expression to it's right and replace
  //   Exponent is now between two numbers (with the exception of syntax errors)
  //   Evaluate the exponent
  // This we we evaluate only the last exponent's following expression
  // Repeat the second scan until there are no exponents remaining.
  // Note - Arguably, a negative is a prefix operator but at this point all negatives have been accounted for and converted into subtractions, e.g. 6 + -4 has been converted into 6 + (0 - 4)

  console.log('evaluateExponents called with ', expression) // TEST LOG
  let tempReferenceExpression = expression // To change and reference throughout function, instead of the argument directly.
  let tempExpression = []
  // SCAN FOR AND EVALUATE EXPONENTS BETWEEN NUMBERS
  while (tempReferenceExpression.includes('operatorToThe')) {
    console.log(
      'Scanning for exponent operators. tempReferenceExpression = ',
      tempReferenceExpression
    ) // TEST LOG
    // DETERMINE IF ALL EXPONENT OPERATORS BETWEEN NUMBERS HAVE BEEN RESOLVED. IF SO, BREAK
    let hasExponentsBetweenNumbers = false
    for (let i = 0; i < tempReferenceExpression.length; i++) {
      const token = tempReferenceExpression[i]
      const precedingToken = tempReferenceExpression[i - 1]
      const followingToken = tempReferenceExpression[i + 1]
      if (
        token === 'operatorToThe' &&
        typeof precedingToken === 'number' &&
        typeof followingToken === 'number'
      ) {
        hasExponentsBetweenNumbers = true
        break
      }
    }
    if (!hasExponentsBetweenNumbers) {
      break
    }
    // SCAN AND EVALUATE EXPONENT OPERATORS BETWEEN NUMBERS
    for (let i = tempReferenceExpression.length - 1; i >= 0; i--) {
      console.log(
        'evalueExponents: tempReferenceExpression = ',
        tempReferenceExpression
      ) // TEST LOG
      const token = tempReferenceExpression[i]
      const precedingToken = tempReferenceExpression[i - 1]
      const followingToken = tempReferenceExpression[i + 1]
      if (token !== 'operatorToThe') {
        // Is not an exponent operator
        if (
          followingToken !== 'operatorToThe' &&
          precedingToken !== 'operatorToThe'
        ) {
          // Is not an exponent operator and is not next to one, therefore is not part of a subexpression to operate on.
          // Add it's value to array.
          tempExpression.unshift(token)
        } else {
          // Is not an exponent operator, but is next to one.
          // Simply continue, and the value will be handled when the iteration arrives at the exponent operator
          continue
        }
      } else {
        // Is an exponent operator
        // Check if between two numbers, otherwise skip (will be covered in the second scan.)
        if (
          typeof followingToken === 'number' &&
          typeof precedingToken === 'number'
        ) {
          // Is an exponent operator, between two numbers
          // Evaluate exponent and push.
          // We'll have to break the loop now (first adding the remainder of the expression), and call it again with tempExpression. Using a while conditional.
          tempExpression.unshift(raiseTo(precedingToken, followingToken))
          for (let j = i - 2; j >= 0; j--) {
            // We're currently on the exponent operator, the i - 2 is to skip over the preceding Token which has been evaluated already.
            tempExpression.unshift(tempReferenceExpression[j])
          }
          break
        } else {
          // Is an exponent operator, not between two numbers
          // We'll handle this later, but for now we'll skip it.
          break // FOR TESTING PURPOSES, REMOVE AFTER SECOND SCAN (FOR PREFIX OPERATORS) IS WRITTEN
          continue
        }
      }
    }
    tempReferenceExpression = tempExpression
    tempExpression = []
  }
  console.log(
    'Evaluated all exponent operators between numbers = ',
    tempReferenceExpression
  ) // TEST LOG

  //
  // At which point we still have potential exponents before prefix operators.
  // BUT all remaining exponents have lower precedence than the prefix operators that follow them. They still have higher precedence than the prefix operators that precede them.
  // To deal with this, we will scan from right to left again:
  //   When we run into an exponent, find the expression to it's right
  //   Evaluate the expression to it's right and replace
  //   Exponent is now between two numbers (with the exception of syntax errors)
  //   Evaluate the exponent
  // This we we evaluate only the last exponent's following expression
  // Repeat the second scan until there are no exponents remaining.
  //
  // EVALUATE ALL OTHER EXPONENTS ---------------------------- THE BETTER WAY TO DO THIS IS TO ADD MORE EXPRESSION VALIDATION AROUND PREFIX OPERATORS.
  // First, we need to evaluate the prefix operators that follow exponent operators.
  // for (let i = tempReferenceExpression.length - 1; i >= 0; i--) {
  //   console.log(
  //     'Evaluating prefix operators that follow exponent operators. tempExpression = ',
  //     tempExpression
  //   ) // TEST LOG
  //   const token = tempReferenceExpression[i]
  //   const precedingToken = tempReferenceExpression[i - 1]
  //   if (token === 'operatorToThe') {
  //     // An exponent operator, which at this point can only be one that is preceded by a prefix operator.
  //     // All brackets are now single numbers (for testing purposes this is 1), and there are no brackets left, so no nesting.
  //     // So we know that the expression to evaluate is the two tokens following the exponent operator.
  //     const subPrefixExpression = [
  //       tempReferenceExpression[i + 1],
  //       tempReferenceExpression[i + 2],
  //     ]
  //     const evaluatedSubExpression =
  //       evaluatePrefixOperators(subPrefixExpression)
  //     tempExpression.unshift(raiseTo(precedingToken, evaluatedSubExpression))
  //   } else {
  //     // Is not an exponent operator, but might be it's operand.
  //     if (
  //       tempReferenceExpression[i - 2] === 'operatorToThe' ||
  //       tempReferenceExpression[i - 1] === 'operatorToThe'
  //     ) {
  //       // Is preceded by an exponent operator. In which case, don't push it's value, as it will be handled in latter iterations when we reach the operator.
  //       continue
  //     } else {
  //       // Is not preceded by an exponent operator. Add it's value
  //       tempExpression.unshift(token)
  //     }
  //   }
  // }

  //
  //
  //
  return tempExpression
}

function evaluatePrefixOperators(expression) {
  console.log('evaluatePrefixOperators called with ', expression) // TEST LOG
  const tempExpression = []
  return tempExpression
}

function evaluateDivision(expression) {
  console.log('evaluateDivision called with ', expression) // TEST LOG
  const tempExpression = []
  return tempExpression
}

function evaluateMultiplication(expression) {
  console.log('evaluateMultiplication called with ', expression) // TEST LOG
  const tempExpression = []
  return tempExpression
}

function evaluateAddition(expression) {
  console.log('evaluateAddition called with ', expression) // TEST LOG
  const tempExpression = []
  return tempExpression
}

function evaluateSubtraction(expression) {
  console.log('evaluateSubtraction called with ', expression) // TEST LOG
  const tempExpression = []
  return tempExpression
}
