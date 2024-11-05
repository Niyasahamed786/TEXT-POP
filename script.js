var overlaypop=document.querySelector(".overlay")
var inputcontainer=document.querySelector(".input-container")
var addbtn=document.querySelector(".btn")
  
addbtn.addEventListener("click",function(){
    overlaypop.style.display="block"
    inputcontainer.style.display="block"
})

//select cacle button

var canclebtn=document.querySelector(".input-cancle")
canclebtn.addEventListener("click",function(event){
  event.preventDefault()
   overlaypop.style.display="none"
    inputcontainer.style.display="none"
})

//select container input-title input-author input-text
var inputsave=document.querySelector(".input-save")
var container= document.querySelector(".container")
var inputtitle=document.querySelector(".input-title")
var inputdate=document.querySelector(".input-date")
var inputtext=document.querySelector(".input-text")


inputsave.addEventListener("click",function(event){
    event.preventDefault()
    overlaypop.style.display="none"
    inputcontainer.style.display="none"
    var div= document.createElement("div")
    div.setAttribute("class","text-container")
    div.innerHTML=`<h2>${inputtitle.value}</h2>
    <h3>${inputdate.value}</h3>
    <p>${inputtext.value}</p>
   <button class="conbtn" onclick=" deletebook(event)">delete</button>`
   container.append(div)
   inputtitle.value='';
   inputdate.value='';
   inputtext.value='';
   labtitled.style.top="22%"
   labtitled.style.left="11%"

   labnote.style.bottom="24%"
   labnote.style.left="11%"

   labdated.style.top="46%"
   labdated.style.left="11%"
})

function deletebook(event){
    event.target.parentElement.remove()
    alert(" deleted successfully")
}

var labtitled=document.querySelector(".labtitle")

function downpan(){
    labtitled.style.top="21%"
     labtitled.style.left="10%"
    
     
  }

  var labnote=document.querySelector(".labnote")
  function shortnote(){
    labnote.style.bottom="33%"
    labnote.style.left="5%"
     
  }


function mousor(){
  labtitled.style.top="13%"
   labtitled.style.left="5%"
   
}
var labdated =document.querySelector(".lab-date")
function labdate(){
  labdated.style.top="35%"
  labdated.style.left="5%"
}
