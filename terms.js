// Function to handle responsiveness for desktop and iPhone XR views
function handleResponsiveDesign() {
    const desktopMediaQuery = window.matchMedia("(min-width: 769px)");
    const iPhoneXRMediaQuery = window.matchMedia("(max-width: 828px)");

    if (desktopMediaQuery.matches) {
        // Adjustments for desktop view
        document.body.style.fontSize = "16px";
    } else if (iPhoneXRMediaQuery.matches) {
        // Adjustments for iPhone XR view
        document.body.style.fontSize = "14px";
    }
}

// Initialize functionality
function initializeTermsPage() {
    handleResponsiveDesign();

    // Re-run mobile responsiveness on window resize
    window.addEventListener('resize', handleResponsiveDesign);
}

// Call the function to initialize
initializeTermsPage();
