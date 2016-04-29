/**
 * Created by mac on 16/4/22.
 */
function getstyle (obj,attr){

    return obj.currentStyle?[attr]:getComputedStyle(obj)[attr];
}

//自动获取元素属性的函数

