/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let left = 0
    let maxLength = 0;
    let set = new Set()

    for ( let right = 0; n > right; right++ ){
        while ( set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength  = Math.max(maxLength , right - left + 1)
    }
     return maxLength 
}