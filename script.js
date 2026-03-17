// Show home page
function showHome() {
    hideAllPages();
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Show specific panel
function showPanel(panelId) {
    hideAllPages();
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Hide all pages
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
}

// Print page functionality
function printPage() {
    window.print();
}

// Scroll to top of page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    });
}

// Initialise page on load
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showHome();
    
    // Add event listeners to all panel cards for better touch support
    const panelCards = document.querySelectorAll('.panel-card');
    panelCards.forEach(card => {
        const panelId = card.getAttribute('data-panel-id');
        if (panelId) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showPanel(panelId);
            });
            card.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showPanel(panelId);
            });
        }
    });
    
    // Add event listeners to all buttons
    const homeButtons = document.querySelectorAll('.btn-home');
    homeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showHome();
        });
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showHome();
        });
    });
    
    const topButtons = document.querySelectorAll('.btn-top');
    topButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            scrollToTop();
        });
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            scrollToTop();
        });
    });
    
    const printButtons = document.querySelectorAll('.print-btn');
    printButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            printPage();
        });
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            printPage();
        });
    });
    
    // Prevent default link behaviour for navigation
    const links = document.querySelectorAll('a[onclick*="show"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});

// Optional: Keyboard navigation
document.addEventListener('keydown', function(event) {
    // Press 'H' to go home
    if (event.key.toLowerCase() === 'h' && event.ctrlKey) {
        event.preventDefault();
        showHome();
    }
    
    // Press 'T' to go to top
    if (event.key.toLowerCase() === 't' && event.ctrlKey) {
        event.preventDefault();
        scrollToTop();
    }
});
