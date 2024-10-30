/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const counter = {};
    let goodPairs = 0;
  
    for (const num of nums) {
      if (counter[num]) {
        goodPairs += counter[num];
        counter[num] += 1;
      } else {
        counter[num] = 1;
      }
    }
  
    return goodPairs;
  };
  