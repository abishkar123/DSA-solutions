
function isAnagram (s, t) {
    const S = s.length;
    const T = t.length
    if(S != T){
        return false
    }

    const s_map ={}
    const t_map={}

    for(let char of s){
        s_map[char] = (s_map[char] || 0 ) +1
    }

    for(let char of t){
        t_map[char] = (t_map[char] || 0 ) +1
    }

    for(key of s_map){
       if (t_map[key] !== (s_map[key] || 0)){
        return false
       }
       
    }
   return true       
}