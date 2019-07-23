/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;j=height.length-1
    let area =0
    while(i<j){
        console.log("height[i],height[j]",height[i],height[j])
        console.log("area",area)
        console.log((j-i)*Math.min(height[i],height[j]))
        area = Math.max(area,(j-i)*Math.min(height[i],height[j]))
        if(height[i]>height[j]){
           j--
        }else{
            i++
        }
        
    }
    console.log(area)
    
};


maxArea([1,8,6,2,5,4,8,3,7])