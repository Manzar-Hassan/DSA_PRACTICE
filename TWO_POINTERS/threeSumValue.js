function findSumOfThree(nums, target) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let high = nums.length - 1;
        let low = i + 1;

        while (low < high) {
            const sum = nums[high] + nums[low] + nums[i]

            if (sum === target) {
                return true;

            } else if (sum > target) {
                high--;

            } else if (sum < target) {
                low++;
            }
        }
    }

    return false
}

console.log(findSumOfThree([3, 7, 1, 2, 8, 4, 5], 10))