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
  return ['resolvedBracketPlaceholder'] // REMOVE PLACEHOLDER, FOR NOW I'M TREATING ALL BRACKETED EXPRESSIONS AS EVALUATING TO 1
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
  console.log('evaluateExponents called with expression', expression) // TEST LOG
  // REPEAT EVERYTHING WHILE EXPRESSION HAS EXPONENTS
  let tempExpression = expression
  let tempHoldingArray = []
  let hasExponents = true
  while (hasExponents) {
    // CHECK FOR EXPONENTS AND BREAK IF NONE
    hasExponents = false
    for (const token of tempExpression) {
      if (token === 'operatorToThe') {
        hasExponents = true
        break
      }
    }
    if (!hasExponents) {
      break
    }
    // FUNCTION HAS EXPONENTS, RESOLVE FIRST EXPONENT FROM RIGHT TO LEFT
    let lastExponentIndex
    for (let i = tempExpression.length; i >= 0; i--) {
      if (tempExpression[i] === 'operatorToThe') {
        lastExponentIndex = i
        break
      }
    }
    // We now have the lastExponentIndex
    // PUSH NEW EXPRESSION WITH RESOLVED EXPONENT INTO tempHoldingArray
    for (let i = 0; i <= lastExponentIndex - 2; i++) {
      tempHoldingArray.push(tempExpression[i])
    }
    const leftOperand = tempExpression[lastExponentIndex - 1]
    const rightOperand = tempExpression[lastExponentIndex + 1]
    tempHoldingArray.push(raiseTo(leftOperand, rightOperand))
    for (let i = lastExponentIndex + 2; i < tempExpression.length; i++) {
      tempHoldingArray.push(tempExpression[i])
    }
    // We now have tempHoldingArray, the expression with theh last exponent resolved
    // Reassign values as needed to restart the while loop
    tempExpression = tempHoldingArray
    tempHoldingArray = []
  }
  // After the while loop breaks, return tempExpression
  return tempExpression
}

function evaluatePrefixOperators(expression) {
  // As prefix operators all open a pair of brackets for their operands,
  // And we've already written the code to solve brackets in order,
  // There can be no nesting of prefix operators.
  // All prefix operators will have a single operand, a number. They all have the same precedence, as they take a single number operand
  // Scan from left to right, evaluating all prefix operators until none remain.
  // Return the new array.
  console.log('evaluatePrefixOperators called with ', expression) // TEST LOG
  const tempExpression = []
  let operator
  let operand
  const prefixOperations = {
    operatorSin: () => sinOf(operand),
    operatorSinInverse: () => inverseSinOf(operand),
    operatorCos: () => cosOf(operand),
    operatorCosInverse: () => inverseCosOf(operand),
    operatorTan: () => tanOf(operand),
    operatorTanInverse: () => inverseTanOf(operand),
    operatorLog: () => logOf(operand),
    operatorLogNatural: () => naturalLogOf(operand),
    operatorThRootOf: () => thRootOf(operand),
    operatorSqrt: () => sqrtOf(operand),
  }
  for (let i = 0; i < expression.length; i++) {
    if (bracketOpeners.includes(expression[i - 1])) {
      // We have just passed a prefix operator which is at the top of the tempExpression "Stack"
      operand = expression[i]
      operator = tempExpression.pop()
      tempExpression.push(prefixOperations[operator]())
    } else {
      // We haven't just passed a prefix operator,
      // We may be on the prefix operator or any unrelated value
      tempExpression.push(expression[i])
    }
  }
  console.log('evaluatePrefixOperators resulted in ', tempExpression) // TEST LOG
  return tempExpression
}

// The following four functions are for evaluating basic infix operators, and are called in the BEDMAS order.
// They take two operands

function evaluateDivision(expression) {
  console.log('evaluateDivision called with ', expression) // TEST LOG
  // Create "stack"
  const tempExpression = []
  let leftOperand
  let rightOperand
  // Use "stack"
  for (let i = 0; i < expression.length; i++) {
    if (expression[i - 1] === 'operatorDivide') {
      // We've just passed a division operator
      tempExpression.pop()
      leftOperand = tempExpression.pop()
      rightOperand = expression[i]
      tempExpression.push(divide(leftOperand, rightOperand))
    } else {
      tempExpression.push(expression[i])
    }
  }
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
