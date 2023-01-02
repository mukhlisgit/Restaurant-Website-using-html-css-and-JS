

window.addEventListener("load", function(){
   /*------------ page loader ------------------*/
   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(function(){
      document.querySelector(".page-loader").style.display="none";
   },600);
   /* ----------- animation on scroll -------------- */
   AOS.init();
});

/* ------------------ toggle navbar ------------------------ */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function(e){
   if(e.target.closest(".nav-item")){
       toggleNav();
   }
}); 

/*-------------- sticky header --------------------- */
window.addEventListener("scroll", function(){
     if(this.pageYOffset > 60){
         document.querySelector(".header").classList.add("sticky");
     }
     else{
        document.querySelector(".header").classList.remove("sticky");
     }
});

/*------------------- menu tabs ---------------------- */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
      const target = e.target.getAttribute("data-target");
      menuTabs.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const menuSection = document.querySelector(".menu-section");
      menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
      menuSection.querySelector(target).classList.add("active");
      // animation on scroll
      AOS.init();
   }
});


// Get the modal
var modal = document.getElementsByClassName("menu-item-title");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("menu-item-title");
var modalImg = document.getElementsByClassName("menu-item-title");
var captionText = document.getElementsByClassName("menu-item-title");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



 
