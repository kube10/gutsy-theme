const products = [
  {
    handle: "chicken-munchies-adult-l",
    string: "Chicken Munchies Large Adult",
  },
  {
    handle: "chicken-munchies-adult-s",
    string: "Chicken Munchies Small Adult",
  },
  {
    handle: "chicken-munchies-puppy",
    string: "Chicken Munchies Puppy",
  },
];
const iconCalculator = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.775 18.1406H15V21.3656C15 21.45 15.0844 21.5156 15.1875 21.5156H17.4375C17.5406 21.5156 17.625 21.45 17.625 21.3609V18.1406H20.85C20.9344 18.1406 21 18.0563 21 17.9531V15.7031C21 15.6 20.9344 15.5156 20.8453 15.5156H17.625V12.2906C17.625 12.2063 17.5406 12.1406 17.4375 12.1406H15.1875C15.0844 12.1406 15 12.2063 15 12.2906V15.5156H11.775C11.6906 15.5156 11.625 15.6 11.625 15.7031V17.9531C11.625 18.0563 11.6906 18.1406 11.775 18.1406ZM27.15 18.1406H36.225C36.3094 18.1406 36.375 18.0563 36.375 17.9531V15.7031C36.375 15.6 36.3094 15.5156 36.2203 15.5156H27.15C27.0656 15.5156 27 15.6 27 15.7031V17.9531C27 18.0563 27.0656 18.1406 27.15 18.1406ZM27.15 30.5625H36.225C36.3094 30.5625 36.375 30.4781 36.375 30.375V28.125C36.375 28.0219 36.3094 27.9375 36.2203 27.9375H27.15C27.0656 27.9375 27 28.0219 27 28.125V30.375C27 30.4781 27.0656 30.5625 27.15 30.5625ZM27.15 35.4375H36.225C36.3094 35.4375 36.375 35.3531 36.375 35.25V33C36.375 32.8969 36.3094 32.8125 36.2203 32.8125H27.15C27.0656 32.8125 27 32.8969 27 33V35.25C27 35.3531 27.0656 35.4375 27.15 35.4375ZM17.9766 31.6406L20.8453 28.1297C21.0469 27.8859 20.8781 27.5156 20.5687 27.5156H18.1875C18.0797 27.5156 17.9766 27.5625 17.9109 27.6516L16.3172 29.6016L14.7234 27.6516C14.6899 27.6103 14.6478 27.5767 14.6001 27.5532C14.5523 27.5298 14.5001 27.5169 14.4469 27.5156H12.0609C11.7516 27.5156 11.5828 27.8859 11.7844 28.1297L14.6531 31.6406L11.7141 35.2406C11.5078 35.4844 11.6766 35.8547 11.9859 35.8547H14.3672C14.475 35.8547 14.5781 35.8078 14.6437 35.7188L16.3078 33.6797L17.9719 35.7188C18.0422 35.8031 18.1453 35.8547 18.2484 35.8547H20.6297C20.9391 35.8547 21.1078 35.4844 20.9062 35.2406L17.9766 31.6406V31.6406ZM41.25 5.25H6.75C5.92031 5.25 5.25 5.92031 5.25 6.75V41.25C5.25 42.0797 5.92031 42.75 6.75 42.75H41.25C42.0797 42.75 42.75 42.0797 42.75 41.25V6.75C42.75 5.92031 42.0797 5.25 41.25 5.25ZM39.5625 39.5625H8.4375V8.4375H39.5625V39.5625Z" fill="#F47F36"/>
</svg>
`;

(function () {
  if (window.location.href.indexOf("/a/subscriptions/manage/") > -1) {
    console.log("Subscription page!");

    init();
  }
})();

function init() {
  document.querySelector(
    "html"
  ).innerHTML += `<script type="text/javascript" src="${
    document.getElementById("subscription-calculator-js").dataset.href
  }"></script>`;

  document.head.innerHTML += `<link rel="stylesheet" href="${
    document.getElementById("subscription-calculator-css").dataset.href
  }">`;

  const lineItems = document.querySelectorAll(
    "#seal-subscription-items-list .seal-flex-grow-2"
  );

  if (lineItems) {
    loadCalculatorTemplate();

    lineItems.forEach((item, i) => {
      const id = item.parentNode.getAttribute("data-item-id");
      const openCalcButton = document.createElement("div");
      openCalcButton.classList.add("subscriptions-open-calc-button");
      openCalcButton.style.display = "none";
      openCalcButton.innerHTML = iconCalculator;
      openCalcButton.setAttribute("onclick", "openCalculator(" + id + ")");
      item.appendChild(openCalcButton);
    });

    setTimeout(function () {
      // Select the node that will be observed for mutations
      const itemsList = document.getElementById(
        "seal-subscription-items-list-container"
      );

      const openCalcButtons = document.querySelectorAll(
        ".subscriptions-open-calc-button"
      );

      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true };

      // Callback function to execute when mutations are observed
      const callback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (const mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            console.log("Class mutation");
            if (itemsList.classList.contains("seal-editing")) {
              openCalcButtons.forEach((btn, i) => {
                btn.style.display = "block";
              });
              console.log("Editing");
            } else {
              openCalcButtons.forEach((btn, i) => {
                btn.style.display = "none";
              });
              console.log("Not editing");
            }
          }
        }
      };

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(itemsList, config);
    }, 1000);

    const saveSubscriptionButton = document.querySelector(
      ".saveSubscriptionButton"
    );
  }
}

function loadCalculatorTemplate() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    document.getElementById("subscription-calculator-html").dataset.href,
    true
  );
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    document.querySelector("body").innerHTML += this.responseText;
  };
  xhr.send();
}

function openCalculator(id) {
  console.log(id);
  const calculator = document.querySelector(".calculator-modal");
  const variantName = document.querySelector(
    '.seal-separator-top[data-item-id="' + id + '"] .seal-product-variant-name'
  ).innerHTML;

  const product = products.find(
    (product) => variantName.indexOf(product.string) > -1
  );

  const quantity = document.querySelector(
    'input[name="items[' + id + '][quantity]"]'
  ).value;

  calculator.querySelector(
    ".calculator-modal-option__row-title"
  ).innerHTML = variantName;

  const inputField = calculator.querySelector(".quantity__input");

  let variantObject;
  let discount;

  fetch("/products/" + product.handle + ".js")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const variant = data.variants.find(
        (variant) => variant.name === variantName
      );

      variantObject = variant;

      discount =
        data.selling_plan_groups[0].selling_plans[0].price_adjustments[1].value;

      setCalculatorPrices(variantObject, quantity, discount);
      setTotalKg(variantObject, quantity);
    });

  inputField.value = quantity;

  inputField.addEventListener("change", function () {
    setCalculatorPrices(variantObject, inputField.value, discount);
    setTotalKg(variantObject, inputField.value);
  });

  initCalculator(id);

  calculator.classList.add("open");
}

function initCalculator(id) {
  document
    .querySelector(".calculator-close")
    .addEventListener("click", closeCalculator);
  const weightField = document.querySelector(".weight-field");
  const breedField = document.querySelector(".breed-field");
  const ageField = document.querySelector(".age-field");
  const result1Field = document.querySelector(".results1Field");
  const result2Field = document.querySelector(".results2Field");
  const ageFormGroup = document.querySelector(".age-form-group");

  const variantName = document.querySelector(
    '.seal-separator-top[data-item-id="' + id + '"] .seal-product-variant-name'
  ).innerHTML;

  if (variantName.indexOf("puppy") > -1) {
    fillWeightField(puppy, weightField);
    fillAgeField(ageField);
    ageFormGroup.classList.remove("hidden");
    breedField.value = "puppy";
  } else if (variantName.indexOf("small") > -1) {
    fillAgeField(ageField);
    breedField.value = "mini";
    fillWeightField(mini, weightField);
    ageFormGroup.classList.add("hidden");
  } else {
    fillAgeField(ageField);
    breedField.value = "medium";
    fillWeightField(medium, weightField);
    ageFormGroup.classList.add("hidden");
  }

  breedField.addEventListener("change", (e) => {
    const value = breedField.value;
    if (value === "puppy") {
      fillWeightField(puppy, weightField);
      setResult(puppy[0], result1Field, breedField, result2Field);
      ageFormGroup.classList.remove("hidden");
    } else if (value === "mini") {
      fillWeightField(mini, weightField);
      setResult(mini[0], result1Field, breedField, result2Field);
      ageFormGroup.classList.add("hidden");
    } else if (value === "medium") {
      fillWeightField(medium, weightField);
      setResult(medium[0], result1Field, breedField, result2Field);
      ageFormGroup.classList.add("hidden");
    } else {
      fillWeightField(large, weightField);
      setResult(large[0], result1Field, breedField, result2Field);
      ageFormGroup.classList.add("hidden");
    }
  });

  weightField.addEventListener("change", (e) => {
    breed = breedField.value;
    weightValue = weightField.value;
    if (breed === "puppy") {
      let result;
      puppy.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result, result1Field, breedField, result2Field);
    } else if (breed === "mini") {
      let result;
      mini.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result, result1Field, breedField, result2Field);
    } else if (breed === "medium") {
      let result;
      medium.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result, result1Field, breedField, result2Field);
    } else {
      let result;
      large.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result, result1Field, breedField, result2Field);
    }
  });

  ageField.addEventListener("change", (e) => {
    if (breedField.value === "puppy") {
      let result;
      puppy.forEach((item) => {
        if (
          ageField.value === item.age.toString() &&
          weightField.value === item.weight.toString()
        ) {
          result = item;
        }
      });
      setResult(result, result1Field, breedField, result2Field);
    }
  });

  const saveSubscriptionButton = document.querySelector(
    ".saveSubscriptionButton"
  );

  saveSubscriptionButton.addEventListener("click", function () {
    const calculator = document.querySelector(".calculator-modal");

    const quantity = calculator.querySelector(".quantity__input").value;

    const lineItemInput = document.querySelector(
      ".seal-input[name='items[" + id + "][quantity]']"
    );

    const lineItemPrice = document.querySelector(
      '.seal-separator-top[data-item-id="' +
        id +
        '"] span[data-seal-format-money]'
    );

    const totalPrice = calculator.querySelector(".totalPrice .price").innerHTML;

    lineItemInput.value = quantity;

    lineItemPrice.innerHTML = totalPrice;

    closeCalculator();
  });
}

function closeCalculator() {
  const calculator = document.querySelector(".calculator-modal");
  calculator.classList.remove("open");
}

function setCalculatorPrices(variantObject, quantity, discount) {
  const calculator = document.querySelector(".calculator-modal");

  const price = (variantObject.price * (100 - discount)) / 100;

  const priceFloat = parseFloat(price / 100);

  const euroLocale = Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
  });

  calculator.querySelector(
    ".price__regular > .price-item"
  ).innerHTML = euroLocale.format(priceFloat);

  const totalPrice = parseFloat(priceFloat * quantity);

  calculator.querySelector(".totalPrice .price").innerHTML = euroLocale.format(
    totalPrice
  );
}

function setTotalKg(variant, quantity) {
  const kg = variant.option1.substr(0, variant.option1.indexOf("kg"));

  const totalKg = parseInt(kg) * quantity;
  document
    .querySelector(".calculator-subscription__total-kg")
    .setAttribute("data-single-bag", kg);
  document
    .querySelector(".calculator-subscription__total-kg")
    .setAttribute("data-total-bag", totalKg);
  document.querySelector(".calculator-subscription__total-kg").innerHTML =
    totalKg + "kg";
}

function setResult(resultItem, result1Field, breedField, result2Field) {
  if (resultItem.dose === "Combinatie niet beschikbaar") {
    result1Field.innerHTML = resultItem.dose;
  } else {
    if (breedField.value === "puppy") {
      result1Field.innerHTML =
        resultItem.dose + "g " + "(" + resultItem.mpd + " meals per day)";
    } else {
      result1Field.innerHTML = resultItem.dose + "g";
    }
    calcMonthly(resultItem.dose, breedField, result2Field);
  }
}

function fillAgeField(ageField) {
  ageField.innerHTML = "";
  const ages = puppy.map((item) => {
    return item.age;
  });
  const uniq = [...new Set(ages)];
  uniq.forEach((item, i) => {
    ageField.innerHTML += "<option value='" + item + "'>" + item + "</option>";
  });
}

function fillWeightField(breed, weightField) {
  weightField.innerHTML = "";
  const kgs = breed.map((item) => {
    return item.weight;
  });
  const uniq = [...new Set(kgs)];
  uniq.forEach((item, i) => {
    weightField.innerHTML +=
      "<option value='" + item + "'>" + item + "</option>";
  });
}

function calcMonthly(dose, breedField, result2Field) {
  if (breedField.value === "puppy") {
    const monthly = (dose * 35) / 1000;
    result2Field.innerHTML = monthly + "kg";
    setResultMessage(monthly);
  } else {
    const min = parseInt(dose.substr(0, dose.indexOf("-")));
    const max = parseInt(dose.substr(dose.indexOf("-") + 1));
    const minMonthly = (min * 30) / 1000;
    const maxMonthly = (max * 30) / 1000;
    result2Field.innerHTML = minMonthly + " - " + maxMonthly + "kg";
    setResultMessage(maxMonthly);
  }
}

function setResultMessage(monthly) {
  const resultMessageWrapper = document.querySelector(
    ".calculator-subscription__result-message"
  );
  const singleBagKg = parseInt(
    document
      .querySelector(".calculator-subscription__total-kg")
      .getAttribute("data-single-bag")
  );

  const totalBagKg = parseInt(
    document
      .querySelector(".calculator-subscription__total-kg")
      .getAttribute("data-total-bag")
  );

  const bagSizes = [2, 6, 10];

  let alteration;

  let html;

  if (totalBagKg > monthly + singleBagKg) {
    // alteration = Math.ceil((totalBagKg - monthly) / singleBagKg);
    //
    // const remainder = (totalBagKg - monthly) % singleBagKg;
    //
    // console.log("Remainder: " + remainder);

    html = `<strong>That seems like too much!</strong><p>We recommend reducing your subscription.</p>`;

    // if (0 < remainder < 2) {
    //   html += ` and adding one bag of 2kg`;
    // } else if (2 < remainder < 6) {
    //   html += ` and adding one bag of 6kg`;
    // } else if (6 < remainder < 10) {
    //   html += ` and adding one bag of 10kg`;
    // }
    //
    // html += "</p>";
  } else if (totalBagKg < monthly) {
    alteration = Math.ceil((monthly - totalBagKg) / singleBagKg);

    html = `<strong>You might need to add some more!</strong><p>We recommend adding more to your subscription.</p>`;
  } else {
    html = `<strong>That seems just right!</strong><p>Your subscription should be just right for your pet.</p>`;
  }

  resultMessageWrapper.innerHTML = html;
}

function divideBags(monthly) {
  let totalKg = Math.ceil(monthly);

  const bagSizes = [
    {
      kg: 10,
      count: 0,
    },
    {
      kg: 6,
      count: 0,
    },
    {
      kg: 2,
      count: 0,
    },
  ];

  while (totalKg > 0) {
    if (totalKg <= bagSizes[2].kg && totalKg > 0) {
      totalKg = 0;
      bagSizes[2].count += 1;
    } else {
      bagSizes.forEach((size, i) => {
        do {
          if (totalKg >= size.kg) {
            totalKg = totalKg - size.kg;
            size.count += 1;
          }
        } while (totalKg >= size.kg);
      });
    }
  }

  bagSizes.forEach((size, i) => {
    if (i === 2) {
      if (size.count === 3) {
        size.count -= 3;
        bagSizes[1].count += 1;
      }
    }
  });

  const $this = this;
  bagSizes.forEach((size, i) => {
    console.log("Bag " + size.kg + "kg: " + size.count);
    const inputs = $this.querySelectorAll(".quantity__input");
    const sizeString = size.kg + "kg";

    inputs.forEach((input, i) => {
      if (input.getAttribute("data-size") === sizeString) {
        input.value = size.count;
      }
    });
  });
}

const puppy = [
  { weight: 1, age: 2, dose: 60, mpd: 3 },
  { weight: 1, age: 3, dose: 70, mpd: 3 },
  { weight: 1, age: 6, dose: 65, mpd: 3 },
  { weight: 1, age: 9, dose: 60, mpd: 2 },
  { weight: 1, age: 12, dose: "Combinatie niet beschikbaar", mpd: 2 },
  { weight: 2, age: 2, dose: 60, mpd: 3 },
  { weight: 2, age: 3, dose: 70, mpd: 3 },
  { weight: 2, age: 6, dose: 65, mpd: 3 },
  { weight: 2, age: 9, dose: 60, mpd: 2 },
  { weight: 2, age: 12, dose: "Combinatie niet beschikbaar", mpd: 2 },
  { weight: 5, age: 2, dose: 110, mpd: 3 },
  { weight: 5, age: 3, dose: 120, mpd: 3 },
  { weight: 5, age: 6, dose: 120, mpd: 3 },
  { weight: 5, age: 9, dose: 115, mpd: 2 },
  { weight: 5, age: 12, dose: "Combinatie niet beschikbaar", mpd: 2 },
  { weight: 10, age: 2, dose: 165, mpd: 3 },
  { weight: 10, age: 3, dose: 190, mpd: 3 },
  { weight: 10, age: 6, dose: 200, mpd: 3 },
  { weight: 10, age: 9, dose: 190, mpd: 2 },
  { weight: 10, age: 12, dose: 180, mpd: 2 },
  { weight: 15, age: 2, dose: 215, mpd: 3 },
  { weight: 15, age: 3, dose: 245, mpd: 3 },
  { weight: 15, age: 6, dose: 265, mpd: 3 },
  { weight: 15, age: 9, dose: 250, mpd: 2 },
  { weight: 15, age: 12, dose: 235, mpd: 2 },
  { weight: 20, age: 2, dose: 255, mpd: 3 },
  { weight: 20, age: 3, dose: 295, mpd: 3 },
  { weight: 20, age: 6, dose: 320, mpd: 3 },
  { weight: 20, age: 9, dose: 310, mpd: 2 },
  { weight: 20, age: 12, dose: 285, mpd: 2 },
  { weight: 25, age: 2, dose: 290, mpd: 3 },
  { weight: 25, age: 3, dose: 340, mpd: 3 },
  { weight: 25, age: 6, dose: 370, mpd: 3 },
  { weight: 25, age: 9, dose: 365, mpd: 2 },
  { weight: 25, age: 12, dose: 345, mpd: 2 },
  { weight: 30, age: 2, dose: 325, mpd: 3 },
  { weight: 30, age: 3, dose: 380, mpd: 3 },
  { weight: 30, age: 6, dose: 420, mpd: 3 },
  { weight: 30, age: 9, dose: 415, mpd: 2 },
  { weight: 30, age: 12, dose: 400, mpd: 2 },
  { weight: 40, age: 2, dose: 385, mpd: 3 },
  { weight: 40, age: 3, dose: 455, mpd: 3 },
  { weight: 40, age: 6, dose: 510, mpd: 3 },
  { weight: 40, age: 9, dose: 505, mpd: 2 },
  { weight: 40, age: 12, dose: 480, mpd: 2 },
  { weight: 50, age: 2, dose: 440, mpd: 3 },
  { weight: 50, age: 3, dose: 520, mpd: 3 },
  { weight: 50, age: 6, dose: 590, mpd: 3 },
  { weight: 50, age: 9, dose: 590, mpd: 2 },
  { weight: 50, age: 12, dose: 565, mpd: 2 },
];
const mini = [
  {
    weight: "1-2",
    dose: "29 - 48",
  },
  {
    weight: "2-3",
    dose: "48 - 65",
  },
  {
    weight: "3-4",
    dose: "65 - 81",
  },
  {
    weight: "4-5",
    dose: "81 - 95",
  },
  {
    weight: "5-6",
    dose: "95 - 109",
  },
  {
    weight: "6-8",
    dose: "109 - 136",
  },
  {
    weight: "8-10",
    dose: "136 - 161",
  },
];
const medium = [
  {
    weight: "8-10",
    dose: "136 - 161",
  },
  {
    weight: "10-15",
    dose: "161 - 218",
  },
  {
    weight: "15-20",
    dose: "218 - 270",
  },
  {
    weight: "20-25",
    dose: "270 - 319",
  },
  {
    weight: "25-30",
    dose: "319 - 366",
  },
  {
    weight: "30-40",
    dose: "366 - 454",
  },
  {
    weight: "40-50",
    dose: "454 - 537",
  },
];
const large = [
  {
    weight: "30 - 35",
    dose: "366 - 411",
  },
  {
    weight: "35 - 40",
    dose: "411 - 454",
  },
  {
    weight: "40 - 50",
    dose: "454 - 537",
  },
  {
    weight: "50 - 60",
    dose: "537 - 616",
  },
  {
    weight: "60 - 70",
    dose: "616 - 691",
  },
  {
    weight: "70 - 80",
    dose: "691 - 764",
  },
  {
    weight: "80 - 90",
    dose: "764 - 834",
  },
];
