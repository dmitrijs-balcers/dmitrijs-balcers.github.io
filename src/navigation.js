function getCurrentPage() {
  return document.URL.substr(document.URL.lastIndexOf('/') + 1);
}

const navigationItems = document.getElementsByClassName("page");

function selectDisabledPage() {
  const currentPage = getCurrentPage();
  let activeItem = [...navigationItems].find(el => el.getAttribute("href") === currentPage);
  activeItem.classList.add("disabled");
}

selectDisabledPage();

// instaclick changes the body so the selection disappears