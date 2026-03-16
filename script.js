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

// Export as PDF functionality
function exportPDF() {
    // Get the current page content
    const currentPage = document.querySelector('.page.active');
    const pageTitle = currentPage.querySelector('h2')?.textContent || 'Interview Panel Guide';
    
    // Create a temporary container with printable content
    const element = currentPage.cloneNode(true);
    
    // Remove buttons from cloned element
    const buttons = element.querySelectorAll('.btn-top, .btn-home');
    buttons.forEach(btn => btn.remove());
    
    // PDF options
    const options = {
        margin: 10,
        filename: `${pageTitle.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Generate PDF
    html2pdf().set(options).from(element).save();
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
