const CalcAvg = (num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let numbers = num[i];
        sum += numbers;
    }
    console.log("sum of numers are: " + sum);
}

let arr = [2, 4, 6, 23, 5, 3];

let sDate = new Date();
CalcAvg(arr);
let eDate = new Date();

let elaspedTime = eDate - sDate;
console.log(`Total elasped time is ${elaspedTime} ms`);

