// script.js
function nextScreen(screenNumber) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden-screen');
    });

    // Show the target screen
    const targetScreen = document.getElementById(`screen-${screenNumber}`);
    if (targetScreen) {
        targetScreen.classList.remove('hidden-screen');
        
        // Add a slight fade-in animation by resetting opacity
        targetScreen.style.opacity = 0;
        setTimeout(() => {
            targetScreen.style.transition = 'opacity 0.3s ease-in-out';
            targetScreen.style.opacity = 1;
        }, 10);
    }
}

// Initial setup to ensure checkboxes behave correctly with custom styling
document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle2');
    if (toggleCheckbox) {
        toggleCheckbox.addEventListener('change', (e) => {
            const label = e.target.nextElementSibling;
            if (e.target.checked) {
                e.target.style.transform = 'translateX(100%)';
                e.target.style.borderColor = '#2563EB'; // Blue
                label.style.backgroundColor = '#2563EB';
            } else {
                e.target.style.transform = 'translateX(0)';
                e.target.style.borderColor = 'white';
                label.style.backgroundColor = '#D1D5DB'; // Gray
            }
        });
        
        // Initialize state
        if (toggleCheckbox.checked) {
            toggleCheckbox.style.transform = 'translateX(100%)';
            toggleCheckbox.style.borderColor = '#2563EB';
            toggleCheckbox.nextElementSibling.style.backgroundColor = '#2563EB';
        }
    }
});
