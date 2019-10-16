# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ashalansky/lotide`

**Require it:**

`const _ = require('@ashalansky/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: retrieve the first element from the array. This is often referred to as the "head" of the array. The head function should not return the first element as an array. It should simply return the element itself.
* `tail(...)`: The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.
* `middle(...)`: Implement middle which will take in an array and return the middle-most element(s) of the given array.
* `assertArraysEqual(...)`: function for asserting that two arrays are equal.
* `assertObjectEqual(...)`: Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
* `eqArrays(...)`: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
* `assertEqual(...)`: Comparing primitive types.
* `eqObjects(...)`: Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
* `countLetters(...)`: counting how many times a letter shows up in a string.
* `countOnly(...)`: This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.
* `findKey(...)`: It will help us search for a key on an object where its value matches a given value. 
* `findKeyByValue(...)`: Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `letterPositions(...)`: We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found. For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
* `map(...)`: The map function will return a new array based on the results of the callback function.
* `takeUntil(...)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(...)`: Implement without which will return a subset of a given array, removing unwanted elements.