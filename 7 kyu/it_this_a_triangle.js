function isTriangle(a,b,c) {
   const arr = [a, b, c].sort((x, y) => x - y )
   if (arr[0] <= 0) return false
   return arr[2] <= arr[0] + arr[1]
}

console.log(isTriangle(2, 4, 5))