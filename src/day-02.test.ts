import { checksum, commonLetters, input } from './day-02'

test('part one example', () => {
  expect(
    checksum(
      [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab',
      ].join('\n')
    )
  ).toEqual(12)
})

test('part one answer', () => {
  expect(checksum(input)).toEqual(6972)
})

test('part two example', () => {
  let exampleInput = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`
  expect(commonLetters(exampleInput)).toEqual('fgij')
})

test('part two solution', () => {
  expect(commonLetters(input)).toEqual('aixwcbzrmdvpsjfgllthdyoqe')
})
