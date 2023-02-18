let item = document.querySelector('#items') ;
var newDiv = document.createElement('div');
// Add class
newDiv.className= 'hello';
// Add id
newDiv.id = 'hellol';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);
// Get the first list item in the items list
const firstListItem = document.querySelector('#items li:first-child');

// Create a new text node with the text "Hello world"
const helloTextNode = document.createTextNode('Hello world');

// Insert the new text node before the first list item
firstListItem.parentNode.insertBefore(helloTextNode, firstListItem);
