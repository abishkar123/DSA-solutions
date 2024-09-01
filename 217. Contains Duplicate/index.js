/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const set = new Set()

    for( const n of nums){
        if(set.has(n)){
            return true 
        }
        set.add(n)

    }

    return false
}


// space = 0(n)
// time = 0(n)