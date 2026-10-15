const {fizzBuzz} = require("./fizzbuzz");
const {assertEqual, report} = require("../../tests/helpers");

assertEqual(fizzBuzz(1), ["1"], "n=1: just the number");
assertEqual(fizzBuzz(3), ["1","2","Fizz"], "n=3, one Fizz");
assertEqual(fizzBuzz(5), ["1","2","Fizz","4","Buzz"], "n=5 one Buzz");

report();

