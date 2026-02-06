//----- You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. ----- //

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

var merge = function (nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
    while(j >= 0){
        nums1[k--] = nums2[j--]
    }
};
merge(nums1, m, nums2, n)
console.log(nums1);
