/*
 * @Author: yongju
 * @Date: 2021-02-22 19:02:25
 * @LastEditors: yongju
 * @LastEditTime: 2021-02-22 20:17:27
 * @Description: 
 */

import config from './config'

export function isWorker(){
    if(typeof window === "object"){
        return !window.document || 
        (   window.document 
            && 
            Object.prototype.toString.call(document) !== "[object HTMLDocument]"
        )
    }
    return true;
}

export function getProjection() {

    if(isWorker()){
        return self.mapProjection
    }else{
        return config.PROJECTION
    }
    
}