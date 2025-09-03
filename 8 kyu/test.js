// var a = Person("a");
// var b = new Person("b");
// var c = Person;

// function Person(name) {
//   this.first_name = name;
// }

// // console.log(a.first_name); // error
// console.log(b.first_name); // b
// console.log(c.first_name); // underfined

// for (let i = 0; i < 10; i++) {
//   setTimeout(function showIterationNumber() {
//     console.log("i", i);
//   });
// }

const arr = [9, 3, 3, 3, 9, 9, 47, 9, 5, 2, 5, 6, 8, 9, 6, 1, 2, 34, 5];

function unique(input) {
  const unique = new Set(input);

  return [...unique];
}

console.log("input", arr);

const res = unique(arr);
console.log("res", res); // [9, 3, 47, 5, 2, 6, 8, 1, 34]
