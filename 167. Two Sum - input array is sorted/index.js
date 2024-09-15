/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1
    let nums = numbers
    while(l < r){
      let sum = nums[l]+ nums[r]
      if(sum === target){
       return[l+1, r+1]
      }else if(target < sum){
       r--
      }else {
       l++
      }
    }
     
   };