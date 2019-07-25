/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    /**
     * 1.遍历数组nums1,找出每一个数
     * 2.遍历数组nums2.
     *      
     * 
     * 
     */
    let arr=[]
    let len1 = nums1.length
    let len2 = nums2.length

    console.log(len1,len2)
     for(let i= 0;i<len1;i++){
        // 对nums1的每个数字来说
         for(let j = 0;j<len2 ;j++){
            //  当匹配到nums2中有和当前数字相等时
            if(nums2[j]==nums1[i]){
                if((j+1<=len2)&&nums2[j+1]>nums1[i]){
                    arr.push(nums2[j+1])
                }else{
                    arr.push(-1)
                }
            }
        }
     }
     console.log(arr)
};

nextGreaterElement([4,1,2],[1,3,4,2])
nextGreaterElement([2,4],[1,2,3,4])