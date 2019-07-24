/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    /**
     * 
     * 1.两个栈  数字栈 字母栈 
     * 2.当检测到数字时,数字压栈
     * 3.当检测到[时,1++
     *      1)字母入栈
     *      2)数字
     * 
     * 
     */
    var stackN =[]
    var stackS =[]
    var res =''
    for(let i =0 ;i<s.length;i++){
        if(s[i]>'0'&&s[i]<='9'){
            stackN.push(s[i])
        }else if(s[i]=='['){
            let kk = ''
            while(s[i+1]>='a'&&s[i+1]<='z'){
                kk+=s[i+1]
                i++
            }
            stackS.push(kk)
        }else if(s[i]>='a'&&s[i]<='z'){
            stackS.push(s[i])
        }else if(s[i]==']'){
            //弹出循环的次数
            let nums = stackN.pop()
            let str = ""
            let sarr =""
            //弹出栈顶元素
            str=stackS.pop()

            // 遍历多次
            for(let j =0;j<nums;j++){
                sarr+=str
            }

            // 如果此时次数栈还有
            if(stackN[0]){
                stackS[stackS.length-1]+=sarr
            }else{
                res +=sarr
            }
        }
    }

    while(stackS[0]){
        res+=stackS.pop()
    }
    console.log("answer",res)
};

decodeString("3[a]2[bc]")
decodeString("3[a2[c]]")
decodeString("2[abc]3[cd]ef")
decodeString("2[2[a2[b]]]")