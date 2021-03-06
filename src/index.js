import './styles.css';
import menuData from './menu.json';
import menuTempl  from './gallery-items.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menu.innerHTML = menuTempl(menuData);

let localTheme = localStorage.getItem('theme');
if (!Object.values(Theme).includes(localTheme)) localTheme = Theme.LIGHT;
refs.body.classList.add(localTheme);
refs.themeSwitchToggle.checked = localTheme === Theme.DARK;

refs.themeSwitchToggle.addEventListener('change', onThemeSwitch);

function onThemeSwitch(e) {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
  localStorage.setItem(
    'theme',
    e.currentTarget.checked ? Theme.DARK : Theme.LIGHT,
  );
}