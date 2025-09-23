var typed = new Typed(".text", {
strings:["Frontened developer", "Web developer"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
})

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});  

