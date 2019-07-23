/**
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

    请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

    你可以假设 nums1 和 nums2 不会同时为空。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i=j=z=0
    var k =[]
    while((i<nums1.length)&&(j<nums2.length)){
        if(nums1[i]<=nums2[j]){
            k[z]=nums1[i]
            z++
            i++
        }else{
            k[z]=nums2[j]
            z++
            j++
        }
    }
    if(i==nums1.length){
        k= k.concat(nums2.slice(j))
    }
    if(j==nums2.length){
        k= k.concat(nums1.slice(i))
    }

    // console.log(k)

    var lengthk = k.length;
    // console.log(lengthk)
    if(lengthk%2==0){
        return (k[k.length/2]+ k[k.length/2-1])/2
    }else{
        return k[(k.length-1)/2]
    }
}


console.log(findMedianSortedArrays([1,5,7],[2]))