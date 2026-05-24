import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;

    content.innerHTML = "";

    if (target.id === "home-btn") {
      loadHomePage();
    }

    if (target.id === "menu-btn") {
      loadMenuPage();
    }

    if (target.id === "about-btn") {
      loadAboutPage();
    }
    console.log(target.id);
  });
});

loadHomePage();
