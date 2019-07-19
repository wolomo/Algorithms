/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let nu = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let ss = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let S =""
    for(let i = 0;i<nu.length;i++){
        while(num>=nu[i]){
            S+=ss[i]
            num=num-nu[i]
        }
    }
    console.log(S)  
};

intToRoman(1994)