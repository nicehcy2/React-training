// 배열의 전개 연산자
var array1 = ['one', 'two'];
var array2 = ['three', ' four'];
const combined2 = [...array1, ...array2];
console.log(combined2);
const [first, second, three = 'empty', ...others2] = array1;
console.log(first);
console.log(second);
console.log(three);
console.log(others2);

function func(...args) { var [f1, others3] = args;  }

// 객체의 전개 연산자
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    ...objectOne,
    ...objectTwo,
}
console.log(combined);

var combined = {
    ...objectTwo,
    ...objectOne,
};
console.log(combined);

var { other, ...others } = combined;
console.log(other);
console.log(others);