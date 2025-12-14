function filter_list(l) {
  const arr = [] 
  l.forEach(el => typeof el === typeof 1 ? arr.push(el) : null)
  return arr
}

console.log(filter_list([2, 4, -1, "2"]))