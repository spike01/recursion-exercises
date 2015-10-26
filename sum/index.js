export default function sum(...numbers) {
  if (numbers.length === 2) {
    return numbers[0] + numbers[1];
  } else {
    return numbers[0] + sum(numbers.slice(1));
  }
}

