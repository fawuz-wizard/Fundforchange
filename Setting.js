// Function to initialize settings page behavior
function initializeSettingsPage() {
    document.getElementById('filter-feed').addEventListener('change', function () {
        console.log('Feed filter set to:', this.value);
    });

    document.getElementById('message-preference').addEventListener('change', function () {
        console.log('Message preference set to:', this.value);
    });

    document.getElementById('platform-status').addEventListener('change', function () {
        console.log('Platform status set to:', this.value);
    });

    document.getElementById('theme').addEventListener('change', function () {
        const theme = this.value;
        console.log('Theme set to:', theme);
        document.body.classList.toggle('dark-theme', theme === 'dark');
    });

    document.getElementById('language').addEventListener('change', function () {
        console.log('Language set to:', this.value);
    });

    document.getElementById('contact-button').addEventListener('click', function () {
        alert('Change email/phone functionality to be added.');
    });

    document.getElementById('password-button').addEventListener('click', function () {
        alert('Change password functionality to be added.');
    });

    document.getElementById('donation-alerts').addEventListener('change', function () {
        console.log('Donation alerts set to:', this.checked);
    });

    document.getElementById('comment-alerts').addEventListener('change', function () {
        console.log('Comment alerts set to:', this.checked);
    });

    document.getElementById('font-settings').addEventListener('change', function () {
        console.log('Font setting set to:', this.value);
        document.body.style.fontFamily = this.value === 'default' ? 'Arial, sans-serif' : this.value;
    });

    document.getElementById('blocked-profiles-button').addEventListener('click', function () {
        alert('Blocked profiles management functionality to be added.');
    });

    document.getElementById('payment-method').addEventListener('change', function () {
        console.log('Payment method set to:', this.value);
    });

    document.getElementById('social-media-button').addEventListener('click', function () {
        alert('Link social media accounts functionality to be added.');
    });
}

// Call the function to initialize
initializeSettingsPage();
