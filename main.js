// 1. Create an index.html file in this same directory and link this js to it

// 2. This function, called longOrShort should take an array of
// words as an argument, re - arrange the 
// words into two arrays, one of long words, 6 letters or longer and one of short words, 5 letters or fewer

// It should console log a message that says "you have more short words" or "you have more long words," depending on which array is longer.There are hints below in the comments.

// Here is a sample array you can try. You can also make your own arrays, because your function should work on any array of words.
let sampleArray = ['bespoke', 'vexillologist', 'four', 'dollar', 'toast', 'ugh', 'literally', 'sriracha', 'beard', 'jean', 'shorts', 'quinoa', 'tbh', 'humblebrag', 'edison', 'bulb', 'disrupt', 'single-origin', 'coffee']

let sampleArray2 = ['Nutmeg', 'Violet', 'Tejo']

// Here is the function declaration and some starting code. You will complete the code so it 
// does everything it is supposed to. 
function longOrShort(wordArray) {
    console.log(`wordArray is: ${wordArray}`)
    // copy the array and store it in a variable called wordArrayCopy
    let wordArrayCopy = [...wordArray]
    // or let wordArrayCopy = wordArray.slice() (equivalent to the spread ... operator above)
    // create empty arrays and store them in variables, shortWords and longWords

    // using filter 
    const shortWords = wordArrayCopy.filter(function (word) {
        return word.length <= 5
    })

    // if the word is 6 or more letters long, put it in the longWords array.
    // if the word is 5 or fewer letters long,
    // put it in the shortWords array

    console.log("Short words: ", shortWords)
    console.log("Long words: ", longWords)
    // figure out which array is longer
    // console.log('You have more short/long') words,
    // depending on which array is longer
    // return the longer of the two arrays
    // if they are the same length, console.log("You have the same number of short and long words") and return the original array

}

let result = longOrShort(sampleArray)
let result2 = longOrShort(sampleArray2)
// call the function on an actual array, and store the outcome in a variable called `result`
console.log(result)
// console.log the resulting array