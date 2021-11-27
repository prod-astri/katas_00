function isValidIP(str) {
  return false;
}

let inputs = [
  ['1.2.3'],
  ['127.1.1.0']
]

for (let IP of inputs){ 
  console.log(isValidIP(IP))
}
