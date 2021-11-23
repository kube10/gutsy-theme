console.log("Header");

const header = document.querySelector("#shopify-section-header");

const headerWrapper = document.querySelector(".header-wrapper");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 20) {
    header.style.top = "0px";
    headerWrapper.classList.remove("transparent");
  } else {
    header.style.top = "42px";
    headerWrapper.classList.add("transparent");
  }
});
