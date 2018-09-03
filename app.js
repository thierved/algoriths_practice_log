const removeElement = function(nums, val) {
    let j = 0;

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }        
    }
    return j;
};

console.log(removeElement([1,4,2,4,3,1], 4));


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

