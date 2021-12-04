// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

function isPP(a){
    let x = 2;
    let n = 2;
    const y = a;

    while (x * x <= y){
        while (x ** n <= y){
            console.log('x:', x, "n:", n)
            if (x ** n === y){
                return [x, n];
            }
            x++
        };
        n++
        if (2 ** n <= y) x = 2
        else return null
    };
    return null; // fix me
  }

// console.log('4:', isPP(4));
// console.log('9:', isPP(9));
// console.log('5:', isPP(5));
// console.log('100:', isPP(100));
console.log('146:', isPP(146));