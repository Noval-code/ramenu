const menuBtn = document.querySelector(".hamburger-menu");
const navbarList = document.querySelector(".navbar-list");

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-wrapper");

menuBtn.onclick = () => {
  navbarList.classList.toggle("active");
};
searchBtn.onclick = (e) => {
  searchBox.classList.toggle("active");
  e.preventDefault();
};
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});
