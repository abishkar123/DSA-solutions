function twoSum(nums, target) {
    const hashmap = {}; 
    
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

// time- 0(n)
//space - 0(n)
// hashmap apporach 



