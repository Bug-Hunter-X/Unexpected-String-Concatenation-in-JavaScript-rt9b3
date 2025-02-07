function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return NaN; // Or throw an error
  }
}

console.log(foo(2, 2));    // Output: 4
console.log(foo(2, '2'));  // Output: Invalid input: Both arguments must be numbers. NaN