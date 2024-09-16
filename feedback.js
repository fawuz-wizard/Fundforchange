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

// Display the uploaded logo immediately on the homepage
function handleLogoUpload() {
    const logoInput = document.getElementById('logoUpload');
    const header = document.querySelector('.header');

    logoInput.addEventListener('change', function () {
        const file = logoInput.files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            const logo = document.createElement('img');
            logo.src = reader.result;
            logo.alt = 'Logo';
            logo.style.width = '50px'; // Adjust logo size as needed
            logo.style.height = '50px';
            logo.style.marginTop = '10px';

            // Append the uploaded logo to the header
            header.appendChild(logo);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

// Scroll-to-top utility for vertical icon interactions
function scrollToTopOnClick() {
    const verticalIcons = document.querySelectorAll('.vertical-icons .icon img');
    
    verticalIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

// Function to add custom scroll bar to the content section
function addCustomScrollbar() {
    const contentSection = document.querySelector('.content-section');
    
    contentSection.style.overflowY = 'scroll'; // Enable vertical scrolling
    contentSection.style.height = '400px'; // Adjust height to fit the layout
    contentSection.style.scrollbarWidth = 'thin'; // Thin scrollbar for Firefox

    // For WebKit browsers (Chrome, Safari)
    const style = document.createElement('style');
    style.innerHTML = `
        .content-section::-webkit-scrollbar {
            width: 8px;
        }
        .content-section::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .content-section::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 10px;
        }
        .content-section::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    `;
    document.head.appendChild(style);
}

// Initializing all the functions
function initializeHomepage() {
    handleResponsiveDesign();
    addHoverEffects();
    handleLogoUpload();
    scrollToTopOnClick();
    addCustomScrollbar();

    // Re-run mobile responsiveness on window resize
    window.addEventListener('resize', handleResponsiveDesign);
}

// Call the function to initialize
initializeHomepage();

// Toggle dropdown menu when the three-line button is clicked
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}




