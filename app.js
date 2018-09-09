    /**** PROBLEM 3 ****/

    const searchInsert = function(nums, target) {
        return (nums.concat([target])).sort((a,b) => {
            return a - b;
        }).indexOf(target);        
    };


    console.log(searchInsert([1, 2, 3, 5, 10, 11, 15], 16));
    

    /**** PROBLEM 2 ****/

    //*************** REMOVE GIVEN ELEMENT IN A SORTED ARRAY***********//

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

    /**** PROBLEM 1 ****/

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