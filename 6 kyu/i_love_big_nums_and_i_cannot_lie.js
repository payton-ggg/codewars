function biggest(nums) {
  return nums.sort((a, b) => `${b}${a}` - `${a}${b}`)[0] === 0
    ? "0"
    : nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
}

console.log(biggest([121, 12]));
