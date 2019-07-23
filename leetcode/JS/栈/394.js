/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    /**
     * 
     *  1.使用两个栈存储
     *  2.当读取到数字是  将数字进栈到stackN 
     *  3.当读取到[时候  
     *          如果后面一位是字母 将字母进栈到stackS
     *          一直进
     *  4.读取到]时,将字母出栈,且数字也出栈,循环数字次
            然后放在字母串中
            此时如果数字串不为空,需要再次将字母进栈
            当数字为空的时候输出
     * 
     * 
     */
    var stackN=[]
    var stackS=[]
    for(let i = 0;i<s.length;i++){

        if(s[i]>='1'&&s[i]<='9'){
            stackN.push(s[i])
        }
        if(s[i]>='a'&&s[i]<='z'){
            stackS.push(s[i])
        }
    }

    var reNumber = /^\d+$/
    var reString = /^[a-zA-Z]+$/

    console.log(stackN,stackS)
};


decodeString("3[a]2[bcd]")