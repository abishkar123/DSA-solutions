/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    let l = 0, r = n - 1;
    let res = new Array(n);

    // Use a pointer to fill the result array from the end
    let index = n - 1;

    while (l <= r) {
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            res[index] = nums[l] * nums[l];
            l++;
        } else {
            res[index] = nums[r] * nums[r];
            r--;
        }
        index--;
    }

    return res;
};
