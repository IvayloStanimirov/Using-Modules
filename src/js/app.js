import "../scss/app.scss";


const R = require('ramda');
// Importing ramada.js
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  var getAges = R.pluck('class');
  // Getting the classes from the ArrayToPluck
  let arrayOfTheClasses =  getAges(arrayToPluck);
  // Storing the classes in a array
  let counter = 0;
  const articles = document.querySelectorAll("article");

  articles.forEach((articele) => {
      
      articele.classList.add(arrayOfTheClasses[counter]);
      counter++;
  })
  // Adding the classes to the articles
  
});
