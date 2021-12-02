// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  const lowerS1 = lowerCaseLetters(s1);
  const lowerS2 = lowerCaseLetters(s2);
  
  const common = [...new Set(lowerS1.filter(l => lowerS2.includes(l)))]
  const uniqueS1 = [...new Set(lowerS1.filter(l => !common.includes(l)))]
  const uniqueS2 = [...new Set(lowerS2.filter(l => !common.includes(l)))]

  const sequenceS1 = uniquesSequence(uniqueS1, lowerS1, '1')
  const sequences2 = uniquesSequence(uniqueS2, lowerS2, '2')
  const commonSequences = commonSequence(common, lowerS1, lowerS2)

  let solutionArr = commonSequences.concat(sequenceS1.concat(sequences2))

  const res = sortSequence(solutionArr).join('/')
  return res;
}

function sortSequence(array) {
  return array.sort(
  ).sort((a, b) => b.length - a.length
  ).sort((a, b) => {
    if (a.length === b.length && a[0] === b[0]) {
      if (b[3] > a[3]) return -1
      else if (b[3] < a[3]) return 1;
    } else return 0;
  })
}

function commonSequence(letters, arr1, arr2) {
  let arr = [];

  for (let letter of letters) {
    let incidenceS1 = arr1.filter(l => l === letter)
    let incidenceS2 = arr2.filter(l => l === letter)
    if (incidenceS1.length > incidenceS2.length) arr.push(`1:` + incidenceS1.join(''))
    else if (incidenceS1.length < incidenceS2.length) arr.push(`2:` + incidenceS2.join(''))
    else arr.push('=:' + incidenceS1.join(''))
  }
  return arr.filter(el => el.length > 3);
}

function uniquesSequence(letters, sentence, marker) {
  let arr = []
  for (let letter of letters) {
    arr.push(`${marker}:${sentence.filter(l => l === letter).join('')}`)
  }
  return arr.filter(el => el.length > 3)
}

function lowerCaseLetters(string) {
  return string.split('').filter(el =>
    'qwertyuiopasdfghjklzxcvbnm'.includes(el)).sort()
}


console.log(mix('bbbbaaccddeeeeaaaaaa', 'bbccccddddeeeeffff'));
console.log(mix('Are they here', 'yes, they are here'));
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"