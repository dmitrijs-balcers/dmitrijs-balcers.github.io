function getCurrentPage() {
  return document.URL.substr(document.URL.lastIndexOf('/') + 1);
}

var navigationItems = document.getElementsByClassName("page");

function selectDisabledPage() {
  var currentPage = getCurrentPage();
  var activeItem = getElementByHref(navigationItems, currentPage);
  activeItem.classList.add("disabled");
}

function getElementByHref(items, href) {
  for(var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("href") === href) {
      return items[i];
    }
  }
  return null;
}

selectDisabledPage();

// instaclick changes the body so the selection disappears