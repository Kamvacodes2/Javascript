'use strict'

// Interactive voting system
// The below code will create a dynamic list of people that can be clicked, and it will
// update the corresponding value with the number of times that name was clicked. It
// also includes an input field that will allow you to add more users to the list, each of
// which will create another item in the list that can be interacted with the same as the
// default list items.
// 1. Create an array of people's names called myArray. This will be the default
// original list of names.
// 2. Select the page elements as JavaScript objects so they can easily be selected
// within the code.
// 3. Add event listener to the Add Friend button. Once clicked, this will get the
// value from the input field and pass the values to a function that will add
// the friend list to the page. Additionally, add the new friend's name into the
// people's names array you created. Get the current value in the input field and
// push that value into the array so the array matches the values on the page.
// 4. Run a function to build the content on the page, using the forEach() loop get
// all the items within the array and add them to the page. Include 0 as a default
// for the vote count, as all individuals should start on zero votes.
// 5. Create a main function that will create the page elements, starting with the
// parent table row, tr. Then create three table cell, td, elements. Add content to
// the table cells, including the vote count in the last column, the person name
// in the middle, and the index plus 1 in the first column.
// 6. Append the table cells to the table row and append the table row to the
// output area on the page.
// 7. Add an event listener that will increase the vote counter for that row when
// the user clicks.
// 8. Get the text content from the last column in the row. It should be the value
// of the current counter. Increment the counter by one and make sure the
// datatype is a number so you can add to it.
// 9. Update the last column with the new click counter