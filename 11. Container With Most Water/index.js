/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max_area = 0;

    while (l < r) {
        let width = r - l;
        let minHeight = Math.min(height[l], height[r]);
        let area = width * minHeight;
        max_area = Math.max(max_area, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return max_area;
};

//time - o(n)
//space- o(1)