import './styles.css';
import menu from './menu.json';
import itemsTemplate from './gallery-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkbox = document.querySelector("input[name=theme]");
  const bodyEl = document.querySelector("body");
  const bodyTheme = 
  checkbox.addEventListener('change', function() {
    if (this.checked) {
        bodyEl.classList.remove(Theme.LIGHT)
        bodyEl.classList.add(Theme.DARK)
    } else {
        bodyEl.classList.remove(Theme.DARK)
        bodyEl.classList.add(Theme.LIGHT)
    }
  });