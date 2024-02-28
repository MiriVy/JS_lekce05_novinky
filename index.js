//Novinky
//1
const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

//2
const newsElement = document.querySelector(".news")
newsElement.style.backgroundColor = "white"
newsElement.style.maxWidth = "60rem" 

//3
const h1Element = document.querySelector("h1")
h1Element.classList.add("news__title")
h1Element.textContent = "Aktuální novinky"

//4
const zprava1Element = document.querySelector("#zprava1")
zprava1Element.classList.add("post--main")

//5
const zprava3Element = document.querySelector("#zprava3 img")
zprava3Element.src = "images/zprava3-novy.jpg"
