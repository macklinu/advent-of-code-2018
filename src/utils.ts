export function* cycle<T>(array: T[]): IterableIterator<T> {
  let i = 0
  let length = array.length
  while (true) {
    yield array[i++]
    if (i === length) {
      i = 0
    }
  }
}
