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

export function count(string: string): { [char: string]: number } {
  let map: { [char: string]: number } = {}
  for (let s of string) {
    map[s] = (map[s] || 0) + 1
  }
  return map
}
