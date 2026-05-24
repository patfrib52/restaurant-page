import "./styles.css";
import restaurantImg from "./my-restaurant.jpg";

function loadHomePage() {
  const homeContent = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Welcome to Le Boucanier";

  homeContent.appendChild(header);
  const paragraph = document.createElement("p");
  paragraph.textContent = "We are the best in Town.";

  content.appendChild(paragraph);
  
  const createImage = (() => {
    const image = document.createElement("img");
    image.src = restaurantImg;
    document.body.appendChild(image);
  })();

  c

}

export default loadHomePage;
