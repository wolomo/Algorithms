/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zigzag-conversion
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert1 = function(s, numRows) {
//     let leng = s.length;
//     let val = 2*numRows-2
//     let k=""
//     for(let i=0 ; i<numRows;i++){
//         for(let j=0;j+i<leng;j+=val){
            
//             k=k+s[j+i]
//             当i不为第一排和最后一排的时,且j
//             if (i != 0 && i != numRows - 1 && j + cycleLen - i < leng)
//                     k += s[j + val - i];
//         }
        

//     }
    

//     console.log(k) 
// };



var convert2 = function(s, numRows) {
    // 如果长度唯一,返回本身
    if(numRows==1) return s
    let num = 0
    let down = true
    let res = []
    // 遍历s
    for(let i=0;i<s.length;i++){
        // 如果res[num]为不为空 将之置空
        if(!res[num]) res[num] = []
        //将s[i]存入到res[num中]
        res[num].push(s[i])
        // 如果num等于指定高,不向下
        if(num===numRows-1) down = false
        // 如果num==0 
        if(num===0) down = true
        down?num++:num--
    }
    
    return res.reduce((pv,cv)=>{
        return pv+=cv.join('')
    },'')
};



function convert3(s,numRows){
    if(numRows==1) return s
    let num =0;
    let down =true;
    let res =[]
    for(let i= 0;i<s.length;i++){
        if(!res[num]) res[num]=[]
        res[num].push(s[i])

        if(num == numRows-1) down =false
        if(num == 0) down =true
        down?num++:num--
    }
    console.log(res.join("").replace(/,/g,''))
}


convert3("LEETCODEISHIRING",3)
