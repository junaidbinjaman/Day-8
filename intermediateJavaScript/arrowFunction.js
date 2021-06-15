// const doubleIt = function(num) {
//     return num * 2
// }

// const doubleIt = num => num * 5;

// const result = doubleIt(10)
// console.log(result)

// const add = (x, y) => x + y;
// const result = add(50, 70);
// console.log(result)

const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}

const result = doMath(7, 5);
console.log(result)