const a1 = ["arp", "live", "strong", 'arp', 'xxx']
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
    return [...new Set(array1.filter(substr => {
      for (let str of array2){
        if (str.includes(substr)) return true;
      }
      return false;
    }).sort())]
  }

console.log(inArray(a1, a2))