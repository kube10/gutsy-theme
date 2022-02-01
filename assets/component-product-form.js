const productForms = document.querySelectorAll(".product-form");
const calculators = document.querySelectorAll(".calculator-modal");
const currentPage = window.location.pathname;

let subscriptionSelected = true;

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

  const quantityPicker = form.querySelector(".quantity__input");

  quantityPicker.addEventListener("change", (e) => {
    setTotalPrice();
  });

  const variantSelector = form.querySelector(".variantSelector");

  variantSelector.addEventListener("change", (e) => {
    setTotalPrice();
  });
});

document.body.addEventListener("change", function (e) {
  if (e.target.classList.contains("rc_widget__option__input--subsave")) {
    console.log("subscribe selected");
    subscriptionSelected = true;
  } else if (e.target.classList.contains("rc_widget__option__input--onetime")) {
    subscriptionSelected = false;
  }
  setTotalPrice();
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

function setTotalPrice() {
  setTimeout(function () {
    productForms.forEach((form) => {
      //get product ID from form element
      const productId = form.getAttribute("productId");

      //get quantitypicker element
      const quantityPicker = form.querySelector(".quantity__input");

      //get unit price in string from Shopify's price component
      const unitPriceStr = form
        .querySelector("#unitPrice-" + productId)
        .querySelector(".price-item")
        .innerHTML.replace(/\s+/g, "");

      //make float
      const unitPrice = parseFloat(unitPriceStr.substr(1).replace(",", "."));

      //get quantity values
      const quantity = parseFloat(quantityPicker.value);

      //total price calulcations
      const totalPrice = parseFloat(unitPrice * quantity);

      const euroLocale = Intl.NumberFormat("en-EU", {
        style: "currency",
        currency: "EUR",
      });

      const totalPriceEU = euroLocale.format(totalPrice);

      //set total price in wrapper element
      form
        .querySelector("#totalPrice-" + productId)
        .querySelector(".price--large").innerHTML = totalPriceEU;

      if (subscriptionSelected) {
        form.querySelector("#perMonthInfo-" + productId).innerHTML =
          "Per month";
      } else {
        form.querySelector("#perMonthInfo-" + productId).innerHTML = "";
      }
    });
  }, 100);
}

setTimeout(function () {
  // productForm.classList.add("show");
  setTotalPrice();
}, 1000);

function resetForm() {
  productForms.forEach((form, i) => {
    const baseURI = window.location.origin;
    window.history.replaceState({}, "", baseURI + currentPage);
  });
}
