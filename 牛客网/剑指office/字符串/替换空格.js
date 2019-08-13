/**
 * 
 * @param {String} str 
 */

function replaceSpace(str)
{
    return str.split("").map((key)=>{
        if(key==" "){
            return "%20"
        }else{
            return key
        }
    }).join("")
}

console.log(replaceSpace("We Are Happy"))