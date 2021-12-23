const productForms = document.querySelectorAll(".product-form");
const calculators = document.querySelectorAll(".calculator-modal");

productForms.forEach((form) => {
  const openCalculator = form.querySelector(".open-calculator-link");

  openCalculator.addEventListener("click", function (e) {
    const calculatorId = openCalculator.getAttribute("calculatorId");
    const calculatorModal = document.getElementById(
      "calculator-" + calculatorId
    );
    calculatorModal.classList.add("open");
  });

  const checkoutBtn = form.querySelector("#directCheckout");

  checkoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const formGrid = form.querySelector(".form-grid");
    formGrid.setAttribute("checkout", true);
    formGrid.submit();
  });
});

calculators.forEach((calculator) => {
  const closeCalculator = calculator.querySelector(".calculator-close");

  closeCalculator.addEventListener("click", function (e) {
    const calculatorId = e.target.parentNode.getAttribute("calculatorId");
    const calculatorModal = document.getElementById(
      "calculator-" + calculatorId
    );
    calculatorModal.classList.remove("open");
  });
});

// const productForm = document.querySelector(".product-form");

const quantityPicker = document.querySelector(".quantity__input");
const variantSelector = document.querySelector(".variantSelector");

function setTotalPrice() {
  setTimeout(function () {
    const unitPriceStr = document
      .querySelector(".price-item")
      .innerHTML.replace(/\s+/g, "");
    const unitPrice = parseFloat(unitPriceStr.substr(1).replace(",", "."));
    console.log("unitPrice: " + unitPrice);
    const totalPrice = parseFloat(unitPrice * parseFloat(quantityPicker.value));
    console.log(totalPrice);
    const euroLocale = Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    });
    const totalPriceEU = euroLocale.format(totalPrice);
    document.querySelector(".totalPrice > h2").innerHTML = totalPriceEU.replace(
      ".",
      ","
    );
    const discountStr = document.querySelector(".rc_widget__option__discount")
      .innerHTML;
    const discount = discountStr.substr(0, discountStr.indexOf("%"));
    const discountPrice = totalPrice - (totalPrice * discount) / 100;
    const discountPriceEU = euroLocale.format(discountPrice);
  }, 100);
}

setTimeout(function () {
  // productForm.classList.add("show");
  setTotalPrice();
  // document.querySelector(".totalPrice").innerHTML +=
  //   "<span class='perMonthInfo'>Per month</span>";
}, 1000);

//

//
// quantityPicker.addEventListener("change", (e) => {
//   setTotalPrice();
// });
//
// variantSelector.addEventListener("change", (e) => {
//   console.log("change");
//   setTotalPrice();
// });
//
// document.querySelector(".totalPrice > h2").innerHTML = document.querySelector(
//   ".price-item"
// ).innerHTML;
//
// document.body.addEventListener("change", function (e) {
//   if (e.target.classList.contains("rc_widget__option__input--subsave")) {
//     console.log("subscribe selected");
//     document.querySelector(".totalPrice").innerHTML +=
//       "<span class='perMonthInfo'>Per month</span>";
//     setTotalPrice();
//   } else if (e.target.classList.contains("rc_widget__option__input--onetime")) {
//     document.querySelector(".perMonthInfo").remove();
//     setTotalPrice();
//   }
// });
//
