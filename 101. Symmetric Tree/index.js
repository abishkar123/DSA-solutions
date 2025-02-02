var isSymmetric = function(root){
    function Same(t1,t2){

        if(t1 === null && t2 === null) return true 
        if(t1 === null|| t2 === null) return false
        if(t1.val !== t2.val) return false  
        
        return Same(t1.left,t2.right) && Same(t1.right,t2.left)
        
    }
     return Same(root, root)

};

