// JavaScript to handle chat item hover and click animations

// Add hover effect on chat items
document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        item.style.transform = 'scale(1.02)';
        item.style.transition = 'all 0.2s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
        item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        item.style.transform = 'scale(1)';
    });

    // Add click animation
    item.addEventListener('click', () => {
        item.style.backgroundColor = '#e0f7fa'; // Change background on click
        setTimeout(() => {
            item.style.backgroundColor = '#fff'; // Return to normal after 300ms
        }, 300);
        openChat(item.querySelector('.chat-name').innerText);
    });
});
