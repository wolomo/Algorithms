function GetNumberOfK1(data, k) {
    // write code here
    let p1 = 0,
        p2 = 1
    while (p2 > p1) {
        if (data[p1] != k) {
            p1++
            p2++
        } else if (data[p1] == k && data[p2] == k) {
            p2++
        } else if (data[p1] == k && data[p2] != k) {
            return p2 - p1
        }
    }
    return false
}




function GetNumberOfK(data, k) {
    let p1 = 0
    let [low, high] = [0, data.length]
    while (high > low) {
        let mid = parseInt((high + low) / 2)
        if (k == data[mid]) {
            p1 = mid
            break
        } else if (k > data[mid]) {
            low = mid + 1
        } else if (k < data[mid]) {
            high = mid - 1
        } else {
            return -1
        }
    }

    let p2 = p1 + 1

    while (p2 > p1) {
        if(data[p1]==k){
            p1--
        }
        if(data[p2]==k){
            p2++
        }
        if((data[p2]!=k)&&(data[p1]!=k)){
            return p2-p1-1
        }
    }
    return -1

}
let kk = GetNumberOfK([1,2,3,3,3,3,4,5],3)
console.log(kk)
