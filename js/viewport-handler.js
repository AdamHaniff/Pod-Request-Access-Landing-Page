import { mobileSiteHTML, tabletSiteHTML } from "./mobile-tablet-markups.js";

function insertNewHTML() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const mainContainer = document.getElementsByTagName("main")[0];

  if (viewportWidth <= 767) {
    mainContainer.innerHTML = mobileSiteHTML;
  } else {
    mainContainer.innerHTML = tabletSiteHTML;
  }
}

insertNewHTML();

window.addEventListener("resize", insertNewHTML);
