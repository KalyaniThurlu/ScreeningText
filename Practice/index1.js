function memoizedFn1(fn) {
  const cache1 = new Map(); 

  return function (...args1) {
    const key = args1.join(","); 

    if (cache1.has(key)) {
      return cache1.get(key); 
    }

    const result1 = fn(...args1); 
    cache1.set(key, result1); 
    return result1;
  };
}

let callCount = 0;
const memoize1 = memoizedFn1(function (c, d) {
  callCount += 1; 
  return c + d;
});

console.log(memoize1(2, 4));
console.log(memoize1(3, 5)); 
console.log(memoize1(2, 4)); 
console.log(callCount); 
