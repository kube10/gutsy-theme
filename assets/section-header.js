const header = document.querySelector("#shopify-section-header");

const headerWrapper = document.querySelector(".header-wrapper");

const nextAnnouncementBtn = document.querySelector(
  ".announcement-bar__next-btn"
);

const announcementBarSlider = document.querySelector(
  ".announcement-bar__text-slider--wrap"
);

nextAnnouncementBtn.onclick = (e) => {
  const messages = document.querySelectorAll(".announcement-bar__message-wrap");

  let activeMessageIndex;

  messages.forEach((message, i) => {
    if (!message.classList.contains("hidden")) {
      activeMessageIndex = i;
    }
  });

  announcementBarSlider.style.opacity = 0;
  announcementBarSlider.style.transform = "translateX(-10px)";

  setTimeout(function () {
    messages[activeMessageIndex].classList.add("hidden");
    if (activeMessageIndex + 1 >= messages.length) {
      messages[0].classList.remove("hidden");
    } else {
      messages[activeMessageIndex + 1].classList.remove("hidden");
    }
  }, 300);

  setTimeout(function () {
    announcementBarSlider.style.opacity = 1;
    announcementBarSlider.style.transform = "translateX(0px)";
  }, 300);
};

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
