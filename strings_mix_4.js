// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  const lowerS1 = lowerCaseLetters(s1);
  const lowerS2 = lowerCaseLetters(s2);
  const allLetters = new Set (lowerS1.concat(lowerS2))
}

function lowerCaseLetters(string){
  // returns an array
  return string.split('').filter(el =>
    'qwertyuiopasdfghjklzxcvbnm'.includes(el)).sort()
}

console.log(mix('bbbbaaccddeeeeaaaaaa', 'bbccccddddeeeeffff'));
console.log(mix('Are they here', 'yes, they are here'));
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"