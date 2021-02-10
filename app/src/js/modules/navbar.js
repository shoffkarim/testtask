function toggleBar() {
  if (document.querySelector(".js-burger")) {
    const btnBurger = document.querySelector(".js-burger");
    const nav = document.querySelector("nav.js-nav");
    const navItemsSub = document.querySelectorAll(".nav-item--sub");
    btnBurger.addEventListener("click", function () {
      nav.classList.toggle("js-nav-open");
      navItemsSub.forEach((i) => i.classList.toggle("sub-hidden"));
    });
  }
}

export default toggleBar;