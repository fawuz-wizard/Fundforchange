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
        document.querySelector('.header h