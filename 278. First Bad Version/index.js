/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    
   return function (n) {
        let low = 1;
        let high = n;
        let mid;
        while (low <= high) {
            mid = ~~(low + (high - low) / 2);
            if (isBadVersion(mid)) {
                if (isBadVersion(mid - 1)) high = mid - 1;
                else return mid;
            } else low = mid + 1;
        }
    }
};