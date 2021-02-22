/*
 * @Author: yongju
 * @Date: 2021-02-22 15:27:32
 * @LastEditors: yongju
 * @LastEditTime: 2021-02-22 20:01:31
 * @Description: 
 */
/* eslint-disable */


//yongju.hy
var _typeof = `function (obj) {
    var _typeof;
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
         return typeof obj;
        };
    } else {
       _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    if(!obj){
        return _typeof;
    }
    return _typeof(obj);
}`;

function checkTypeOf(){
    return typeof "test";
}
//let typeofName = checkTypeOf.toString().match(/function[\w ]{0,}\(\)\{return (\w+)\(\)\(\"test\"\)\;?}/);
var typeofName = checkTypeOf.toString().match(/return[ \t\n]{0,}([\w]+)\(/);
var typeNameVar = null;
if(typeofName){
    typeNameVar = typeofName[1];
}

var shared, worker, maplibregl;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
    if (!shared) {
        shared = chunk;
    } else if (!worker) {
        worker = chunk;
    } else {
        
        var workerBundleString = 'var _typeof = self.'+typeNameVar+' = ' + _typeof + ';var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

        var sharedChunk = {};
        shared(sharedChunk);
        maplibregl = chunk(sharedChunk);
        if (typeof window !== 'undefined') {
            maplibregl.workerUrl = function(projection){
                projection = projection || 3857;
                var projectionString = 'self.mapProjection = ' + projection + ';';
                return window.URL.createObjectURL(new Blob([
                    projectionString + workerBundleString
                ], { type: 'text/javascript' }));
            }
        }
    }
}
