// Function to handle responsiveness for desktop and iPhone XR views
function handleResponsiveDesign() {
    const desktopMediaQuery = window.matchMedia("(min-width: 769px)");
    const iPhoneXRMediaQuery = window.matchMedia("(max-width: 828px)");

    if (desktopMediaQuery.matches) {
        // Adjustments for desktop view
        document.body.style.fontSize = "16px";
        document.querySelector('.header h1').style.fontSize = "32px";
    } else if (iPhoneXRMediaQuery.matches) {
        // Adjustments for iPhone XR view
        document.body.style.fontSize = "14px";
        document.querySelector('.header h1').style.fontSize = "24px";
    }
}

// Hover effects for category icons
function addHoverEffects() {
    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Animation for hover
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.05)';
            link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = 'none';
        });
    });
}

// Function to add custom scroll bar to the content section
function addCustomScrollbar() {
    const contentSection = document.querySelector('.content-section');
    
    contentSection.style.overflowY = 'scroll'; // Enable vertical scrolling
    contentSection.style.height = 'calc(100vh - 100px)'; // Adjust height to fit the layout

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

// Initialize the categories page functionality
function initializeCategoriesPage() {
    handleResponsiveDesign();
    addHoverEffects();
    addCustomScrollbar();

    // Re-run mobile responsiveness on window resize
    window.addEventListener('resize', handleResponsiveDesign);
}

// Call the function to initialize the page
initializeCategoriesPage();
