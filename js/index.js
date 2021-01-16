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