import "./styles.css";
import menu from "./menu.json";
import menuCardtpl from "./template/menuCardTpl.hbs";

const listMenuRef = document.querySelector(".js-menu");
const checkboxRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.body;
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

let localTheme = localStorage.getItem("theme");
if (!Object.values(Theme).includes(localTheme)) localTheme = Theme.LIGHT;
bodyRef.classList.add(localTheme);
checkboxRef.checked = localTheme === Theme.DARK;

const menuMarkup = menuCardtpl(menu);
listMenuRef.insertAdjacentHTML("beforeend", menuMarkup);

checkboxRef.addEventListener("change", themeSwitcher);

function themeSwitcher(event) {
  let status = event.target.checked;
  localStorage.setItem("theme", status ? Theme.DARK : Theme.LIGHT);
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
}
