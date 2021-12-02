// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  let str = '';
  let solutionArray = [];

  let uniques1 = uniqueLowerCase(s1);
  let uniques2 = uniqueLowerCase(s2);

  console.log('U1', uniques1)
  console.log('U2', uniques2)

  let common = [...uniques1].filter((letter, index) => {
    let i = [...uniques2].indexOf(letter)
    if (i !== -1) {
      uniques1.splice(letter.indexOf(), 1);
      uniques2.splice(i, 1);
      return true;
    }
    return false;
  });
  
  console.log('U1', uniques1)
  console.log('U2', uniques2)
  console.log('C', common)

  for (let letter of common) {
    let repeatsS1 = [...s1].filter(l => l === letter);
    let repeatsS2 = [...s2].filter(l => l === letter);
    const l1 = repeatsS1.length;
    const l2 = repeatsS2.length;
    if (l1 > 1 && l1 > l2) solutionArray.push(`1:${repeatsS1.join('')}`)
    else if (l2 > 1 && l2 > l1) solutionArray.push(`2:${repeatsS2.join('')}`)
    else if (l1 > 1 && l1 === l2) solutionArray.push(`=:${repeatsS1.join('')}`)
  }


  solutionArray = solutionArray.concat(
    generateString(uniques1, s1, 1)
  ).concat(
    generateString(uniques2, s2, 2)
  ).sort((a, b) => {
    if (b.length < a.length) return -1
    else if (a.length === b.length) {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1
      } else {
        if (b[2] > a[2]) {
          console.log('hi')
          return -1;
        } else return 0
      }
    }
  });

  console.log('S', solutionArray)
  str = solutionArray.join('/')
  return `${str}`;
}

function generateString(lettersArr, string, prefix) {
  let arr = [];
  for (let letter of lettersArr) {
    let repeats = [...string].filter(l => l === letter);
    if (repeats.length > 1) arr.push(`${prefix}:${repeats.join('')}`);
  }
  return arr;
}

function uniqueLowerCase(string) {
  // could be regex
  // returns an array
  return [...new Set(string.split(''))].filter(el =>
    'qwertyuiopasdfghjklzxcvbnm'.includes(el)
  )
}

// console.log(mix('aaaaaabbbbaaccddeeee', 'bbccccddddeeeeffff'));
console.log(mix('Are they here', 'yes, they are here'));
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"