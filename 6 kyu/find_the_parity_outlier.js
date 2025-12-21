function findOutlier(numbers) {
  const evenCount = numbers.slice(0, 3).filter(n => n % 2 === 0).length;
  const lookForEven = evenCount < 2;

  return numbers.find(n => (n % 2 === 0) === lookForEven);
}
console.log(findOutlier([1, 3, 5, 7]))