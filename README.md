# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to its loose typing system.  The `foo` function intends to add two numbers, but due to JavaScript's implicit type coercion, it performs string concatenation when one of the arguments is a string.

## Bug Description
The `bug.js` file contains a function that should add two numbers. However, if one of the inputs is a string, it results in string concatenation instead of the expected numerical addition. This is a common source of errors, particularly when dealing with user inputs or data from external sources.

## Solution
The `bugSolution.js` file presents a solution that explicitly checks the types of inputs and handles them accordingly, preventing unexpected string concatenation.