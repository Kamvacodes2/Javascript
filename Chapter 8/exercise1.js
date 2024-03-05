// Practice exercise 8.1
// Output the decodeURIComponent() for the string How's%20it%oi20gng%3F to the
// console. Also, encode the string How's it going? to be output into the console.
// Create a web URL and encode the URI:
// 1. Add the strings as variables in the JavaScript code
// 2. Using encodeURIComponent() and decodeURIComponent() output the results
// into the console
// 3. Create a web URI with request parameters http://www.basescripts.
// com?=Hello World";
// 4. Encode and output the web URI into the console

print = (...x) => console.log(...x)
let decoded_Str = "How's%20it%20going%3F";
let encod_Str = "How's it going?";

let decoded_ = decodeURIComponent(decoded_Str);
let encoded_ = encodeURIComponent(encod_Str);

// print(decoded_)
// print(encoded_)

let web = "http://www.basescripts.com?=Hello World";
let encodedWeb = encodeURI(web);

console.log(encodedWeb)


