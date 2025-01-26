/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let l = 0;
    let minLength = Infinity; 

    for(let r = 0; r < nums.length; r++){
        sum += nums[r];
        while( sum >= target){
            minLength = Math.min(minLength, r-l+1)
            sum -=nums[l++]
        }
    }
     return minLength === Infinity ? 0:minLength
};

// time complexity is 0(n) and space complexity is 0(1)