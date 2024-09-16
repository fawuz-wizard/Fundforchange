// JavaScript for interactive features on the account page

// Enable profile photo change
document.querySelector('.edit-photo-btn').addEventListener('click', function() {
    document.getElementById('photo-input').click(); // Trigger hidden file input when clicking the pen icon
});

document.getElementById('photo-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-photo').src = e.target.result; // Update profile photo
        };
        reader.readAsDataURL(file); // Read selected file
    }
});

// Function to handle info item click and display editable fields
document.querySelectorAll('.info-label').forEach(label => {
    label.addEventListener('click', function() {
        const input = this.nextElementSibling;
        input.focus();
    });
});

// Logout button functionality
document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = 'login page html.html'; // Redirect to login page
});