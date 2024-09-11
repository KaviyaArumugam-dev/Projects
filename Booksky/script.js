//overlay open-close parts

var overlay = document.querySelector(".overlay")
var bookpopup = document.querySelector(".book-popup")
var addbutton = document.getElementById("add-button")
var cancel = document.getElementById("cancel")
var addpopup = document.getElementById("add-popup")
addbutton.addEventListener("click",function(){
      overlay.style.display="block"
      bookpopup.style.display="block"
})
cancel.addEventListener("click",function(event){
     event.preventDefault()         // prvent from reload 
     overlay.style.display="none"
     bookpopup.style.display="none"
})
addpopup.addEventListener("click",function(){
     overlay.style.display="none"
     bookpopup.style.display="none"
})

   

// select popup properties part

var container = document.querySelector(".container")
var addpopup = document.getElementById("add-popup")
var bookForm = document.getElementById("book-form")
var booktitleinput = document.getElementById("book-title-input")
var authornameinput = document.getElementById("author-name-input")
var textareainput = document.getElementById("textarea-input")


// create book-container

addpopup.addEventListener("click",function(event){
     event.preventDefault();
     var div= document.createElement("div")  //create element
     div.setAttribute("class","book-container")   //creating attributes and tags
     div.innerHTML=`<h2>${booktitleinput.value}</h2>
                    <h5>${authornameinput.value}</h5>
                    <p>${textareainput.value}</p>
                    <button onclick="deletebook(event)">Delete</delete>`
     container.append(div)     //append
     bookForm.reset()  //rest the form
})
var deletecontent= document.getElementById("delete-content")
function deletebook(event){
    event.target.parentElement.remove()
}

