import "./styles.css";
import restaurantImg from "./my-restaurant.jpg";

function loadMenuPage() {
  const homeContent = document.querySelector("#content");
  const pageContainer = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Welcome to Le Boucanier";
  //   pageContainer.appendChild(header);

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is our Menu of finest French Cuisine";
  //   pageContainer.appendChild(paragraph);

  const createImage = (() => {
    const image = document.createElement("img");
    image.src = restaurantImg;
    pageContainer.append(header, paragraph, image);

    homeContent.appendChild(pageContainer);
  })();
}

export default loadMenuPage;
