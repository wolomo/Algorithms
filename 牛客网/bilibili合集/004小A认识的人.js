/**
 * 
 * @param {Number} A  A的序号
 * @param {分组} list 分组列
 */
function fun(A,list){
    let  set =new Set()
    set.add(A)
    for(let i=0;i<list.length;i++){
        
        let temp =list[i].split(",")
 
        let first=temp[0]
        let last=temp[1]

        console.log(temp)
        console.log(set)
        if(set.has(first)){

            set.add(last)
            i=0
        }
    }
    return set.size-1
}

let x = fun("5",["1,0","3,1","4,1","5,3","6,1","6,5"])
console.log(x)