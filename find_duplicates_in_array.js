//remove duplicates from array

let arr =[1,1,3,5,3,5,3,8,4]


// 1 Option Set
const a = new Set(arr);
console.log('first option: ',a);



//2 Option Indexof
let arr2 =[];

for(let i=0;i<arr.length;i++){

    if(arr2.indexOf(arr[i]) === -1){
        arr2.push(arr[i])
    }
   
    
}
console.log('second option: ', arr2);