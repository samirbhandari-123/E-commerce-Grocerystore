// seaarch - form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active')
}









// Get the login button element
let loginButton = document.querySelector('#login-btn');

// Add an event listener to the login button
loginButton.addEventListener('click', function() {
    // Display an alert when the login button is clicked
    alert("You clicked the login button!");
});

// login form section

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active')
}


// customer review section

var swiper = new Swiper(".review-slider", {
         loop:true,
         spaceBetween: 20,

         autoplay: {
            delay: 1500,
            disableOnInteraction: false,
         },

         breakpoints: {
            0: {
             slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1020: {
            slidesPerView: 3,
         },   
       },
   });










   

















 
