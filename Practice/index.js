let rows = 5;
for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
    console.log(stars);
  }
}

let exrows = 5;
for (let i = exrows; i >= 1; i--) {
  let starss = "";
  for (let j = 1; j <= i; j++) {
    starss += "*";
  }
  console.log(starss);
}
//==ArrayWrapper==

var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));

//==sort method==
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};
const arr = [{ age: 30 }, { age: 10 }, { age: 35 }];
const fn = (obj) => obj.age;
console.log(sortBy(arr, fn));

//==getlast element==
function getLast(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : -1;
}

const nums1 = [null, {}, 3];
console.log(getLast(nums1));

const nums2 = [];
console.log(getLast(nums2));

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.join(","); 

    if (cache.has(key)) {
      return cache.get(key); 
    }

    const result = fn(...args);
    cache.set(key, result); 
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1; 
  return a + b;
});

console.log(memoizedFn(2, 3))
console.log(memoizedFn(2, 3)); 
console.log(callCount); 


