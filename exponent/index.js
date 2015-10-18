export default function exponent(power, base) {
  if (power === 1) {
    return base
  } else {
    return exponent(power - 1, base * base)
  }
}

