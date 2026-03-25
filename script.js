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
        behavior: 'smooth'
    });
}

// Initialise page on load
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showHome();

    // ── Floating Sidebar buttons ──────────────────────────────────────
    const sidebar = document.getElementById('floatingSidebar');

    if (sidebar) {
        // Print
        sidebar.querySelector('.fsb-print').addEventListener('click', function(e) {
            e.preventDefault();
            printPage();
        });

        // Scroll to top
        sidebar.querySelector('.fsb-top').addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });

        // Home
        sidebar.querySelector('.fsb-home').addEventListener('click', function(e) {
            e.preventDefault();
            showHome();
        });

        // Touch support
        sidebar.querySelector('.fsb-print').addEventListener('touchend', function(e) {
            e.preventDefault();
            printPage();
        });
        sidebar.querySelector('.fsb-top').addEventListener('touchend', function(e) {
            e.preventDefault();
            scrollToTop();
        });
        sidebar.querySelector('.fsb-home').addEventListener('touchend', function(e) {
            e.preventDefault();
            showHome();
        });
    }

    // ── Panel cards ───────────────────────────────────────────────────
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

    // Prevent default link behaviour for navigation
    const links = document.querySelectorAll('a[onclick*="show"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    // Ctrl+H — go home
    if (event.key.toLowerCase() === 'h' && event.ctrlKey) {
        event.preventDefault();
        showHome();
    }

    // Ctrl+T — scroll to top
    if (event.key.toLowerCase() === 't' && event.ctrlKey) {
        event.preventDefault();
        scrollToTop();
    }

    // Ctrl+P — print (supplement browser default)
    if (event.key.toLowerCase() === 'p' && event.ctrlKey) {
        // Let browser handle it natively
    }
});
