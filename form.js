function showSidebar() {
    const home = document.querySelector(".home");
    const sidebar = document.querySelector(".container");
    home.style.display = 'none';
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    const home = document.querySelector(".home");
    const sidebar = document.querySelector(".container");
    home.style.display = 'flex';
    sidebar.style.display = 'none';
}