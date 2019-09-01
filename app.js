//Creating a button that calls a function when clicked to  add Hello. 
//I will still add more functionality as time passes
var btn = document.getElementById('hi');
btn.addEventListener("click", sayHello);

function sayHello() {
    alert("Hello there");
}

// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';

header.classList.add('text-center');
sidebar.classList.remove("bg-info");
sidebar.classList.add('bg-success');

//using the style property to modify JS 
header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = "#d4bf6d";

//creating a new artilcle  and appending it to the web page

let newArticle = document.createElement('article');
let newParagraph = document.createElement('p');
let newHeading = document.createElement('h3');

newHeading.textContent = `Article 004`;
newParagraph.textContent = `In previous   looked at all the essential JavaScript object theory and syntax details,
 giving you a solid base to start from. In this article we dive into a practical exercise,
 giving you some more practice in building custom JavaScript objects, with a fun and colorful result.`

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);
newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');
newArticle.setAttribute('id', 'art-004');

//Add the new article to the DOM by assessing the main element
const main = document.querySelector('main');
main.appendChild(newArticle);