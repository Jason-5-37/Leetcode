/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 !=0){
        return false;
    }

    var stack = [];
    for(let i =0; i<s.length; i++){
        let c = s[i];
        if(c == "(" || c == "[" || c == "{"){
            stack.push(c);
        }else{
            let t = stack[stack.length-1];
            if((t == "(" && c == ")") || (t == "[" && c == "]") || (t == "{" && c == "}")){
                stack.pop()
            }else{
                return false;
            }
        }
    }

    if(stack.length === 0){
        return true;
    }else{
        return false;
    }
};