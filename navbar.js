// navbar.js
function setActive(link) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => navLink.classList.remove('active'));

    // Add active class to the clicked link
    link.classList.add('active');
}
