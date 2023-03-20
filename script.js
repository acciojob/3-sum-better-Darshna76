Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers.

Assume that there will only be one solution. You only need to complete the threeSum function inside script.js

Example: given array S = {-1 2 1 -4},

and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

--------------------==========================------------------------------------------------------------------------------=========--------

function threeSum(arr, target) {
// write your code here
  
  arr.sort((a, b) => a - b); // Sort the array in non-decreasing order
  let closestSum = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;