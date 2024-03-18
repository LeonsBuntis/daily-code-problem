// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        const cur = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            const next = nums[j];
            
            if ((cur + next) === target) {
                return [i, j];
            }
        }
    }
};

var twoSumOptimized = function(nums, target) {
    
    let hashSet = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        
        const neededVal = target - cur;

        const next = nums.indexOf(neededVal);

        if(i === next) {
            continue;
        }

        if(hashSet.has(neededVal)){
            return [i, next]
        }
    }
};

var twoSumOptimized2 = function(nums, target) {
    let sorted = [...nums].sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        let ii = sorted[i];
        let jj = sorted[j];
        const sum = ii + jj;

        if(sum === target) {
            const first = nums.indexOf(ii);
            const second = nums.indexOf(jj, first + 1);
            return [first, second];
        } else if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        }
    }
};

const nums = [2,7,11,15];
const target = 9;

const result = twoSumOptimized2(nums, target);