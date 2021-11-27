let inputs = [
  ' 1.2.3.5',
  '127.1.1.0',
  '555.1.1.1',
  '001.11.001.1',
  'bob.ddd.ddd',
  '-0.0.0.0',
  '111.44.55.3'
]

function isValidIP(str) {
  let numbersArray = str.split('.')
  
  if (numbersArray.length !== 4) return false;
  for (let num of numbersArray){
    if (/^\d+$/.test(num) == false) return false;
    if (num.length > 1 && num[0] === '0') return false;
    if (!(Number(num) >= 0 && Number(num) <= 255)) return false;
  }
  return true;
}

for (let IP of inputs){ 
  console.log(isValidIP(IP))
}
