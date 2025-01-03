
function findKthLargest(nums, k) {
    k = nums.length - k;
  
    function quickSelect(l, r) {
      let pivot = nums[r], p = l;
      for (let i = l; i < r; i++) {
        if (nums[i] <= pivot) {
          [nums[p], nums[i]] = [nums[i], nums[p]];
          p++;
        }
      }
      [nums[p], nums[r]] = [nums[r], nums[p]];
  
      if (p > k) {
        return quickSelect(l, p - 1);
      } else if (p < k) {
        return quickSelect(p + 1, r);
      } else {
        return nums[p];
      }
    }
  
    return quickSelect(0, nums.length - 1);
  }
  