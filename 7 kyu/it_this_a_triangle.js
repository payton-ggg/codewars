function isTriangle(a,b,c) {
   const arr = [a, b, c].sort((x, y) => x - y )
   return arr[2] <= arr[0] + arr[1]
}
console.log(isTriangle(2, 4, 5))