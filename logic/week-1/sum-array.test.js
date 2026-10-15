const {sumArray} = require("./sum-array");
const {assertEqual, report} = require("../../tests/helpers");

assertEqual(sumArray([]), 0, "Empty");
assertEqual(sumArray([1, 2, 3]), 6, "n=[1, 2, 3], Result 6");
assertEqual(sumArray([5, -2, 3]), 6, "n=[5, -2, 3] Negative numbers");

report();
