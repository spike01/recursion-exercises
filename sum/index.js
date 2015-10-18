export default function sum() {
  if (arguments.length === 1) {
    return arguments[0]
  } else {
    return arguments[0] + sum.apply(this, Array.prototype.splice.call(arguments, 1))
  }
}

