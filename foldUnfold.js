<script>
    // Get all the toggle icons
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const subList = icon.nextElementSibling.nextElementSibling; // Get the associated sub-list div
            
            if (subList.style.display === 'none' || subList.style.display === '') {
                // Unfold the sub-list
                subList.style.display = 'block';
                icon.textContent = '-'; // Change icon to minus
            } else {
                // Fold the sub-list
                subList.style.display = 'none';
                icon.textContent = '+'; // Change icon to plus
            }
        });
    });
</script>
