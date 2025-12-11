var isSquare = function(n){
  return Math.sqrt(n).toString().split(".").length === 1
}
console.log(isSquare(22))