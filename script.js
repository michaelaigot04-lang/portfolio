function openTab(tabId, tabElement) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-contents');
    contents.forEach(c => c.classList.remove('active-tab'));

    // Remove active-link class from all tabs
    const tabs = document.querySelectorAll('.tab-links');
    tabs.forEach(t => t.classList.remove('active-link'));

    // Show selected tab
    document.getElementById(tabId).classList.add('active-tab');
    tabElement.classList.add('active-link');
}
