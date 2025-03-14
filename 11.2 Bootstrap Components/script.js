document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
    const themeIconElement = document.getElementById('mode');
    

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    // Set the initial theme icon
    themeIconElement.innerHTML = currentTheme === 'dark' ? '<i class="bi bi-brightness-high-fill"></i>' : '<i class="bi bi-moon-fill"></i>';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
            themeIconElement.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
            themeIconElement.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }
    });
});