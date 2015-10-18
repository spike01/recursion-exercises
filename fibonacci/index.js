export default function fibonacci(number) {
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1]
  } else {
    let previousFib = fibonacci(number - 1)
    let prevFibLength = previousFib.length
    let prevTwoFibs = previousFib[prevFibLength - 1] + previousFib[prevFibLength - 2]
    return previousFib.concat(prevTwoFibs)
  }
}
