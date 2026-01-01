/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]*/

//sol1
var reverseString = function (s) {
  s.reverse();
};

let s = ['h', 'e', 'l', 'l', 'o'];
reverseString2(s);

//sol2
function reverseString2(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  console.log(s);
}

reverseString2(s);
