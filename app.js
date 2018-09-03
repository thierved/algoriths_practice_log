

function* gen(val) {
    let greet10 = yield ('hello number* ' + val);
    let greet11 = yield ('hello number* ' + ~(val +1)*-1)

    yield ('hello number ' + greet10);
}

let test = gen(10);

console.log(test.next().value);
console.log(test.next(11).value);
console.log(test.next(1).value);
// console.log(test.next(11).value);
// const removeElement = function(nums, val) {
//     let j = 0;

//     for (let i = 0, len = nums.length; i < len; i++) {
//         if (nums[i] !== val) {
//             nums[j] = nums[i];
//             j++;
//         }        
//     }
//     return j;
// };


//*************** REMOVE DUPLICATE IN A SORTED ARRAY***********//

// var removeDuplicates = function(nums) {

//     if (nums.length < 1) {
//         return 0;
//     }

//     let index = 1;
//     for (let i = 1,  len = nums.length; i < len; i++) {
//         if (!(nums[index-1] === nums[i])) {
//             nums[index++] = nums[i];
//         }
//     }
    
//     return index;
// };

