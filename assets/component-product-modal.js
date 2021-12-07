const openModalBtn = document.querySelectorAll(".open-product-modal-btn");

openModalBtn.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    const modal = document.querySelector(
      "#product-modal-" + btn.getAttribute("id")
    );
    modal.classList.add("open");
  });
});

const closeModalBtn = document.querySelectorAll(".close-product-modal-btn");

closeModalBtn.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    const modal = document.querySelector(
      "#product-modal-" + btn.getAttribute("id")
    );
    modal.classList.remove("open");
  });
});
