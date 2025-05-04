import { evaluateExpression } from './evaluate-expression.js'

export function runTests() {
  console.log('runTests() module called.')
  evaluateExpression([0, 'operatorPlus', 'operatorLog', 67.4])
  evaluateExpression([
    0,
    'operatorPlus',
    'operatorLog',
    67.4,
    'operatorPlus',
    'operatorSin',
    90,
  ])
}
