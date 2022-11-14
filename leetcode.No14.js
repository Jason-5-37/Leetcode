/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var res = [];

    for(let i=0; i<strs[0].length; i++){
        let c  = strs[0].charAt(i);
        for(let j = 1; j<strs.length; j++){
            if(!strs[j].charAt(i) ||strs[j].charAt(i) !== c){
                return res.join("");
            }
        }
        res.push(c);
    }


    return res.join("");
};