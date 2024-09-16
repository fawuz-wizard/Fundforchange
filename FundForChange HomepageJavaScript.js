// Function to handle responsiveness for desktop and iPhone XR views
function handleResponsiveDesign() {
    const desktopMediaQuery = window.matchMedia("(min-width: 769px)");
    const iPhoneXRMediaQuery = window.matchMedia("(max-width: 828px)");

    if (desktopMediaQuery.matches) {
        // Adjustments for desktop view
        document.body.style.fontSize = "16px";
        document.querySelector('.header h1').style.fontSize = "32px";
        document.querySelector('.post-area textarea').style.height = "150px";

        // Restore vertical icon position for desktop
        const verticalIcons = document.querySelector('.vertical-icons');
        verticalIcons.style.top = '0';
        verticalIcons.style.right = '0';
        verticalIcons.style.height = '100vh';
        verticalIcons.style.width = '50px'; // Ensure consistent width
        verticalIcons.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Make it see-through
    } else if (iPhoneXRMediaQuery.matches) {
        // Adjustments for iPhone XR view
        document.body.style.fontSize = "14px";
        document.querySelector('.header h1').style.fontSize = "24px";
        document.querySelector('.post-area textarea').style.height = "100px";

        // Adjust vertical icon position for iPhone XR
        const verticalIcons = document.querySelector('.vertical-icons');
        verticalIcons.style.top = '100px';
        verticalIcons.style.right = '5px'; // Slightly move icons for iPhone
        verticalIcons.style.height = 'calc(100vh - 100px)'; // Adjust height for screen
    }
}

// Beautification: Add hover effects to icons
function addHoverEffects() {
    const bottomIcons = document.querySelectorAll('.bottom-icon img');
    const verticalIcons = document.querySelectorAll('.vertical-icons .icon img');

    bottomIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Animation for hover
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            icon.style.boxShadow = 'none';
        });
    });

    verticalIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Animation for hover
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            icon.style.boxShadow = 'none';
        });
    });
}

// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Display the uploaded logo immediately on the homepage
function handleLogoUpload() {
    const logoInput = document.getElementById('logoUpload');
    const header = document.querySelector('.header');

    logoInput.addEventListener('change', function () {
        const file = logoInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Logo';
            img.width = 100;
            img.height = 70;
            header.appendChild(img);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    handleResponsiveDesign();
    addHoverEffects();
    handleLogoUpload();
});

// Function to toggle notification dropdown visibility
function toggleNotifications() {
    const notificationDropdown = document.getElementById('notification-dropdown');
    notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
}



// Toggle "Like" button status
function toggleLike(button) {
    if (button.innerHTML === "Like") {
        button.innerHTML = "Liked"; // Change text to "Liked"
        button.style.backgroundColor = "#28a745"; // Change button color to green
    } else {
        button.innerHTML = "Like"; // Change back to "Like"
        button.style.backgroundColor = "#007bff"; // Change button color back to blue
    }
}

// Toggle Comment Section visibility
function toggleCommentSection() {
    const commentSection = document.getElementById("comment-section");
    if (commentSection.style.display === "none") {
        commentSection.style.display = "block"; // Show the comment section
    } else {
        commentSection.style.display = "none"; // Hide the comment section
    }
}

// Submit a comment (you can add further functionality to process the comment)
function submitComment() {
    const commentInput = document.querySelector('.comment-input');
    alert("Comment submitted: " + commentInput.value);
    commentInput.value = ''; // Clear the input after submission
}

// Navigate to the chat section
function navigateToChat() {
    window.location.href = 'chat.html'; // Navigate to chat page
}

// Function to navigate to the chat page
function navigateToChat() {
    window.location.href = 'chat-page.html'; // Replace with the actual path to your chat page
}
