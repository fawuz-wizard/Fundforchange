// Function to count words and update word count
function updateWordCount() {
    const textarea = document.getElementById("postContent");
    const wordCountDisplay = document.getElementById("wordCount");
    
    textarea.addEventListener('input', () => {
        const text = textarea.value;
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        wordCountDisplay.textContent = `Word Count: ${wordCount}/500`;
    });
}

// Function to validate file size (30MB max)
function handleFileUpload() {
    const fileInput = document.getElementById("fileUpload");
    const fileSizeWarning = document.getElementById("fileSizeWarning");

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file && file.size > 30 * 1024 * 1024) { // Check if file exceeds 30MB
            fileSizeWarning.textContent = "File size exceeds 30MB. Please upload a smaller file.";
        } else {
            fileSizeWarning.textContent = ""; // Clear warning if file size is acceptable
        }
    });
}

// Function to handle responsiveness
function handleResponsiveDesign() {
    const desktopMediaQuery = window.matchMedia("(min-width: 769px)");
    const iPhoneXRMediaQuery = window.matchMedia("(max-width: 828px)");

    if (desktopMediaQuery.matches) {
        document.body.style.fontSize = "16px";
    } else if (iPhoneXRMediaQuery.matches) {
        document.body.style.fontSize = "14px";
    }
}

// Initialize page functions
function initializeCreatePostPage() {
    updateWordCount();
    handleFileUpload();
    handleResponsiveDesign();

    // Re-run mobile responsiveness on window resize
    window.addEventListener('resize', handleResponsiveDesign);
}

// Call initialize function
initializeCreatePostPage();