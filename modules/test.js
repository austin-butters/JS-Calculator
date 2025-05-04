import { evaluateExpression } from './evaluate-expression.js'

export function runTests() {
  console.log('runTests() module called.')
  evaluateExpression(['num0', 'operatorPlus', 'operatorLog', 67.4])
  evaluateExpression([
    'num0',
    'operatorPlus',
    'operatorLog',
    67.4,
    'operatorPlus',
    'operatorSin',
    90,
  ])
}
