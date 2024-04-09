// let arr1 = [10, 20, 100, 30]

// console.log('arr1.sort() :>> ', arr1.sort());
// console.log('arr1.sort((a,b)=>a-b) :>> ', arr1.sort((a,b)=>a-b));
// console.log('arr1.sort((a,b)=>b-a) :>> ', arr1.sort((a,b)=>b-a));

// let arr1 = [
//     {a:1, b:2},
//     {a:3, b:4},
//     {a:5, b:6},
//     {a:7, b:8},
//     {a:9, b:10}
// ]

// console.log('arr1.sort((a,b)=>b-a) :>> ', arr1.sort((a,b)=>b.a-a.a));

// arr2 = [[1,2],[3,4]]

// console.log('arr2.sort((a,b)=>b-a) :>> ', arr2.sort((a,b)=>b-a));

let arr = [
  { a: 1, b: 2, c: "hello" },
  { a: 3, b: 4, c: "World I" },
  { a: 5, b: 6, c: "I am" },
  { a: 7, b: 8, c: "Om" },
  { a: 9, b: 10, c: "from" },
  { a: 11, b: 12, c: "deloitte" },
];

function filterStr(substr) {
  let temp = [];
  arr.map((a) => {
    if (a.c.includes(substr)) {
      temp.push(a);
    }
  });
  return temp;
}

function filterStrfilter(substr) {
  return arr.filter((a) => a.c.includes(substr));
}

console.log('filterStr("o") :>> ', filterStr("o"));
console.log('filterStrfilter("I") :>> ', filterStrfilter("I"));
