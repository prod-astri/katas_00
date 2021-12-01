// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
    let str = ''
    let mainArray = []
    const s1Array = s1.split('');
    const s2Array = s2.split('');
    const s1Uniques = toUniques(s1Array)
    const s2Uniques = toUniques(s2Array)
    const uniques = [...new Set([...s1Uniques, ...s2Uniques])].sort()
    const s1Sequences = toSequence(s1Uniques, s1);
    const s2Sequences = toSequence(s2Uniques, s2);
    const sequences = [...new Set([...s1Sequences, ...s2Sequences])].sort((a, b) => b.length - a.length)
    console.log('s1Sequences', s1Sequences);
    console.log('uniques', uniques)
    console.log('sequences', sequences)
    let finalArray = sequences.sort().filter(el => el.length > 1).filter((seq, i, arr) => {
        if (i > 0 && arr[i][0] == arr[i - 1][0]) {
            return false
        } else return true
    }).map(el => {
        if (s1Sequences.includes(el) && s2Sequences.includes(el)) {
            return `=:${el}`
        } else if (s1Sequences.includes(el)) {
            return `1:${el}`
        } else if (s2Sequences.includes(el)) {
            return `2:${el}`
        } else {
            return 'err'
        }
    }).sort((a, b) => {
        if (a.length < b.length){
            return 1
        // } else if (a[0] > b[0] ){
        //     return (-1)
        } else {
            return -1
        }
    })
    console.log('final', finalArray)
    return finalArray.join('/');
}


function toUniques(arr) {
    return [...new Set(arr)].filter(el =>
        'qwertyuiopasdfghjklzxcvbnm'.includes(el)
    );
}

function toSequence(array, string) {
    return [...array].map((el) => {
        let seq = []
        for (let letter of [...string]) {
            if (el === letter) {
                seq.push(el)
            }
        }
        return seq.join('');
    });
}


console.table(mix("Are they here", "yes, they are here"))
// "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"