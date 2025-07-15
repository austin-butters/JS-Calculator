import { initialize } from './modules/initialize.js'
import { runTests } from './modules/test.js'

window.onload = (event) => {
  initialize()
  runTests() // REMOVE
}
