


//auto slide show
setInterval(function() {$('#slideshow > div:first').fadeOut(10).next().fadeIn(10).end().appendTo('#slideshow');}, 5000);
$("#slideshow > div:gt(0)").hide();





//selected multiple element
const basicinfo = document.querySelectorAll(".basicinfo");
const navLink = document.querySelectorAll(".nav-link");
//addeventlistener
document.addEventListener('DOMContentLoaded', function() { 
    document.getElementsByClassName("banner2")[0].classList.add('animate-header');});
//button
const submit = document.querySelector("#Submit");
const lname = document.querySelector("#lname");
basicinfo.forEach(n=> n.addEventListener("click", function(){
this.style.color = "tomato";
}));
function thankyou(){
    //selected single element
    let name = document.querySelector("#firstname");
    if(!(name == null)){
    let message = "Thank you" +name.value+"for signing up!";
    alert(message);
    }
    else{
    alert("Thank you!");
    }
    }
//hamburger menu
const hamburger = document.querySelector(".burgericon");
const navMenu = document.querySelector(".navitems");
function mobileMenu() {
console.log("2click");
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}
function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));



