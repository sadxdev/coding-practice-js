/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]*/

//sol1
var reverseString = function (v) {
  v.reverse();
};

let s = ['h', 'e', 'l', 'l', 'o'];
let t = [...s];
let u = [...s];
let v = [...s];

reverseString2(s);

//sol2
function reverseString2(t) {
  let left = 0;
  let right = t.length - 1;

  while (left < right) {
    [t[left], t[right]] = [t[right], t[left]];
    left++;
    right--;
  }

  console.log(t);
}

reverseString2(t);

function reverseString3(u) {
  let left = 0;
  let right = u.length - 1;

  while (left < right) {
    [u[left], u[right]] = [u[right], u[left]];
    left++;
    right--;
  }

  console.log(u)
}

reverseString3(u);

