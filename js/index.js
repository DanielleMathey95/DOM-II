// Your code goes here
const funBus = document.querySelector(".intro img")
funBus.addEventListener("mouseenter", () => {
  funBus.style.transform = "scale(1.2)";
  funBus.style.transform = "all 0.3s";
});//Scales up the header image when mouse is over it

funBus.addEventListener("mouseleave", () => {
  funBus.style.transform = "scale(1)";
  funBus.style.transform = "all 0.3s";
});//Scales header image back down when mouse moves away

const changeLogo = document.querySelector('.logo-heading');
changeLogo.addEventListener('dblclick', () => {
  changeLogo.style.color = 'green';
});//Changes color of Fun Bus from black to green when you double click on it

const stopLinks = document.querySelector(".nav")
stopLinks.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped")
});//Stops links from refreshing page

let changeColor = document.querySelector(".intro h2");
changeColor.addEventListener("mousedown", () => {
  changeColor.style.color = 'blue';
});//Changes the color of Welcome to Fun Bus when mouse is clicked/held down on the text

let changeColor2 = document.querySelector(".intro p");
changeColor2.addEventListener("mouseup", () => {
  changeColor2.style.color = 'orange';
});//Changes the color of intro paragraph to orange when you let go of the mouse

const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "lightgrey";
});//changes the background color of the body when you click on it

const adventureImg = document.querySelector(".img-content img");
window.addEventListener("resize", () => {
  adventureImg.src = "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80";
});//Changes original image to a new image when you resize the window

const entirePage = document.querySelector("body");
entirePage.addEventListener("keypress", (event) => {
  entirePage.style.backgroundColor = "lightblue";
});//Changes background color to light blue when you press any key on the keyboard

entirePage.addEventListener("keyup", (event) => {
  entirePage.style.backgroundColor = "white"
});//Changes background color back to white when you release the key you pressed on the keyboard that activates the background color change

window.addEventListener("load", (event) => {
  alert("Hopefully this isn't the bus from Nightmare on Elm Street 2")
});//Adds popup when the page loads