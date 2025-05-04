// operators.js

// STILL NEED TO ADD ERROR HANDLING

// BASIC OPERATORS //
// Add
// Subtract
// Multiple
// Divide

export function add(num1, num2) {
  return num1 + num2
}

export function subtract(num1, num2) {
  return num1 - num2
}

export function multiply(num1, num2) {
  return num1 * num2
}

export function divide(num1, num2) {
  return num1 / num2
}

// OTHER INFIX OPERATORS //
// Note: *e^ and *10^ could be divided into individual operations so functions for them aren't nessicary, but it's quicker to keep them together.

export function raiseTo(num1, num2) {
  return num1 ** num2
}

export function thRootOf(num1, num2) {
  return num2 ** (1 / num1)
}

export function timesTenToThe(num1, num2) {
  return num1 * 10 ** num2
}

export function timesEToThe(num1, num2) {
  return num1 * Math.E ** num2
}
// POSTFIX OPERATORS //

export function convertToPercent(num) {
  return num / 100
}

export function factorialOf(num) {
  if (Number.isInteger(num) && num >= 0) {
    if (num === 0) {
      return 1
    } else {
      let temp = 1
      for (let i = 1; i <= num; i++) {
        temp *= i
      }
      return temp
    }
  } else {
    return // ADD ERROR HANDLING
  }
}

export function squared(num) {
  return num ** 2
}

// PREFIX OPERATORS //

import { currentSettings } from './apply-setting.js'

export function sinOf(num) {
  // THE DEG AND RAD SETTINGS ARE OFF.
  return currentSettings.isRadians
    ? Math.sin(num)
    : radToDeg(Math.sin(degToRad(num)))
}

export function cosOf(num) {
  return currentSettings.isRadians
    ? Math.cos(num)
    : radToDeg(Math.cos(degToRad(num)))
}

export function tanOf(num) {
  return currentSettings.isRadians
    ? Math.tan(num)
    : radToDeg(Math.tan(degToRad(num)))
}

export function inverseSinOf(num) {
  const resultInRadians = Math.asin(num)
  return currentSettings.isRadians ? resultInRadians : radToDeg(resultInRadians)
}

export function inverseCosOf(num) {
  const resultInRadians = Math.acos(num)
  return currentSettings.isRadians ? resultInRadians : radToDeg(resultInRadians)
}

export function inverseTanOf(num) {
  const resultInRadians = Math.atan(num)
  return currentSettings.isRadians ? resultInRadians : radToDeg(resultInRadians)
}

export function logOf(num) {
  return Math.log10(num)
}

export function naturalLogOf(num) {
  return Math.log(num)
}

export function sqrtOf(num) {
  return Math.sqrt(num)
}

// CONVERSIONS //
function radToDeg(num) {
  return num * (180 / Math.PI)
}
function degToRad(num) {
  return num * (Math.PI / 180)
}
