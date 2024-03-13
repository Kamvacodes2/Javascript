'use strict'

    // to traverse the DOM
    // We can
    // do this by stepping into the document object and navigating our way from there
    // onwards.

    // We can start by using the body property from the document. This contains everything
    // that's inside the body element. In the console, we'll type:
    // console.dir(document.body);


    // To get to the treasure using children you would have to use:
    /**
     * ?console.dir(document.body.children.forest.children.tree2.children.mushroom.children.bug)
     * 
     */
    // on every element we select, we have to select the children again.
    // first, we grab the children from the body, then we select forest from these children.
    // Then from forest, we want to grab its children again, and from these children we
    // want to select tree2. From tree2 we want to grab the children again, from these
    // children we need shrubbery. And then finally, we can grab the children from
    // shrubbery and select treasure.

    /**
     * ? To get to the treasure using childNodes
     * childNodes is an array
     *  you will have to select the right index to select the right child.
     * ? console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);
     */


    // moving up the DOM;
    // document.body.children.forest.children.tree2.parentElement;



    // we can also move sideways. For example, if we select tree2 like this:

    // document.body.children.forest.children.tree2;
    //We can get to tree1 using:
    // document.body.children.forest.children.tree2.previousElementSibling;
    // And from tree1 we can get to tree2 using:
    //document.body.children.forest.children.tree1.nextElementSibling;

    /**
     * ? Selecting elements as objects
     * we can select elements and make changes to them
     * 
     * ? document.body.children.greeting;
     * gives us the power to manipulate the properties of the element, and the element
    itself, directly
     */

    /**
     * ? Changing innerText
     * ? The innerText property focuses on the text between the opening and closing of the element,
     */

    // document.body.children.greeting.innerText = "Bye!";
    /**
     * ? You can't use this to actually edit HTML or add HTML you can only affect text content
     */

    // Changing innerHTML
    // we use the innerHTML to impact the actual HTML and the text as we wish

    //document.body.children.greeting.innerHTML = "<b>Bye!</b>";

    /**
     * ? Accessing elements in the DOM
     * ? Instead of traversing it step by step as we just did, we are going to use built-in
     * ? methods that can go through the DOM and return the elements that match the
     * ? specifications.
     */

    /**
     * ? Accessing elements by ID
     * ? getElementById() method
     * ? IDs should be unique, as only one result will be returned from the HTML document.
     * ? IDs; cannot contain spaces and must be at least one character
     * ? best practice to make it descriptive and avoid special characters.
     * ?  <div id="two" class="example">Hi!</div>
     * ! document.getElementById("two");
     * ? This would return the full HTML element: <div id="two" class="example">Hi!</div>
     * 
     */

    // Accessing elements by tag name
    /**
     * ? If we ask for elements by tag name, we get an array as a result.
     * ? because there could be more than one element with the same tag name.
     * ? It will be a collection of HTML elements, or HTMLCollection, which is a special JavaScript object
     * ? t's basically just a list of nodes.
     * document.getElementsByTagName("div");
     */


    // document.getElementsByTagName("div").item(1);
    // This will return:
    // <div id="two" class="example">Hi!</div> it goes through the array or HTML collection essentially deping
    //on the index number entered

    /**
     * ? We can also access them by name, using the namedItem() method, like this:
     * ? document.getElementsByTagName("div").namedItem("one");
     */

    /**
     * ? Accessing elements by class name
     * ? document.getElementByClassName("example")
     */


    /**
     * ? Accessing elements with a CSS selector
     * ? We can also access elements using a CSS selector. We do this with querySelector() 
     * ? and querySelectorAll().
     * ? If we state p as a CSS selector, it means all the elements with tag p. This would look like this:
     * document.querySelectorAll("p");
     * If we say p.example, it means all the p tag elements with example as the class. They
    can also have other classes; as long as example is in there, it will match. We can also
    say #one, which means select all with an ID of one.
     */


    /**
     * ! Using querySelector()
     * ? This first option will select the first element that matches the query
     * ? document.querySelector("div");
     * ? It only returns the first div,
     * ? because that's the first one it encounters
     * ? to get a class element we use the dot notation
     * ? document.querySelector(."something")
     * ? Returning <div id="three" class="something">Hi!</div>
     */

    /** 
     * ! Using querySelectorAll()
     * ? to select all the elements that match the query
     * ? This can be done with querySelectorAll()
     * ? document.querySelectorAll("div");
     */

    /**
     * ? Element click handler
     * ? HTML elements can do something when they are clicked.
     * ? because a JavaScript function can be connected to an HTML element.
     * ?  to dynamically add a click handler to the div element, we can select it and specify the
    * ? property via the console:
    * ! document.getElementById("one").onclick = function () {
    * ! alert("Ouch Stop!!"); }
     */

    //? This and the DOM
    //! The this keyword always has a relative meaning
    //?  it depends on the exact context it is in.
    //?  In the DOM, the special this keyword refers to the element of the DOM it belongs to.

    // < !DOCTYPE html >
    //     <html>
    //         <body>
    //             <script>
    //                 function reveal(el){
    //                     console.log(el);}
    //             </script>
    //             <button onclick="reveal(this)">Click here!</button>
    //         </body>
    //     </html>

    //? it will log this <button onclick="reveal(this)">Click here!</button>
    //? it is logging the element it is in, the button element.


    // function reveal(el){console.log(el.parentElement);}
// In the above example, the body is the parent of the button. So if we click the button
// with the new function, it will output:


// Manipulating element style
// ? 1. Select the right element from the DOM.
//? 2. Change the right property of the style property of this element.
// ? To hide something using CSS, we can set the display property of the
//? element to none, like this for a p (paragraph) element

// p {
//     display: none;
//    }


//? And we can toggle it back to visible using:

// p {
//     display: block;
//    }

//? Changing the classes of an element

// With JavaScript, we can change the classes of HTML elements, and this might trigger
// a certain layout that is associated with that class in CSS.

// ? We are going to have a look
// ? at adding classes, removing classes, and toggling classes.

//! Adding classes to elements
//? we utilize classList.add("class you want to add");
//? e.g document.getElementByID("shape").classList.add("hide");
// ? The original element <div id="shape" class="square blue"></div>
//! now becomes <div id="shape" class="square blue hide"></div>

// In this example, we have some CSS specified in the style tag. Elements with the hide
// class have a display: none style, meaning they are hidden

// ? When we click on the Disappear! button, the disappear() function gets called. This
//? one is specified in the script tag. The disappear() function changes the classes by
//? getting the classList property of the element with the ID shape, which is the square
// ? we are seeing. We are adding the hide class to the classList and because of this, the
// ? elements get the display: none layout and we can no longer see it.


//! Removing classes from elements
// document.getElementById("shape").classList.remove("hide");


// ? Toggling classes

//  to add a class when it doesn't already have that particular class
// remove it when it does
// This is called toggling.

//? Pressing the Magic! button will add the class to the classList when it isn't there and
// ? remove it when it is there. This means that you can see the result every time you
//? press the button. The square keeps appearing and disappearing

// ? Manipulating attributes
// attributes are the parts in HTML elements that are followed by equals signs. 

// <a id="friend" class="fancy boxed" href="https://www.google.com">Ask my friend here.</a>
//! The attributes in this example are id, class, and href.
// ? With the setAttribute() method, we can add or change attributes on an element
// This will change the HTML of the page
