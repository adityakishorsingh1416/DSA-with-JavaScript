// ----- Given an integer array nums and an integer val, "remove all occurrences of val" in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val ------ //

let nums = [1, 2, 3, 3, 4, 4]
const val = 3

var removeElement = function(nums, val) {
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[j] = nums[i]
            j++
        }
    }
    return j
}