/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }else if(x == 0){
        return true;
    }else{
        let str = x.toString();
        let arr = str.split("");
        arr.reverse();
        re_str=arr.join("");
        if(str == re_str){
            return true;
        }else{
            return false;
        }
    }
};