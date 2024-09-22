// menu 
const mobileMenu = document.querySelector('.menu-links'); // Select the mobile menu container
const hamburger = document.getElementById('hamburger_icon'); // Select the hamburger icon

// Add event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('visible'); // Toggle the 'visible' class to show or hide the menu
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 99) {
        console.log("Reached");
    }
});

// // document.getElementById('play-icon').addEventListener('click', function() {
// //     document.getElementById('media-popup').classList.remove('hidden');
// // });

// // document.getElementById('close-popup').addEventListener('click', function() {
// //     var iframe = document.querySelector('#media-popup iframe');
// //     var src = iframe.src;
// //     iframe.src = ''; // Temporarily remove the src to stop the video
// //     iframe.src = src; // Reset the src to its original URL to effectively stop the video
    
// //     document.getElementById('media-popup').classList.add('hidden');
// // });

// // our services

// document.addEventListener('DOMContentLoaded', function() {
//     const ourServices = [
//         {serviceTitle: "Pick Up & Drop", serviceDetails: "We’ll pick up from airport while you comfy on your ride."},
//         {serviceTitle: "Pick Up & Drop", serviceDetails: "We’ll pick up from airport while you comfy on your ride."},
//         {serviceTitle: "Room Service", serviceDetails: "Enjoy 24/7 room service with a wide range of dishes."},
//         {serviceTitle: "Free Wi-Fi", serviceDetails: "Stay connected with high-speed internet throughout the hotel."},
//         {serviceTitle: "Free Wi-Fi", serviceDetails: "Stay connected with high-speed internet throughout the hotel."},
//         {serviceTitle: "Spa & Wellness", serviceDetails: "Relax and rejuvenate with our spa and wellness services."},
//     ];

//     let cardsContainer = document.querySelector('.cardsContainer');

//     // Clear existing cards if any
//     cardsContainer.innerHTML = '';

//     ourServices.forEach((item) => {
//         // Create a new card element
//         let card = document.createElement('div');
//         card.className = 'p-4 border border-neutral-200 max-w-sm'; // Adjust to fit your design


//         // Create and set icon
//         let serviceIcon = document.createElement('div');
//         serviceIcon.className = 'leading-[1.7em] icon text-3xl text-primary';
//         serviceIcon.innerHTML = '<i class="fa-solid fa-earth-americas"></i>'; // Adjust icon as needed

//         // Create and set service title
//         let serviceTitle = document.createElement('h3');
//         serviceTitle.className = 'leading-[1.7em] text-3xl font-gilda';
//         serviceTitle.innerText = item.serviceTitle;

//         // Create and set service details
//         let serviceDetails = document.createElement('p');
//         serviceDetails.className = 'leading-[1.7em] font-barlow text-customGray';
//         serviceDetails.innerText = item.serviceDetails;

//         // Append elements to the card
//         card.appendChild(serviceIcon);
//         card.appendChild(serviceTitle);
//         card.appendChild(serviceDetails);

//         // Append the card to the container
//         cardsContainer.appendChild(card);
//     });
// });




