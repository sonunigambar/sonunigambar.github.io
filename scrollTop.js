window.onscroll = function() {
    toggleScrollToTopBtn();
};

// Function to toggle visibility based on scroll position
function toggleScrollToTopBtn() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        scrollToTopBtn.style.display = "block";  // Show the button when scrolling
    } else {
        scrollToTopBtn.style.display = "none";   // Hide the button at the very top
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Add event listener for click on the button
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);
