//Arrays are 'pass by reference'
//This means you can accidentally change an array
//if you change another array that it's equal to

let nums = [5, 4, 3, 2, 1];
let newNums = nums;
newNums[0] = 12;
console.log('nums: '+ nums);
console.log('newNums: '+ newNums);

//