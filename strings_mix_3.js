// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  let str = '';
  let solutionArray = [];
  let uniques1 = uniqueLowerCase(s1);
  let uniques2 = uniqueLowerCase(s2);
  let common = uniques1.filter(letter => uniques2.includes(letter));
  console.log(uniques1)
  
  return `${str}`;
}

function uniqueLowerCase(string) {
  // could be regex
  // returns an array
  return [...new Set(string.split(''))].filter(el =>
    'qwertyuiopasdfghjklzxcvbnm'.includes(el)
  ).join('')
}

// console.table(mix('Are they here', 'yes, they are here'));
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"