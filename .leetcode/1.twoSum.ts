/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (const [key, num] of Object.entries(nums)) {
    if (map.has(num)) {
      return [map.get(num)!, Number(key)];
    }
    map.set(target - nums[key], Number(key));
  }
  return [];
}

// @lc code=end
