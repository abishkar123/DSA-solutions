function twoSum(nums, target) {
    const hashmap = {}; // value: index
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let diff = target - n;

        if (hashmap.hasOwnProperty(diff)) {
            return [hashmap[diff], i];
        }
        
        hashmap[n] = i;
    }
    
    return [];
}



