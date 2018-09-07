    /**** PROBLEM 3 ****/

    const findElement = (list, el) => {

        if (list.length < 1) {
            return -1;
        }

        let low = 0;
        let hight = list.length - 1;

        if (list[low] === el) {
            return low;
        }

        if (list[hight] === el) {
            return hight;
        }

        while (low < hight - 1) {
            let mid = low + parseInt((hight - low) / 2);

            if (list[mid] === el) {
                return mid;
            } else if (list[mid] < el) {
                low = mid;
            } else {
                hight = mid;
            }
        }

        return -1;
    }

    console.log(findElement([1, 2, 3, 5, 10, 11, 15], 20));
    

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