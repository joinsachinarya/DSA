function twoSum(nums, target) {
    const n = nums.length;
    if (n < 2) return;
    const map = new Map()
    
    for (let i = 0; i < n; i++) {
        const diff = target - nums[i]
        if(map.has(diff)) return [i, map.get(diff)];
        map.set(nums[i], i)
    }
    return ans;
}
console.log(twoSum([3, 4, 5, 6], 10))