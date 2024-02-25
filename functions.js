document.addEventListener('DOMContentLoaded', () => {
    // Select all toggle sections
    const toggleSections = document.querySelectorAll('.toggle-section');

    // Add click event listener to each toggle section
    toggleSections.forEach(section => {
        section.addEventListener('click', () => {
            // Get the target from the data-target attribute
            const targetId = section.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Toggle the display of the target element
            if (targetElement.style.display === 'block') {
                targetElement.style.display = 'none';
                section.querySelector('.toggle-indicator').textContent = '+';
            } else {
                targetElement.style.display = 'block';
                section.querySelector('.toggle-indicator').textContent = '-';
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.gre-score-progress');
    setTimeout(() => {
        progressBar.style.width = '100%'; // Simulate progress towards the goal
    }, 500); // Delay to ensure visibility of the animation
});

document.querySelectorAll('.certificate').forEach(certificate => {
    certificate.addEventListener('click', () => {
        const link = certificate.querySelector('a').href; // Get the certificate link
        window.open(link, '_blank'); // Open the certificate link in a new tab
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "A smooth sea never made a skilled sailor.",
        "You grow in proportion to the burden you voluntarily take up.",
        "The person who loves walking, walks further than the one who loves the destination.",
        "The best time to plant a tree was 20 years ago. The second best time is now."
        // Add more quotes here
    ];

    function changeQuote() {
        const quoteText = document.getElementById('quote-text');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerHTML = quotes[randomIndex];
    }

    // Change quote every 10 seconds
    setInterval(changeQuote, 10000);

    // Also change the quote when the page loads
    changeQuote();
});
