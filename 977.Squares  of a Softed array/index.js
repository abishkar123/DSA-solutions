/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0, r = nums.length - 1;
    let res = new Array(nums.length);
    let index = nums.length - 1;
  
    while (l <= r) {
      if (nums[l] * nums[l] > nums[r] * nums[r]) {
        res[index--] = nums[l] * nums[l];
        l++;
      } else {
        res[index--] = nums[r] * nums[r];
        r--;
      }
    }
  
    return res;
  };
  
  