const video = document.querySelector(".section-video-banner-video");
const discoverBtns = document.querySelectorAll(".blog-feature-card-button");

video.addEventListener("loadeddata", (e) => {
  if (video.readyState >= 3) {
    initUI();
  }
});

discoverBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    btn.parentElement.style.transform = "scale(1.1)";
    btn.parentElement.querySelector(".blog-feature-count").style.transform =
      "translateX(-35px)";
    btn.parentElement.querySelector(".blog-feature-count").style.opacity = "0";
    btn.parentElement.querySelector(
      ".blog-feature-article-title"
    ).style.transform = "translateX(-108px)";
    btn.parentElement.querySelector(".blog-feature-line").style.width = "80%";
  });

  btn.addEventListener("mouseleave", (e) => {
    setTimeout(function () {
      btn.parentElement.style.transform = "scale(1)";
      2;
      btn.parentElement.querySelector(".blog-feature-count").style.transform =
        "translateX(0px)";
      btn.parentElement.querySelector(".blog-feature-count").style.opacity =
        "1";
      btn.parentElement.querySelector(
        ".blog-feature-article-title"
      ).style.transform = "translateX(0px)";
      btn.parentElement.querySelector(".blog-feature-line").style.width =
        "100%";
    }, 100);
  });
});

function initUI() {
  console.log("init UI");
  const content = document.querySelector(".section-video-banner-content");
  content.style.opacity = 1;
  if (document.querySelector(".header-wrapper.transparent")) {
    const header = document.querySelector(".header-wrapper.transparent");
    header.style.opacity = 1;
  }
}
