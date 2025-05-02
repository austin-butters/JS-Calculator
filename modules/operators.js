// operators.js

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
// Note: *e^ and *10^ will be divided into individual operations so functions for them aren't nessicary

export function raiseTo(num1, num2) {
  return num1 ** num2
}

export function thRootOf(num1, num2) {
  return num2 ** (1 / num1)
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
  }
}

// PREFIX OPERATORS //
// sin
// cos
// tan
// sin-1
// cos-1
// tan-1
// log
// ln
// sqrt

import { currentSettings } from './apply-setting.js'

export function sinOf(num) {
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
