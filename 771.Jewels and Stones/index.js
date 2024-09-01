/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let newJewel = new Set(jewels)
    let count = 0

    for(const stone of stones){
        if(newJewel.has(stone)){
            count++
        }

    }
    return count;
    
};

// timecomplexity 0(n+m)
// spacecomplexity 0(n) because of hashset