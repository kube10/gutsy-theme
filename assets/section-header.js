const header = document.querySelector("#shopify-section-header");

const headerWrapper = document.querySelector(".header-wrapper");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 20) {
    header.style.top = "0px";
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/pages/about-us"
    ) {
      headerWrapper.classList.remove("transparent");
      headerWrapper.style.opacity = 1;
    }
  } else {
    header.style.top = "42px";
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/pages/about-us"
    ) {
      headerWrapper.classList.add("transparent");
      headerWrapper.style.opacity = 1;
    }
  }
});
