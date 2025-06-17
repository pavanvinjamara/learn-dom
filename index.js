// ========== Basic ==============
//  Topic === >Getting elements

// ==> document.getElementById( arg ) // output = single value {}  arg can be varaible or value like string

// let id  = 'name';

// let title = document.getElementById(id);
// console.log(title);
// title.style.color = 'red'

// ===> document.getElementsByClassName(); // output = multiple value ==>[]  arg can be varaible or value like string

// let clas = "name";
// let listOFNames = document.getElementsByClassName(clas);
// console.log(listOFNames);
// listOFNames[0].style.backgroundColor = "red";
// for (let i = 0; i < listOFNames.length; i++) {
//   listOFNames[i].style.backgroundColor = "blue";
// }

//  ==> document.getElementsByTagName();  // output = multiple value ==>[]  arg can be varaible or value like string

// let clas = "h1";
// let listOFNames = document.getElementsByTagName(clas);
// console.log(listOFNames);
// listOFNames[0].style.backgroundColor = "red";
// for (let i = 0; i < listOFNames.length; i++) {
//   listOFNames[i].style.backgroundColor = "blue";
// }

// document.querySelector() ==> value // output = single value  arg can be varaible or value like string
// it can be className, id, tagname it identify whether it is class or id or tag we use selector id(#) ,class(.)
//  if we don't  have selector it is tag

// let id = '#name';

// let clas = '.name';

// let tag = 'h1';

// let title = document.querySelector(id); // it will get first element
// console.log(title);
// title.style.color = 'red'

//  same like querySelector if you want multiple elements of same tag or class we use this

// document.querySelectorAll() ==> value // output = multiple value =[] arg can be varaible or value like string
// it can be className, id, tagname it identify whether it is class or id or tag we use selector id(#) ,class(.)
//  if we don't  have selector it is tag

// let id = '#name';

// let clas = '.name';

// let tag = 'h1';

// let title = document.querySelectorAll(id); // it will get first element
// console.log(title);

// title[0].style.color = 'red',

// Topic ===> Style Elements

// let id  = 'name';

// let title = document.getElementById(id);
// console.log(title);
// title.style.color = 'red'
// it depend on css color => js color | css background-color => backgrounColor
//  in this above we use properties in js ,just remove hypen and after hypen letter become capital which is camelCase

//  ===> Changing text-content <h1> content </h1>

// three method to change text and its content of element
//      => textContent
//      => innerText
//      => innerHTML
// let id = "name";
// let title = document.getElementById(id);
// title.textContent = "pavan";
// title.textContent = "<span>pavan</span>"; //difference between innerHTML & textContent it cannot understand tagname and
// consider has text
// title.innerText = "pavan";
// title.textContent = "<span>pavan</span>"; //difference between innerHTML & textContent it cannot understand tagname and
// consider has text
// title.innerHTML = "pavan";
// title.innerHTML = "<span>pavan</span>";// it Can understand tags

// Topic ===> Create & Remove & append ELement

// let nam = "li";
// // creating Element
// let glossaryItems = document.createElement(nam); //<li></li>
// //  Added text
// glossaryItems.textContent = "Tomatoes"; // <li>Tomatoes</li>
// // Append (pushing into another element)
// let ul = document.getElementById("glossary");
// ul.append(glossaryItems);

// Pushing multiple Items
// let ul = document.getElementById("glossary");
// let glossaries = ["tomatoes", "potatoes", "brinjal", "carrot"];
// for (let i of glossaries) {
//   console.log(i);
//   let nam = "li";
//   let glossaryItems = document.createElement(nam); //<li></li>
//   //  Added text
//   glossaryItems.textContent = i; // <li>Tomatoes</li>
//   // Append (pushing into another element)
//   ul.append(glossaryItems);
// }
// // removing Element
// ul.childNodes[glossaries.length].remove();
// console.log(ul);

// Topic ===> Create and remove Attributes
// let ul = document.getElementById("glossary");
// ul.setAttribute("class", "glossary"); // it accepts two params 1,attribute name, value of that attribute want to push in string
// ul.removeAttribute("name"); // it accepts one argument attribute name in string
// Topic ===> classList and add and remove class
// let id = "name";

// let title = document.getElementById(id);
// title.classList.add("hidden");
// title.classList.remove("hidden");

// Topic ===> children , childNodes, sibling , firstChild , lastChild Elements use
// let ul = document.getElementById("glossary");
// let glossaries = ["tomatoes", "potatoes", "brinjal", "carrot"];
// for (let i of glossaries) {
//   console.log(i);
//   let nam = "li";
//   let glossaryItems = document.createElement(nam); //<li></li>
//   //  Added text
//   glossaryItems.textContent = i; // <li>Tomatoes</li>
//   // Append (pushing into another element)
//   ul.append(glossaryItems);
// }
// // removing Element
// console.log(ul);
// ul.childNodes[glossaries.length].remove();
// console.log(ul.children[0]);
// console.log(ul.firstChild, "firstChild");
// console.log(ul.lastChild, "lastChild");
// console.log(ul.previousSibling, "pervious");
// ========== Events ==============
// https://www.freecodecamp.org/news/event-delegation-javascript/#:~:text=Learn%20how%20to%20use%20%EE%80%80event%20delegation,%EE%80%81%20a%20pattern

// Topic ===> addEventListeners, event Propogation Bubbling, Capturing  & Degelation
// Event propagation is a mechanism that defines how events travel through the DOM tree to reach their target and what happens afterward. This concept is crucial for handling events efficiently in web development.
// Event bubbling is the default behavior where an event starts from the target element and bubbles up to the outermost elements.
// Event Capturing It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler.
// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

// ==> there so many situations which we cannot add event like( onclick, mouseUp, hover ) through html
//  there we can use addeventlistener

// ==> addEventListener add event to the element and it is a element in dom which accept three arguments
// let names = document.getElementById("pavan");

// let item = document.createElement("h1");
// item.textContent = "good man";

// elementName.addEventListener(event Name(click| hover| mosueUP), anonoyms function, bollean ( true | false))
// document.body.append(item);
// names.addEventListener(
//   "mousedown",
//   () => {
//     console.log("pavan");
//   },
//   false
// );

// names.addEventListener("click",function () {
//     console.log("aniket");
//   });

// names.addEventListener("click", printName);

// let parent = document.getElementById("parent");
// let child = document.getElementById("btn");

// parent.addEventListener("click", printName, true);
// child.addEventListener("click", hide, true);
// function printName() {
//   console.log("aniket");
// }
// function hide() {
//   console.log("pavan");
// }
// function hide() {
//   let id = "name";

//   let title = document.getElementById(id);
//   title.classList.add("hidden");
//   // title.classList.remove("hidden");
// }
// it takes three argument one event , second is function it can be arrow or any other function, third true or false

// Topic ===> capturing, bubbling & delagation
