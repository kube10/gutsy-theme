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
    setTotalPrice(form);
  });

  const variantSelector = form.querySelector(".variantSelector");


  const subscriptionField = form.querySelector('.subscriptionCheckBox');

  subscriptionField.addEventListener('change', (e) => {
    // if (e.target.checked) {
    //   subscriptionSelected = true;
    // } else {
    //   subscriptionSelected = false;
    // }
    // setTotalPrice(form);
    form.querySelector('variant-selects').onVariantChange()
  })


  setTimeout(function () {
    // productForm.classList.add("show");
    setTotalPrice(form);
  }, 500);
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

function setTotalPrice(form) {
    const productId = form.getAttribute("productid");

    //get quantitypicker element
    const quantityPicker = form.querySelector(".quantity__input");

    const euroLocale = Intl.NumberFormat("en-EU", {
      style: "currency",
      currency: "EUR",
    });

    //get unit price in string from Shopify's price component
    let unitPriceStr = form
      .querySelector("#unitPrice-" + productId)
      .querySelector(".price-item")
      .innerHTML.replace(/\s+/g, "");

    //make float
    let unitPrice = parseFloat(unitPriceStr.substr(1).replace(",", "."));

    const unitPriceEU = euroLocale.format(unitPrice);
    form
      .querySelector("#unitPrice-" + productId)
      .querySelector(".price-item")
      .innerHTML = unitPriceEU;

    //get quantity values
    const quantity = parseFloat(quantityPicker.value);

    //total price calulcations
    const totalPrice = parseFloat(unitPrice * quantity);

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
}


function resetForm() {
  productForms.forEach((form, i) => {
    const baseURI = window.location.origin;
    window.history.replaceState({}, "", baseURI + currentPage);
  });
}
