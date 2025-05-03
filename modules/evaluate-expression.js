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
  console.log(
    'Will evaluate expression. Function to be written. expression = ',
    expression
  ) // TEST LOG
  //
  //
  //
  //
  //
  // DECLARE A TEMPORARY VARIABLE TO MANIPULATE THROUGHOUT THIS FUNCTION
  let tempExpression
  // CHECK IF BRACKET NESTING IS VALID
  if (!bracketNestingIsValid(expression)) {
    return undefined // CHANGE IN FUTURE WHEN HANDLING ERRORS - for now it's undefined as this is an important error to address while writing the code.
  }
  // EVALUATE INNERMOST BRACKETS FIRST
  while (hasBrackets(expression)) {
    // Has brackets, call the evaluateFirstSubExpression() function,
    // which will run this function on a smaller part of it, skipping the bracket logic. It returns the full expression with the innermost bracket evaluated.
    // Continue doing this until there are no brackets (at which point the function will move on to the evaluation logic that evaluateFirstSubExpression uses, for the main expression.)
    console.log(
      'expression ',
      expression,
      ' has brackets. Will evaluate first subexpression.'
    ) // TEST LOG
    tempExpression = evaluateFirstSubExpression(expression)
    //
    //
    break // IMPORTANT NOTE: THIS IS TEMPORARY SO THAT MY COMPUTER DOESN'T CRASH WHILE TESTING BEFORE I FINISH THE FUNCTION. EVENTUALLY IT WILL BE REMOVED, BUT WITH POTENTIAL SAFETY NETS IN PLACE FOR SYNTAX ERRORS, ETC.
    //
    //
  }
}

// -- SUB FUNCTIONS --  //

// CHECKS //

function hasBrackets(expression) {
  for (const token of expression) {
    if (token === 'bracketLeft' || token === 'bracketRight') {
      return true
    }
  }
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
  const evaluatedSubExpression = evaluateExpression(subExpression)
  // We now have the evaluated subexpression (we will, once evaluateExpression written)
  // need to insert this in the entire expression in place of the brackets.
  const updatedExpression = []
  for (let i = 0; i < leftBracketIndex; i++) {
    updatedExpression.push(expression[i])
  }
  for (const token of updatedExpression) {
    updatedExpression.push(token)
  }
  for (let i = rightBracketIndex + 1; i < expression.length; i++) {
    updatedExpression.push(expression[i])
  }
  return updatedExpression
}
