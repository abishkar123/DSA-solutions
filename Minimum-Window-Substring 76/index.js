function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    let dictT = {};
    for (let char of t) {
        if (!dictT[char]) {
            dictT[char] = 1;
        } else {
            dictT[char]++;
        }
    }

    let required = Object.keys(dictT).length;

    let left = 0, right = 0;
    let formed = 0;
    let windowCounts = {};
    let ans = [-1, 0, 0];

    while (right < s.length) {
        let char = s[right];
        if (!windowCounts[char]) {
            windowCounts[char] = 1;
        } else {
            windowCounts[char]++;
        }

        if (dictT[char] && windowCounts[char] === dictT[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans[0] = right - left + 1;
                ans[1] = left;
                ans[2] = right;
            }

            windowCounts[char]--;
            if (dictT[char] && windowCounts[char] < dictT[char]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindow(s, t);
console.log(result);
