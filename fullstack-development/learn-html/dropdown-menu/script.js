// script.js

document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
  
    dropdownBtn.addEventListener('click', function() {
      dropdownContent.classList.toggle('show');
    });
  
    // Close the dropdown content if the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('#dropdownBtn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    });
  });
  