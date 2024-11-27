/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let res = nums[0];
    let l = 0;
    let r = nums.length - 1;
  
    while (l <= r) {
      if (nums[l] < nums[r]) {
        res = Math.min(res, nums[l]);
        l++;
      } else {
        res = Math.min(res, nums[r]);
        r--;
      }
    }
  
    return res;
  }