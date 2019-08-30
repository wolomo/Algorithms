function StrToInt(str)
{
    // write code here
    let flag =1
    let list=[]
    for(let i=0;i<str.length;i++){
        console.log(str[i])
        if(str[i]<="9"&&str[i]>="0"){
            list.push(str[i])
        }else if((str[i]=="+"||str[i]=="-")&&i==0){
            flag =str[i]=="-"?-1:1
        }else{
            return 0
        }
    }

 

    let sum=0
    while(list.length>0){

        let temp = list.shift()-0
        sum=sum*10+temp

    }

    return sum*flag
}


StrToInt("123")