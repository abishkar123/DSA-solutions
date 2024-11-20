/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 1
    let r = num
    
   while (l <= r){
   const m = Math.floor((l+r)/2)
   const m_square = m * m 

   if (num === m_square){
    return true 
   } else if (m_square < num){
    l = m+1
   }
   else{
    r = m-1
   }

   }

   

   return false 

    
};