
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.dashboard-sidebar a');
    const contentSections = document.querySelectorAll('.dashboard-content .content-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');

            const targetId = link.getAttribute('href').substring(1);

            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target content section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
