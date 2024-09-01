/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const counText = {}
    const balloon = { 'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1 };

    for(let c of text){
        counText[c] = (counText[c] || 0) +1
    }

    let res = text.length 
    for(let ch in balloon){
       res = Math.min(res, Math.floor((counText[ch] || 0) / balloon[ch]));
    }
    return res
    
};

//time 0(n)
//space 0(1)