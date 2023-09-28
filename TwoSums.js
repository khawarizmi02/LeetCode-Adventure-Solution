// Question
// 1. Two Sum

// Difficulties : Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// test case 1
const nums = [2, 7, 11, 15];
const target = 9;

// test case 3
// const nums = [3, 2, 4];
// const target = 6;

// test case 3
// const nums = [3, 3];
// const target = 6;

// test case 4
// const nums = [1, 3, 20, 10];
// const target = 11;

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i !== j && target === nums[i] + nums[j]) {
        return [nums.indexOf(nums[i]), searchIndex(nums, nums[j], 2)];
      }
    }
  }
  return null;
};

const searchIndex = (arr, target, pos) => {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
      if (count === pos) return i;
    }
  }
  return -1;
};

console.log(twoSum(nums, target));
