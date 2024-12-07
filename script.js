// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {

    // Handle Dropdown Menu
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdownbtn');
        const content = dropdown.querySelector('.dropdown-content');

        // Show dropdown content when hovering over the dropdown button
        button.addEventListener('mouseover', function() {
            content.style.display = 'block';
        });

        // Hide dropdown content when the mouse leaves
        dropdown.addEventListener('mouseleave', function() {
            content.style.display = 'none';
        });
    });

    // Handle Tab Links (If you want to show sections on tab click)
    const tabLinks = document.querySelectorAll('.tablink');
    const tabContents = document.querySelectorAll('.tabcontent');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', function() {
            const pageName = tab.getAttribute('onclick').split("'")[1]; // Extract page name
            openPage(pageName);
        });
    });

    // Function to open tabs (display specific content)
    function openPage(pageName) {
        tabContents.forEach(content => {
            if (content.id === pageName) {
                content.style.display = 'block'; // Show the content for this tab
            } else {
                content.style.display = 'none'; // Hide the others
            }
        });
    }

    // Set the default tab to show on page load
    openPage('Home');  // This matches the defaultOpen from the HTML script

    // Example of additional functionality: Alert on click
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        alert('Home link clicked!');
    });

});
