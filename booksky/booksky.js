var poverlay=document.querySelector(".poverlay")
var popupbox=document.querySelector(".popupbox")
var addpopup =document.getElementById("add-button")
var cancel = document.getElementById("cancel")

addpopup.addEventListener("click",function(){
    poverlay.style.display="block"
    popupbox.style.display="block"
})

cancel.addEventListener("click",function(event){
 event.preventDefault()
     poverlay.style.display="none"
    popupbox.style.display="none"
})

var contain =document.querySelector(".contain")
var addbook = document.querySelector(".addd")
var booktitle =document.getElementById("btitle")
var bookauthor = document.getElementById("bauthor")
var bookdesc = document.getElementById("bnote")

addbook.addEventListener("click",function(event){
 event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontain")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdesc.value}</p>
    <button onclick="dlt(event)">remove</button>`
    contain.append(div)
    poverlay.style.display="none"
    popupbox.style.display="none"

})

function dlt(event)
{
 event.target.parentElement.remove()
}