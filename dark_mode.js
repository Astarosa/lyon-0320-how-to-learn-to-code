function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('dark-mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('dark-mode', 'light');
    }    
}

const darkMode = localStorage.getItem('dark-mode');
document.documentElement.setAttribute('data-theme', darkMode);

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

if (darkMode === 'dark') {
    document.getElementById('toggler').checked = true;
    console.log('Dark mode checkbox status changed to checked');
  } else {
    document.getElementById('toggler').checked = false;
    console.log('Dark mode checkbox status changed to unchecked');
  }
