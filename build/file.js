'use strict'

var fs = require('fs');
const bigdata = require("../public/2")

function transData(a, idStr, pidStr, chindrenStr){
    var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = (a==undefined ? 0 :a.length);
    for(; i < len; i++){
        a[i].children = [];
        hash[a[i][id]] = a[i];
    }
    for(; j < len; j++){
        var aVal = a[j], hashVP = hash[aVal[pid]];
        if(hashVP&&aVal){
            !hashVP[children] && (hashVP[children] = []);
            if(hashVP[children].length<5000)hashVP[children].push(aVal);
        }else{
            r.push(aVal);
        }
    }
    return r;
}
console.log(bigdata.INITIAL_VALUE)
var list =transData(bigdata.INITIAL_VALUE,'id', 'pid', 'children');

// console.log(JSON.stringify(a))
fs.writeFileSync('D:\ccc.js', 'var bigdata ='+JSON.stringify(list), 'utf8');