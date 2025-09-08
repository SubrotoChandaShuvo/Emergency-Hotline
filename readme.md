Here I have answered some questions about JavaScript.

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
 getElementById: It is a DOM method that helps to get a html element and we can edit its functionality by using a specific id. 

 getElementsByClassName: It is also a DOM method that helps to get many html elements and we can edit those elements functionality by using a specific class name. 

 querySelector / querySelectorAll: 
 querySelector is also a DOM method that helps to get first element which is matched with the CSS selector. We can use id, class, tag name etc to select the element.

 querySelectorAll is also a DOM method that helps to get all elements which are matched with the CSS selector. We can also use id, class, tag name etc to select these matched elements. And it returns a NodeList of the matched elements.

2.  How do you create and insert a new element into the DOM?
Answer: 
 I can create a new element by using document.createElement() and to insert the element into the DOM by using appendChild() method. 

3. What is Event Bubbling and how does it work?
Answer: 
 Event Bubbling is a process where an event bubbles up to its parent elements if the event is triggered on a child element. if I clicked to an element then the event first runs on the that child and then it runs on the parent and then it runs on the grandparent and so on until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: 
 In JavaScript Event Delegation is a process where an event is delegated to a parent element from a child element. It is a technique that we use a event listener on a parent element instead of using event listener on each child element. Its help to clean our code and make easy to read and maintain the code.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
 preventDefault() : It is a method that stops the default behavior of an event. For example, if I click on a submit button of a form then it will submit the information and clear the form but if I use preventDefault() then it will not submit the form and it will not clear the form.

 # Emergency-Hotline
