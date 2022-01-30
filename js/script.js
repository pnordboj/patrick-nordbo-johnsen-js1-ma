//Question 1
//Create an object called cat.
//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
        complain: "Meow!",
        catComplain: function() {
            console.log(cat.complain);
        }
    }

console.log(cat);

//Question 2
//Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
//Change its innerHTML value to "Updated heading".

const heading = document.querySelector("h3");

function updateH3() {
    heading.innerHTML = "Updated Heading";
}

updateH3();

// Question 3
// Use the style property on the heading variable from the question above to change its font size to "2em".

function sizeH3() {
    heading.style.fontSize = "2em";
}

sizeH3();

// Question 4
// Add a class to the heading variable called subheading.

function classH3() {
    heading.className = "subheading";
}

classH3();

// Question 5
// Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
// Loop through the p elements and change the colour of each to "red".

const paragraphs = document.querySelectorAll("p");

function updateParagraph() {
    for (let p = 0; p < paragraphs.length; p++) {
        paragraphs[p].style.color = "red";
    }
}

updateParagraph();

// Question 6
// Select the div with a class of results, 
// assign it to a variable called resultsContainer and set its inner HTML to be 
// <p>New paragraph</p> and its background colour to be yellow.

const resultsContainer = document.querySelector(".results");

function newParagraph() {
    resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
    resultsContainer.style.backgroundColor = "yellow";
}

newParagraph();

// Question 7
// Create a function that has one parameter called list.
// Inside the function, loop through the list parameter and console log the name property in each object.
// Call the function and pass in the cats variable in the script.js file in the repo.

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listParameter(list) {
    list = cats;
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listParameter();

// Question 8
// Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display “Age unknown” instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

const catHTML = document.querySelector(".cat-container");

const copyCat = [...cats];

function createCats(cats) {
    console.log(copyCat);
    cats = copyCat
    for (let c = 0; c < cats.length; c++) {
        console.log(cats[c]);
        const catList = cats[c]
        if (catList.age === undefined) {
            catList.age = "Age Unknown";
        }
        catHTML.innerHTML += '<div class="TestCat">' + '<h5>' + catList.name + '</h5>' + '<p>' + catList.age + '</p>' + '</div>';
    }
}

createCats();