/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0
    let j = 0
    let res = [];

    while (i < word1.length && j < word2.length){
        res.push(word1[i])
        res.push(word2[j])
        i+=1
        j+=1 
    }
    if(i < word1.length){
        res.push(...word1.slice(i))
    }

    if(j < word2.length){
        res.push(...word2.slice(j))
    }

    return res.join('')


    
};