console.log("Testing header");

const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight - 110) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
