import { count } from './utils'
import * as assert from 'assert'

export function checksum(input: string): number {
  let counts = input.split('\n').reduce(
    (dict, str) => {
      let countSet = new Set(Object.values(count(str)))
      if (countSet.has(2)) {
        dict[2]++
      }
      if (countSet.has(3)) {
        dict[3]++
      }
      return dict
    },
    { 2: 0, 3: 0 }
  )
  return counts[2] * counts[3]
}

export function commonLetters(input: string): string {
  let ids = input.split('\n')
  let smallestDiff = Number.MAX_VALUE
  let diffTuple: [string, string] = ['', '']
  for (let [a, b] of product(ids, ids)) {
    let diff = countDifferences(a, b)
    if (diff < smallestDiff) {
      smallestDiff = diff
      diffTuple = [a, b]
    }
  }
  return buildCommonString.apply(null, diffTuple)
}

function* product<T>(a: T[], b: T[]): IterableIterator<[T, T]> {
  let seen = new Set<T>()
  for (let i of a) {
    for (let j of b) {
      if (seen.has(j) || i === j) {
        continue
      }
      yield [i, j]
      seen.add(i)
    }
  }
}

function countDifferences(left: string, right: string): number {
  assert.ok(
    left.length === right.length,
    'Input strings must be the same length'
  )
  let n = 0
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i]) {
      continue
    }
    n++
  }
  return n
}

function buildCommonString(left: string, right: string): string {
  let output = ''
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i]) {
      output += left[i]
    }
  }
  return output
}

export const input = `auxwcbzrmdvpsjfgkrthnkioqm
auxwcbzrmdvpsjfgbltonyijqe
auxwcbzrmdfpsefgklthnoioqe
auxwcbzrmdvpsjfgkluhnjisqe
auxwcbzrmdvesjfgdzthnyioqe
auxwcbzrmdvhsjfgklthnmijqe
auxwcbzridvpsjfgkltxeyioqe
ayxwcbzrgdvpsjfgklthiyioqe
ajxwcbzrmdvpsjfgklkhnyiode
auxwcbcrmdvpsjfqelthnyioqe
auxwcbzrmsvpsjsgklthnyiope
auxwcbzrmqvpsjzgklghnyioqe
auxwcbzrmdvpsjtqklthxyioqe
auxwcbzrmdopsjfdklthncioqe
auxwcbzrmdvpsjfgkltmhyfoqe
aixwcbzrmdvpsjfgllthdyeoqe
vuxicbzrmdepsjfgklthnyioqe
auxwcbbxmdkpsjfgklthnyioqe
auxwcbzrgdvpsofaklthnyioqe
auxycbzrmdvpsjfgklthnyuose
aujwcbzrmdvprjfgkltcnyioqe
auxwgbzrmdvpsjfgyzthnyioqe
auxwcbzrmavpsjfgkltsnyiome
auxwcbgrmdvpsjfgkdthnrioqe
kuxwcbzrmdvpsyfgklthnyioue
auxwcbzomdvpjdfgklthnyioqe
auxwcbzrmdppsjfgklthvyifqe
aunwubzrmdvpsjrgklthnyioqe
auxwcbzrmoipsjfgklbhnyioqe
auxwdbzrmdvpsjfgmlthnyioce
auxwcbzjmsvpsjfiklthnyioqe
auxwcbzrmwcpsjfcklthnyioqe
auxwcbzfmdvprjfhklthnyioqe
auxdcbzrgdvpsjfgklthnyxoqe
wuxwbbzrmdvpsjfgklthnyiote
auowcbjrmdvpsjfgklthnyfoqe
auxwsbzrmdvpsjfglltcnyioqe
quxwcbzrmdvpkjfgklthnyioqt
vuxwcbzrudvpsjfgklthnyioqi
puxwcbzrmdvgsjfgklthncioqe
luxdcbzrmdvpsjfgkothnyioqe
auxwcbzrmdvpsjfyklthfhioqe
auxwcbqrmdvpsjfgkldhnyiote
quxwcbzrmlvpsjfgklthnyioqi
auxwcbzgmdvpsjfoklthnyiuqe
auxwcbzrmdvpsbfgkltdjyioqe
auxwcbzsmdrpsjfgklthpyioqe
auxwcbzrmfvpsjfwklthnyiote
auxbkpzrmdvpsjfgklthnyioqe
auxwcbzrddvpsjfsklthnyroqe
abxwcbzrmdvpsjfgkltdnyivqe
awxwcbzrmvvpsjfgklthngioqe
auxwcbzrmkvgsjfgkltcnyioqe
auxwcbammdvpsjfgklthpyioqe
auxwcbhrmdvpsjfgtlthnuioqe
auxwcpzrmdvpbjogklthnyioqe
auxwcbzrmdvpslfgklbhkyioqe
auxwcbsrmdvpjjfgkldhnyioqe
auxwcbzrmdqpsjfgauthnyioqe
ydxwcbxrmdvpsjfgklthnyioqe
auxwcbzrmdvpejfgklthnyyofe
auxwchzrmxvpsjfgklthnyioqh
auxwcbzrtdvpsjfgklxhnzioqe
auxwcbyrmdvpsnfgklnhnyioqe
auxwcbzrcdvpsjugklihnyioqe
auxwcbzrddvpsjfgklhhnyiaqe
aumwtbzrmdvpsjfgklthnyitqe
auxucbzrmdvpsjfgklthwfioqe
auxwcbzrmdvpzmfgkllhnyioqe
auxwcbzrmdvpsjhgklthntiome
buxwzbzrmdvpszfgklthnyioqe
ouxwcbzsgdvpsjfgklthnyioqe
auxwcbzrmdvpsjfskltgnyioqz
auxwcbbrmdvpsjftklthnyioqu
quxocbzrmdvpsjfgklthfyioqe
acxwcbzrmdvpsjfgklfhnrioqe
auxwcbzrmdnpsjfrkjthnyioqe
wuxwybzrmdwpsjfgklthnyioqe
auxwgbxrmdvpsjfghlthnyioqe
atxwcbzrmdvnsjfgklthnyjoqe
acxwcbzmmdvpsjfbklthnyioqe
auxhcbzrmdvbsjbgklthnyioqe
auxwlbzrfdvpsjfgxlthnyioqe
auxwmbzrmdfpsjqgklthnyioqe
auxwcbzrmdvpsgfgklahnyigqe
auxwgbzrmdvpsjfgzldhnyioqe
auxwcbzrmdvpydfgklthnyiohe
auxwxbzrmdvpsjfsklchnyioqe
auxqcbzrmdvpsjfgqlthnyiwqe
auxwcozrmdvssbfgklthnyioqe
auxvcczrmdvpsufgklthnyioqe
auxwcbzrudvpsjfgklyhnyioxe
aulwcbzrmdvpsjqgknthnyioqe
auukcbzrmdvpsjfgklthtyioqe
auxwcszimdvpsjfgklthnyigqe
juxwcbzrbdvpsjfgklthnyboqe
auxwcbzrmdvpjofgklthnyioqj
auxwcbzrmdvpsjfgplfhnyione
auxwcbzrmdhpsjfgkltknyeoqe
luxwcqzrmdvpsjfgklthnbioqe
uuxwcbzrmdvpsjfgkithnyiiqe
auxwcbzrmdvpdjfgkrthnyeoqe
auuwcbnrmdvpsjfgklthnjioqe
auxwcnzrmdvpsjvgklthnyooqe
auxwcbzcmdvpsjfcklthnyiose
auxwcbzrldfpsjfgklthjyioqe
auxwcizrmdvpsjfjklthnymoqe
auxwcbtrmdvpsjfgtlphnyioqe
amxwcbzrmdvksjfgklthnyiove
auxwcbzrmdvpszfgkpthnyiuqe
auxwcbzrmdvxdjfgkltqnyioqe
auxwcbzrudvpsjfgklthnymiqe
auxwcbirmdvfsjfgklmhnyioqe
auwwcbzrndvprjfgklthnyioqe
auxwcbormdgpsjfgklbhnyioqe
auxwabzrmdupsjfgklthnyioqt
auxvcbzrmdvpsjfgkltrmyioqe
auxwcbzrmddpsjfsklthnyizqe
auxwcczrmuvpyjfgklthnyioqe
auxwcczrmdvpsnfgkpthnyioqe
auxkcbzrmdvpsjfhklihnyioqe
auxwcbzrmdvpsjfgklthnkijje
auxwcbzcmdvpsjpgkldhnyioqe
auxwcnzrudvpstfgklthnyioqe
xuxwcbzrgdvusjfgklthnyioqe
aaxwcbzrmdvpsjvgklthnyidqe
auxwcbztmdvpsjfgklthnyhqqe
auxwcbzrmfvpsjfgklthnyilfe
auxwcbzrmdvksjfgklthjyioqq
auxwcbzrmdzksjfgktthnyioqe
auxwcbzrmfvpszfgklohnyioqe
auxwckzamdvpsjfgklthnyioqs
auxwcmzrhdvpsjfaklthnyioqe
fuxwcbzrmdapsjfgklrhnyioqe
avxwxbzrmdvpsjfgklthniioqe
auxwubzrmevpsjfgkltpnyioqe
fuxwcbzrgdvpsjfgklhhnyioqe
duxwwbdrmdvpsjfgklthnyioqe
audwcbzrmdvpnjcgklthnyioqe
auxtcbzrmdvpsjmgklthnyyoqe
aucwcbwrmdepsjfgklthnyioqe
auxwcbzrudvpsjfpklthnyiose
auxwcbzridvpsjfsklthxyioqe
auxtcbzrmdvpscfgklyhnyioqe
auxwcbzrmdvppjfgklthnyivee
auxwdbzrmuvpskfgklthnyioqe
auxwubzrmdvosjfgklthnyiope
auxwcbzrmhnpsjfgklthnyimqe
auxwcbzrmdqpwjfgkltpnyioqe
auxwcbormdvpsjljklthnyioqe
auxwcbzrmdjpsjfgkltjpyioqe
auxwcbzrmdvpszfgklthkyizqe
auxwcbzighvpsjfgklthnyioqe
auxwcbzrmdlpsjfgcythnyioqe
auxwcbzumdvpsjflklthnyimqe
pdxwcbzrmdvpsjfgklthnyihqe
auxwcbzrsdvpsjfgklhhvyioqe
auxwcfzamdvpsjfgkmthnyioqe
aexwcdzrmdvpsjogklthnyioqe
auxxcbkrmavpsjfgklthnyioqe
auxwcbzredvssjfgklthryioqe
aupwqbzrmdvpsjfgklthnyioqc
auxwcbzrmdvpkcagklthnyioqe
auxwcbzrmdvwsbfgklthnlioqe
aunwcbzxmdvhsjfgklthnyioqe
auxwcbzrhddpsjfgklthnnioqe
ouxwcbzrmdvtsifgklthnyioqe
auxwcbzrmdqpsjfgklthnyfoqp
auxwrbzrhdvpsjfgolthnyioqe
auxwcbcqmdvpsjugklthnyioqe
auxwcbzrqdvpsjhgklthnjioqe
auxmcbzrmdvpsjfgmlthnyjoqe
auxwcbzrmdvpsjfgzlthnycoqv
auswcbzrmdvpsffgslthnyioqe
auxwcbzrfdvpsjfrmlthnyioqe
auxwcbzrmdvpsjngzlthnxioqe
auxwcbzrmdvpsjfuqlthnyiyqe
auxwzbzrrdvosjfgklthnyioqe
auxwcbzdmdvpsjfikxthnyioqe
guxwcbzrmdvpsjfgmlthnytoqe
auxwcbzrmdvpspfgkytenyioqe
auxvcbzrldvpsjfgklthnyhoqe
auxwcbzrmavpckfgklthnyioqe
autwcbzrmdvpsafgklthnyirqe
auxwcbzrxuvpsjfgklthmyioqe
auxwcbarmdppsjfgklthnywoqe
anxvcbzrmdvpsjfgklthnyijqe
auxwcbwrmdapsjngklthnyioqe
abxwcbzrmdvpsjugkltgnyioqe
auxwcbtrmdvpsjfgkltunyioue
aujwcbzrmovpsjfgklthryioqe
auxwcbzrydvpsjfgklthndikqe
auxwcbzrmdvpsjfgklmrnyioqo
auxwcbzrddvpsjfggithnyioqe
auxwcbzrmdvpfjfaklthlyioqe
fuxtcbzrmdvpsjfgklwhnyioqe
tuxwcbzrjdvpsjfgjlthnyioqe
auxwcbzrmdppsofgklthnyfoqe
auxvclzamdvpsjfgklthnyioqe
auxwcbzrmdvpsjfdklhhnzioqe
auxwcbzrmsvpsvdgklthnyioqe
arxfcbzrmdvpsvfgklthnyioqe
auxzcbzrmdvpsjfgklthnhioqj
auxwcbzrrdvpsjfgpltunyioqe
auxuibzrmdvpwjfgklthnyioqe
auxwcbzrwdqpsjfgklthnyooqe
aujwcbzrmdvpsjvgklthxyioqe
abxwcbzrmfvpsjfgklthnyxoqe
aurwcbzrmdvpshfgklthnyhoqe
auxwcbzjmdvpsjfgknthnycoqe
auxwcbzrmdvpsjfgklmhxwioqe
auxwcbzrmfvpsjfgklthnyiorq
auxwcbormdvpsjfgklwhnlioqe
auxwctzrmdvpsjfgklcknyioqe
awxwcbzrmdvpsjfgvlthnyiome
auxwcbzrmdvpsjfjklthnyixje
auxwcsxrmdvpsjfgkltsnyioqe
auxbmbzrmdvpsjfgklthnyioce
auxwcbzrmdvpsjfukzthnytoqe
aixwcbzrmdvpsjfgllthdyioqe
auxwcbzrmdypsjfgklthnlioqy
auxccbzrmdvpsjfgkltrnnioqe
auxwcznrmdvpsjfgklthnykoqe
auxwmqzrmdvpsjfgilthnyioqe
auxwcbzrmdvpdyfgolthnyioqe
auxwcbzrmdvpsjfgkmohnqioqe
auxwcfzrmzvpsjfoklthnyioqe
auxwjyzrmdvpsjfgulthnyioqe
auxwcgzredvpsjfgkxthnyioqe
wuxwcbtrmdvpsjfgklthnyiofe
auxwcbzrmdopsgfgklthncioqe
auxmcbzjmdvpsjfgklbhnyioqe
auxwlbzrmdvpsjffklthgyioqe
auxwcbzrmrvpsjfgqlthtyioqe
kuxwhbzrmdvpsjfgklthgyioqe
auxwcozrmdgpsjfgklthnydoqe
auxwdbzrmdvpdjfgklthgyioqe
auxwqbzrmdapsvfgklthnyioqe
auqwcbzridvjsjfgklthnyioqe
auxwckzrmdvpsjfoklthnyuoqe
auxwcbzvmdvpsjfgklghnyiome
auxtcbzrmdvpsjqgktthnyioqe
auxwcbzrmdvesjfgkljhnnioqe
auxwcbzrmpvpsqfgklthnqioqe
auxwcbzrmdcpsqfgklthnzioqe
yuxwcbzrmdvpsjggklthnlioqe
auxwcbzradvpsjftklthoyioqe
auxwcbzrmdvjujfgklmhnyioqe
auxwcbzrmdvpsrfgklpinyioqe
auxwobzrvqvpsjfgklthnyioqe`
