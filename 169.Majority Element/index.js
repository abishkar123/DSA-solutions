/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let res = null;

    for (let num of nums) {
        if (count === 0) {
            res = num;
        }
        count += (num === res) ? 1 : -1;
    }

    return res;
}

//time 0(n)
//space 0(1)