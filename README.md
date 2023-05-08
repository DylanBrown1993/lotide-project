# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dylanbrown1993/lotide`

**Require it:**

`const _ = require('@dylanbrown1993/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assert(...)`: Compares two arrays 
* `assertEqual(...)`: Compares if two arrays are equal
* `head(...)`: Returns the first element of an array
* `middle(...)`: Returns the middle element of an array
* `tail(...)`: Returns the last element of an array