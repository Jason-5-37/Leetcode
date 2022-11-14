/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    var arr = s.split("");
    var num = 0;
    for(let i =0; i<arr.length; i++){
        if(map[arr[i]] < map[arr[i+1]]){
            num += map[arr[i+1]]-map[arr[i]];
            i++;
        }
        else{
            num+=map[arr[i]];
        }
    }

    return num;
};