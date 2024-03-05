'use strict'

/**
 * ! Decoding and encoding URIs
 */



/**
 * ? Global methods
 * immediately accessible to you, no need to call the class first to call the method e.g like Math.floor
 * another example of this is isNan()
 * ? isNan essentially checks if the value in the brackets is a number or not and returns true or false
 * ! example
 */


let a = "a";
console.log(isNaN(a));


/**
* ! Decoding and encoding URIs
* ? decodeUri() and encodeUri()
* The decodeUri() and encodeUri() are actually not really encoding and decoding,
they are more so fixing broken URIs. It is like the previous example with the spaces.
This method pair is really good at fixing broken URIs and decoding them back into
a string. Here you can see them in action:
*/

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri); // this removes the spaces in the uri and inputs % signs and various amounts to get rid of empty spaces
let decoded_uri = decodeURI(encoded_uri);// returns the spaces in the url 
console.log("Decoded:", decoded_uri);


/**
* ! Decoding and encoding URIs
* ? decodeUri() and encodeUri()
* With components 
* ? use encodeuriComponent() with only the values after the equal to sign 
* ! Like this https://www.example.com/submit?name=maaike van putten";
* ! only use this value which comes after the equal to sign (maaike van putten)
*/


/**
 * !  Encoding with escape() and unescape()
 * These are still global methods available to do something similar to encode (escape)
and decode (unescape). Both methods are strongly discouraged to use and they
might actually disappear from future JavaScript versions or may not be supported by
browsers for good reasons.
 * ! 
 * 
 */


/**
 * ? Parsing Numbers
 * ! Making integers with parseInt()
 */

let str_int = "32";
let int_int = parseInt(str_int);
console.log("Type of", int_int, "is", typeof int_int);


/**
 * ? Parsing Numbers
 * ! ParseInt to FLOATS HOW WILL THIS TURN OUT?
 */

let strr_float = "7.6";
let int_float = parseInt(strr_float);
console.log("Type of", int_float, "is", typeof int_float);

// it recognizes the 7 but completely ignores the .6 
//how do we fix that? we use parseFloat
// example 3

/**
 *! Making floats with parseFloat()
 */

let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is", typeof float_float);



/**
 *! binary methods
 *? Lastly, the behavior for binary numbers and strings is the same. It is going to stop
*? parsing as soon as it runs into a character it cannot interpret:
 */

let str_binary = "0b101";
let float_binary = parseFloat(str_binary);
console.log("Type of", float_binary, "is", typeof float_binary); // Type of 0 is number

let str_nan = "hello!";
let float_nan = parseFloat(str_nan);
console.log("Type of", float_nan, "is", typeof float_nan); //Type of NaN is number


/**
 * ! Executing JavaScript with eval()
 * use in html 
 * why is it discouraged
 * ! security reasons executing untested code could crash a web application or program.
 * ? for these reasons you should seek to avoid it.
 */


/**
 * ? ARRAY METHODS
 * ! Array methods
 * Performing a certain action for every item
 * YOU CAN HAVE 2 ARGUMENTS IN A FOR EACH
 */

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

/**
 * ? ARRAY METHODS ABOVE 
 * ! if you have 2 parameters one is going to get the element it'self and the second element will get the index position
 * Example 2
 * 
 */

// let array = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(e, i) {
//  console.log("Printing stuff:", e, "on array position:", i);
// }
// array.forEach(printStuff);

/**
 * ? Filtering an array
 * ! We can use the built-in filter() method on an array to alter which values are in the
array. The filter method takes a function as an argument, and this function should
return a Boolean. If the Boolean has the value true, the element will end up in the
filtered array. If the Boolean has the value false, the element will be left out. You can
see how it works here:
 * 
 */

let arra = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
    return typeof element === "string"; // what ever it is you set equal to use it in quotes"" e.g "number", "boolean"
}
let filterArr = arra.filter(checkString); // running the filter method with the function we created "checkString"
console.log(filterArr);


/** 
 * ? Checking a condition for all elements
 * You can use the every() method to see whether something is true for all elements
in the array. If that is the case, the every() method will return true, else it will
return false. We are using the checkString() function and array from the previous
example here
 */

console.log(arra.every(checkString));

// This will log false, since not all elements are of type string in the array.


/** 
* ! Replacing part of an array with another part of
*! the array
 */


arra = ["grapefruit", 4, "hello", 5.6, true];
arra.copyWithin(0, 3, 4);

// arr becomes:
// [ 5.6, 4, 'hello', 5.6, true ]
// f we specify a range with length 2, the first two elements after the starting position
//get overridden:

arra = ["grapefruit", 4, "hello", 5.6, true];
arra.copyWithin(0, 3, 5);

// And now arr becomes:
// [ 5.6, true, 'hello', 5.6, true ]

// We can also not specify an end at all; it will take the range to the end of the string:

let arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
console.log(arr);

// This will log:
// [ 5.6, true, false, 5.6, true, false ]
// It is important to keep in mind that this function changes the content of the original
//array, but will never change the length of the original array.


/**
 * ! Mapping the values of an array
 * ? Sometimes you'll need to change all the values in an array. With the array map()
* ? method you can do just that.
* !This method will return a new array with all the new
* ! values. You'll have to say how to create these new values. This can be done with the
* ! arrow function. It is going to execute the arrow function for every element in the
* ! array, so for example:
* ! It is going to execute the arrow function for every element in the
* ! array, so for example:
 */

let numarr = [1, 2, 3, 4];
let mapped_arr = numarr.map(x => x + 1);
console.log(mapped_arr);



/**
 * ? Finding the last occurrence in an array
 * We can find occurrences with indexOf() as we have seen already. To find the last
occurrence, we can use the lastIndexOf() method on an array, just as we did for
string. 
* ! It will return the index of the last element with that value, if it can find it at all:

 */

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

// It will return the index of the last element with that value, if it can find it at all:



/**
 * String methods
 * ! Combining strings
 */

let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);


/**
 * ? Converting a string to an array
 * With the split() method we can convert a string to an array.
 * 
 * 
 */

result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);


// As you can see, it creates an array of all the elements separated by a space. We can
// split by any character, for example a comma

// Example 2

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);



/** 
 * ! Converting an array to a string
 */


// With the join() method you can convert an array to a string. Here is a basic
// example:
let letters = ["a", "b", "c"];
let x = letters.join(""); // to edit the separation
console.log(x);



/** 
 * ! Working with index and positions
 * ! Working with index and positions
 */

// Being able to find out what index a certain substring is at within your string is very
// useful. For example, when you need to search for a certain word through the user
// input of a log file and create a substring starting at that index. Here is an example of
// how to find the index of a string. The indexOf() method returns the index, a single
// number, of the first character of the substring

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re"); // this returns the very first re that's found
console.log(index_re);

// if it can't find something it returns -1
//For example

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);
// It is logging -1 to indicate that the string we are searching for doesn't occur in the
// target string.


// . Often you will write an if check to see whether it's -1 before dealing
// with the result. For example:

if (poem.indexOf("python") != -1) {
    // do stuff
}


// An alternative way of searching for a particular substring within a string is to use the
// search() method:

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

// this returns the index value

// Much like indexOf(), if it
// cannot find it, it will return -1.

let notFound = searchStr.search("JavaScript");
console.log(notFound);


//we also have a lastIndexOf() method. It returns the index where the
// argument string occurs last. If it cannot find it, it returns -1. Here is an example:

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);

// This returns 24



// Sometimes you will have to do the reverse; instead of looking for what index a string
// occurs at, you will want to know what character is at a certain index position. This is
// where the charAt(index) method comes in handy, where the specified index position
// is taken as an argument


let pos1 = poem.charAt(10);
console.log(pos1);


// This is logging r, because the character at index 10 is the r of red. If you are asking
// for the position of an index that is out of the range of the string, it will return an
// empty string, as is happening in this example:


let pos2 = poem.charAt(1000);
console.log(pos2);


/**
 * ! Creating substrings
 */


// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

/** this will log
 * !1: e a substring
 * !2: Cre
 */


/**
 * ! Replacing parts of the string
 */

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

// If you don't capture the result, it is gone,
// because the original string will not get changed. If the string you are targeting
// doesn't appear in the original string, the replacement doesn't take place and the
// original string will be returned:

let new_hi2 = hi.replace("not there", "never there");
console.log(new_hi2);

// This logs Hi buddy

// One last note here, it is only changing the first occurrence by default. So this example
// will only replace the first hello in the new string:

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);

// This logs oh hello. If we wanted to replace all the occurences, we could use the
// replaceAll() method. This will replace all occurrences with the specified new string,
// like this:

let new_s4 = s3.replaceAll("hello", "oh");
console.log(new_s4);

// Let's make it a bit more complicated and say that we'd like the first letter of the
// sentence to be capitalized. We can do this by combining some of the methods we
// have seen already right now: 

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);

// We are chaining the methods here; we first grab the first character of fixed_caps
// with charAt(0) and then make it uppercase by calling toUpperCase() on it. We then
// need the rest of the string and we get it by concatenating slice(1).



/**
 * ? The start and end of a string
 * ? Sometimes you would want to check what a string starts or ends with. You've
guessed it, there are built-in methods for this on string. We can imagine this chapter
is tough to work through, so here is a little encouragement and an example at the
same time:
 */

let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);

// This will log true to the console, because the sentence starts with You.

// Careful here,
// because it is case sensitive. So the following example will log false:

let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2); // false



/**
 * ! Number methods
 */

// Checking if something is (not) a number
// This can be done with isNaN().

let b = 34;
console.log(isNaN(b));
console.log(!isNaN(b));
let str = "hi";
console.log(isNaN(str));



// Checking if something is finite


// By now you might be able to guess the name of the method on Number that checks
// whether something is finite. It is a very popular one and has been made into a global
// method as well, and its name is isFinite(). It returns false for NaN, Infinity, and
// undefined, and true for all other values:


let xb = 3;
let strr = "finite";
console.log(isFinite(xb));
console.log(isFinite(strr));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));

// true
// false
// false
// false

// The only finite number in this list is x. The others are not finite. A string is a not a
// number and is therefore not finite. Infinity is not finite and 10 divided by 0 returns
// Infinity (not an error).


/**
 * ? Checking if something is an integer
 * ! Yes, this is done with isInteger()
 * ?  it returns true if the value is an integer and false
* ? when it's not:
 */

let z = 3;
let strz = "integer";
console.log(Number.isInteger(z));
console.log(Number.isInteger(strz));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

// true
// false
// false
// false


/**
 * ! Specifying precision
 */

// There is also a method to specify precision. Again this is different from the rounding
// methods in the Math class, since we can specify the total number of numbers to look
// at. This comes down to JavaScript looking at the total number of numbers. It is also
// counting the ones before the dot:

let v = 1.23456;
let newX = v.toPrecision(2); 

// So the value of newX will be 1.2 here. And also here, it is rounding the numbers:

let xa = 1.23456;
let newXa = xa.toPrecision(4);
console.log(newXa);

// This will log 1.235.


/**
 * ! Math methods
 * ? Finding the highest and lowest number
 * There is a built-in method max() to find the highest number among the arguments.
You can see it here:
 */


let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

/**
 * ! Math methods
 * ? we can find the lowest number:
 *
 */

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

/**
 * ! If you try to do this with nonnumeric arguments, you will get NaN as a result:
 */ 

//Example

let highestOfWords = Math.max("hi", 3, "bye");
console.log(highestOfWords)

/**
 * ? Square root and raising to the power of
 */


// The method sqrt() is used to calculate the square root of a certain number. Here you
// can see it in action:


let results = Math.sqrt(64);
console.log(results);

// This will log 8, because the square root of 64 is 8

let result2 = Math.pow(5, 3);
console.log(result2);

// We are raising 5 to the power of 3 here (53), so the result will be 125, which is the
//     result of 5*5*5.


/**
 * ! Turning decimals into integers
 * ! There are different ways to turn decimals into integers. Sometimes you will want to
 * ! round a number. This you can do with the round() method:
 */

let m = 6.78;
let n = 5.34;
console.log("X:", m, "becomes", Math.round(m));
console.log("Y:", n, "becomes", Math.round(n));


// X: 6.78 becomes 7
// Y: 5.34 becomes 5


/**
 * ! Rounding up 
 * ! we use the .ceil() method
 * ! The ceil() method is always rounding up to the first integer it encounters.
 */

let ma = 6.78;
let na = 5.34;
console.log("X:", ma, "becomes", Math.ceil(ma));
console.log("Y:", na, "becomes", Math.ceil(na));

// ma: 6.78 becomes 7
// na: 5.34 becomes 6

let negativeX = -ma;
let negativeY = -na;

console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// negativeX: -6.78 becomes -6
// negativeY: -5.34 becomes -5


/**
 * ! trunc method 
 * ! . It is not rounding down, it is
 * ! simply only returning the integer part:
 * 
 */

let pa = 6.78
let oo = 5.34

console.log("X:", pa, "becomes", Math.trunc(pa));
console.log("Y:", oo, "becomes", Math.trunc(oo));

// X: 6.78 becomes 6
// Y: 5.34 becomes 5



// When we use negative numbers for trunc() we can see the difference:

// negativeX: -6.78 becomes -6
// negativeY: -5.34 becomes –5

/**
 * ! Exponent and logarithm 
 * ? The exponent is the number to which a base is being raised.
 * ! we use this to calculate exponents
 */


let ex = 2;
let exp = Math.exp(ex);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);

// Exp: 7.38905609893065
// Log: 2


/**
 * ! Date methods
 */

