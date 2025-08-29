##  ASSIGNMENT-05
### Answer to the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   
### Answer-1:
getElementById: Selects one single element by folowing its id.
  
getElementByClass: Selects all elements with a specifiq class name.Returns HTML collection(like an array).
 
querySelector: Selects the first element that matches a CSS selector and returns first matches elements.

querySelectiorAll: Return all matches elements(nodeList).

2. How do you **create and insert a new element into the DOM**?
   
### Answer-2:
create a new element and insert a new element into the DOM, we follow two main steps:
	 
Create Element
	const newChild =document.createElement();
	      
Insert new element
	const nameList=document.getElementById('name-list');
		  nameList.appendChild(newChild);

3. What is **Event Bubbling** and how does it work?
   
### Answer-3:
Event babbling is a dom method whereby an event bubbles up through the dom tree (from child to parent element),when it is triggered on an element.

An event is triggered when an element (such as a button) is clicked.  The event handler is activated if one is set for the element.
Subsequently, the event "bubbles up" to the parent elements.  The parent event handler is activated if an event handler is set for it. 
The event keeps bubbling until it hits the document element at the top.

	const mother = document.getElementById(".mother");
	const daughter = document.getElementById(".daughter");
	
	mother.addEventListener("click,function(){
	console.log("mother clicked");
	})
	
	daughter.addEventListener("click",function(){
	console.log("daughter clicked")
	});
	
4. What is **Event Delegation** in JavaScript? Why is it useful?
   
### Answer-4:
Event Delegation is a technique of javaScrift where we attach a single event handler to a parent element to handle  events on its all child elements.
 
 It is useful for many resons,like:-
	1.It reduce memory uses.
	2.It works Daynamically.
	3.It create fewer event listeners with similar logic etc.
	
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   
### Answer-5:
preventDefault():It stops the default action of an element.
Example:If a link is clicked,it won't navigate to another page.
				 
stopPropagation():It stops the event from bubbling up to parent elements or capturing down to child elements.
