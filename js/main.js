
// let btn1=document.querySelector(".btn1")
// let box1=document.querySelector(".box")

// btn1.addEventListener("click",function()
// {
// box1.style= 
// `
// color:red;
// bacground:blue;
// font-size:30px
// `

    
// })


 





let my=document.getElementById("benimid")
let my1=document.getElementsByClassName("benimclass")
let list=document.getElementsByTagName("ul")
let link=document.querySelector("a")


link.getAttribute("href")//getattribute --da linki qaytarir
link.setAttribute("href","www.bfllfdb.com")//setattribute--de linki deyisir
// console.log(link);

my.textContent="madde 1-i slme ve degistirme"

let h1 =document.querySelector("h1")
h1.style.color="red";
console.log(my);

let btn=document.querySelector("button")



let button=document.addEventListener("click",function(){

    h1.style.color="blue";
})


