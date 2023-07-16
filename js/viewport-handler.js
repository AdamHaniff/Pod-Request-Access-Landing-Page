import { mobileSiteHTML, tabletSiteHTML } from "./mobile-tablet-markups.js";

// FLAGS
let isMobileInserted = false;
let isTabletInserted = false;

// EVENT LISTENER CALLBACK FUNCTION
function insertNewHTML() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const mainContainer = document.getElementsByTagName("main")[0];

  if (viewportWidth <= 767 && !isMobileInserted) {
    mainContainer.innerHTML = mobileSiteHTML;
    isMobileInserted = true;
    isTabletInserted = false;
  } else if (viewportWidth > 767 && !isTabletInserted) {
    mainContainer.innerHTML = tabletSiteHTML;
    isTabletInserted = true;
    isMobileInserted = false;
  }
}

insertNewHTML();

// EVENT LISTENER
window.addEventListener("resize", insertNewHTML);
