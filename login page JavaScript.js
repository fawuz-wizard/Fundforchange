// JavaScript for login actions, validations, etc.

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    if (emailOrPhone === "" || password === "") {
        alert("Please enter both email or phone and password.");
        return;
    }

    // Redirect to homepage after successful login
    window.location.href = "FundForChange homepagehtml.html"; // Update with actual homepage URL
});

// Create account button event
document.querySelector('.create-account-btn').addEventListener('click', function() {
    alert("Redirecting to create account page...");
    // Logic for redirecting to the create account page
});