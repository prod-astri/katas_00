// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
    let str = ''
    let uniques1 = uniqueLowerCase(s1)
    console.log(uniques1)
    return `${uniques1}`;
}
const regex = new RegExp('/h\\b');

function uniqueLowerCase(string){
  return [...(new Set (string.split('')))].filter(el => 'qwertyuiopasdfghjklzxcvbnm'.includes(el))
}

console.table(mix("Are they here", "yes, they are here"))
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix("looping is fun but dangerous", "less dangerous than coding")) 
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"