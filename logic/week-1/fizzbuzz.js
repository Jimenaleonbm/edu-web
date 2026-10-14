/*
@input -> n 
If the number can be divided by 3 and 5 → "FizzBuzz"
If only by 3 → "Fizz"
If only by 5 → "Buzz"
If none → the number itself, as text
*/

function fizzBuzz(n){
    let result = []
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        } else if(i % 3 === 0){
            result.push("Fizz")
        } else if(i % 5 === 0){
            result.push("Buzz")
        } else {
            result.push(`${i}`)
        }
    }
    return result
}

console.log(fizzBuzz(15))