//s字符串
function isNumeric(s)
{
    // write code here
    if(s[0]=='-'||s[0]=='+'){
        if(s[1]>'9'||s[1]<'0'){
            if(s[1]=="."){
                
            }else{
                console.log("e1")
                return false
            }
        }
    }


    let domFlag =0
    for(let i=0;i<s.length;i++){
        

        if((s[i]<"0"||s[i]>"9")&&i>0){
            if(s[i]=="."||s[i]=="e"||s[i]=="E"){

            }else{
                console.log("e2",s[i])
                return false
            }

        }
        if(s[i]=="."){
            domFlag++
            if(domFlag>1||i==s.length-1||i==0){
                console.log("e3")
                return false
            } 
        }


        if(s[i]=="e"||s[i]=="E"){
            if(i==s.length-1){
                return false
            }

            if(s[i+1]=="+"||s[i+1]=="-"){
                i=i+1
            }
            for(let j=i+1;j<s.length;j++){
                if(s[j]=="+"||s)
                console.log(s[j])
                if(s[j]>'9'||s[j]<'0'){
                    console.log("e4")
                    return false
                }
            }
        }

    }
    return true
}

let xx = isNumeric("1+500")
console.log(xx)