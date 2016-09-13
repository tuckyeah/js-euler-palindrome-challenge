'use strict';

const dec2bin = function (dec) {
  return (dec >>> 0).toString(2);
};

const isPalindrome = function (num) {
  return String(num).split('').reverse().join('') === String(num);
};

const countSums = function () {
  let sum = 0;

  for (let i = 0; i < 1000000; i++) {
    if (isPalindrome(i)) {
      if (isPalindrome(dec2bin(i))) {
        sum = sum + i;
      }
    }
  }

  console.log(sum);
};

module.exports = {
  countSums,
};
