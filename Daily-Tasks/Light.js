// Theme swicher js file
function setTheme(themeName) {
  const body = document.body;

  if (themeName === 'light') {
    // Light class lagao aur dark class hatao
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else if (themeName === 'dark') {
    // Dark class lagao aur light class hatao
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
}