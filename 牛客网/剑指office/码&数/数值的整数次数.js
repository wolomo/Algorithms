function Power(base, exponent) {

    // write code here
    let number = 1
    if (exponent == 0) {
        number = 1
    } else if (exponent < 0) {
        for (let i = 0; i < -exponent; i++) {
            number *= 1 / base
        }
    } else {
        for (let i = 0; i < exponent; i++) {
            number *= base
        }
    }
    console.log(number.toFixed(5))
    return number.toFixed(5)
    // return Math.pow(base, exponent)
}



function Power1(x,n){
    let number =1.0;
    if(n<0){
        if(x<=0){
            throw new Error("分母不能为0")
        }else{
            for (let i = 0; i < -n; i++) {
                number *= 1 / x
            }
        }
    }else if(n>0){
        for (let i = 0; i < n; i++) {
            number *= x
        }
    }

    return number


}



console.log(Power(-2, 3))

// function Power(n, t) {
//     var number = 1;
//     if ((n == 0 || t == 1) || (n == 1 || t == 0)) {
//         return n;
//     } else if (t < 0) {
//         for (var i = 0; i < -t; i++)
//             number *= 1 / n;
//     } else {
//         for (var j = 0; j < t; j++)
//             number *= n;
//     }
//     return number;
// }