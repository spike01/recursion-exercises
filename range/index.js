export default function range(start, end) {
  if (end - start < 2) {
    return [];
  } else {
    return [start + 1].concat(range(start + 1, end))
  }
}
