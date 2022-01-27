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

let amount, bagSize;

//"calculaors" variable declared in 'component-product-form.js'
calculators.forEach((calculator, i) => {
  const productId = calculator.getAttribute("id").substr(11);

  const weightField = calculator.querySelector("#weight-" + productId);
  const breedField = calculator.querySelector("#breed-" + productId);
  const ageField = calculator.querySelector("#age-" + productId);
  const result1Field = calculator.querySelector("#results1-" + productId);
  const result2Field = calculator.querySelector("#results2-" + productId);
  const bagsBtn = calculator.querySelector("#bagsBtn-" + productId);
  const bagsBtnSpan = calculator.querySelector("#bagsbtn-span-" + productId);
  const ageFormGroup = calculator.querySelector("#age-form-group-" + productId);

  bagsBtn.addEventListener("click", function () {
    document.querySelector("#calculator-" + productId).classList.remove("open");
    const quantityInput = document.querySelector(
      "#quantity-picker-" + productId
    );
    quantityInput.value = amount;
  });

  breedField.addEventListener("change", (e) => {
    const value = breedField.value;
    if (value === "puppy") {
      fillWeightField(puppy);
      setResult(puppy[0]);
      if (
        document
          .querySelector(".calculator-form")
          .getAttribute("id")
          .indexOf("puppy") > -1
      ) {
        document.querySelector(".warning").classList.remove("hidden");
      }
      ageFormGroup.classList.remove("hidden");
    } else if (value === "mini") {
      fillWeightField(mini);
      setResult(mini[0]);
      ageFormGroup.classList.add("hidden");
    } else if (value === "medium") {
      fillWeightField(medium);
      setResult(medium[0]);
      ageFormGroup.classList.add("hidden");
    } else {
      fillWeightField(large);
      setResult(large[0]);
      ageFormGroup.classList.add("hidden");
    }

    setWarning(breedField.value);
  });

  weightField.addEventListener("change", (e) => {
    const breed = breedField.value;
    const weightValue = weightField.value;
    if (breed === "puppy") {
      let result;
      puppy.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result);
    } else if (breed === "mini") {
      let result;
      mini.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result);
    } else if (breed === "medium") {
      let result;
      medium.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result);
    } else {
      let result;
      large.forEach((item, i) => {
        if (item.weight == weightValue) {
          result = item;
        }
      });
      setResult(result);
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
      setResult(result);
    }
  });

  const init = () => {
    if (
      document
        .querySelector(".calculator-form")
        .getAttribute("id")
        .indexOf("puppy") > -1
    ) {
      setResult(puppy[0]);
      fillWeightField(puppy);
      fillAgeField();
      ageFormGroup.classList.remove("hidden");
      breedField.value = "puppy";
    } else if (
      document
        .querySelector(".calculator-form")
        .getAttribute("id")
        .indexOf("(s)") > -1
    ) {
      fillAgeField();
      breedField.value = "mini";
      setResult(mini[0]);
      fillWeightField(mini);
      ageFormGroup.classList.add("hidden");
    } else {
      fillAgeField();
      breedField.value = "medium";
      setResult(medium[0]);
      fillWeightField(medium);
      ageFormGroup.classList.add("hidden");
    }
  };

  init();

  function setResult(resultItem) {
    if (resultItem.dose === "Combinatie niet beschikbaar") {
      result1Field.innerHTML = resultItem.dose;
    } else {
      if (breedField.value === "puppy") {
        result1Field.innerHTML =
          resultItem.dose + "g " + "(" + resultItem.mpd + " meals per day)";
      } else {
        result1Field.innerHTML = resultItem.dose + "g";
      }
      calcMonthly(resultItem.dose);
    }
  }

  function fillAgeField() {
    ageField.innerHTML = "";
    const ages = puppy.map((item) => {
      return item.age;
    });
    const uniq = [...new Set(ages)];
    uniq.forEach((item, i) => {
      ageField.innerHTML +=
        "<option value='" + item + "'>" + item + "</option>";
    });
  }

  function fillWeightField(breed) {
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

  function calcMonthly(dose) {
    if (breedField.value === "puppy") {
      const monthly = (dose * 30) / 1000;
      result2Field.innerHTML = monthly + "kg";
      divideBags(monthly);
    } else {
      const min = parseInt(dose.substr(0, dose.indexOf("-")));
      const max = parseInt(dose.substr(dose.indexOf("-") + 1));
      const minMonthly = (min * 30) / 1000;
      const maxMonthly = (max * 30) / 1000;
      result2Field.innerHTML = minMonthly + " - " + maxMonthly + "kg";
      divideBags(maxMonthly);
    }
  }

  function calcBags(monthly) {
    let bags;
    let bagText;
    if (monthly > 6) {
      bagText = "Gutsy bag (6kg)";
      bags = Math.ceil(parseInt(monthly) / 6);
      amount = bags;
      bagSize = "6kg";
    } else {
      bagText = "Gutsy bag (2kg)";
      bags = Math.ceil(parseInt(monthly) / 2);
      amount = bags;
      bagSize = "2kg";
    }
    bagsBtn.innerHTML = bags + "&nbsp;" + bagText;
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
      // console.log("Bag " + size.kg + "kg: " + size.count);
    });
  }

  function checkForWarnings() {
    const breed = breedField.value;
    let product;
    if (breed == "mini") {
      product == "adult-s";
    } else if (breed == "medium" || breed == "large") {
      product == "adult-l";
    } else {
      product == breed;
    }

    const warnings = [
      {
        tag: "puppy",
        plural: "puppies",
        href: "/products/trekker-fuel-puppy",
      },
      {
        tag: "adult-s",
        plural: "small adults",
        href: "/products/trekker-fuel-adult-s",
      },
      {
        tag: "adult-l",
        plural: "medium & large adults",
        href: "/products/trekker-fuel-adult-l",
      },
    ];

    if (
      document
        .querySelector(".calculator-form")
        .getAttribute("id")
        .indexOf(product) == -1
    ) {
      let warning;
      warnings.forEach((item) => {
        if (item.tag === breed) {
          warning = item;
        }
      });

      document.querySelector(".warning").innerHTML = `
          <p><strong>Hold on!</strong> This is not the recommended kibble for ${warning.plural}. <br><a class="link" href="${warning.href}">Click here</a> for our ${warning.plural} chicken munchies</p>`;
      console.log("warning triggered: " + warning.plural);
      document.querySelector(".warning").classList.remove("hidden");
    } else {
      document.querySelector(".warning").innerHTML = "";
      document.querySelector(".warning").classList.add("hidden");
    }
  }

  function setWarning(breed) {
    if (
      document
        .querySelector(".calculator-form")
        .getAttribute("id")
        .indexOf(breed) == -1
    ) {
      const warnings = [
        {
          tag: "puppy",
          plural: "puppies",
          href: "/products/trekker-fuel-puppy",
        },
        {
          tag: "mini",
          plural: "small adults",
          href: "/products/trekker-fuel-adult-s",
        },
        {
          tag: "medium",
          plural: "medium & large adults",
          href: "/products/trekker-fuel-adult-l",
        },
        {
          tag: "large",
          plural: "medium & large adults",
          href: "/products/trekker-fuel-adult-l",
        },
      ];

      let warning;
      warnings.forEach((item) => {
        if (item.tag === breed) {
          warning = item;
        }
      });

      document.querySelector(".warning").innerHTML = `
        <p><strong>Hold on!</strong> This is not the recommended kibble for ${warning.plural}. <br><a class="link" href="${warning.href}">Click here</a> for our ${warning.plural} chicken munchies</p>`;
      console.log("warning triggered: " + warning.plural);
      document.querySelector(".warning").classList.remove("hidden");
    } else {
      document.querySelector(".warning").innerHTML = "";
      document.querySelector(".warning").classList.add("hidden");
    }
  }

  jQuery("#bagsBtn-" + productId).click(function () {
    if (bagSize === "6kg") {
      jQuery("#variantSelector-" + productId).val("6kg");
    } else {
      jQuery("#variantSelector-" + productId).val("2kg");
    }

    const event = new Event("change", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    document
      .querySelector("#variantSelector-" + productId)
      .dispatchEvent(event);
  });
});
