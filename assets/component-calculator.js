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

const subscriptions = [
  {
    product: "puppy",
    name: "subs_type_gzcqmf13m29n3nd",
    value: "547455030",
  },
  {
    product: "adult-s",
    name: "subs_type_0e29uj8fvgikc8d",
    value: "547455030",
  },
  {
    product: "adult-l",
    name: "subs_type_hidvaoxyrw6odxi",
    value: "547455030",
  },
];

if (!customElements.get("calculator")) {
  customElements.define(
    "calculator-element",
    class Calculator extends HTMLElement {
      constructor() {
        super();

        this.weightField = this.querySelector(".weight-field");
        this.breedField = this.querySelector(".breed-field");
        this.ageField = this.querySelector(".age-field");
        this.result1Field = this.querySelector(".results1Field");
        this.result2Field = this.querySelector(".results2Field");
        this.ageFormGroup = this.querySelector(".age-form-group");

        this.calculatorForm = this.querySelector(".calculator-form");

        this.warning = this.querySelector(".warning");

        this.subscriptionSelect = this.querySelector("#subscriptionSelect");

        this.subscriptionSelect.addEventListener("change", (e) => {
          console.log(this.subscriptionSelect.checked);
          this.sellingPlanInputs = this.querySelectorAll(
            'input[name="selling_plan"]'
          );
          this.subTypeInputs = this.querySelectorAll('input[name="sub_type"]');

          this.subsIntervalInputs = this.querySelectorAll(
            'input[name="subs_interval"]'
          );

          this.sellingPlan1 = this.querySelectorAll(".selling_plan_1");
          this.sellingPlan2 = this.querySelectorAll(".selling_plan_2");
          this.subscription;

          if (this.calculatorForm.getAttribute("id").indexOf("puppy") > -1) {
            this.subscription = subscriptions[0];
          } else if (
            this.calculatorForm.getAttribute("id").indexOf("small") > -1
          ) {
            this.subscription = subscriptions[1];
          } else if (
            this.calculatorForm.getAttribute("id").indexOf("large") > -1
          ) {
            this.subscription = subscriptions[2];
          }

          if (!this.subscriptionSelect.checked) {
            this.sellingPlanInputs.forEach((input, i) => {
              input.value = "";
            });

            this.subTypeInputs.forEach((input, i) => {
              input.value = "";
            });

            this.subsIntervalInputs.forEach((input, i) => {
              input.value = "";
            });
          } else if (this.subscriptionSelect.checked) {
            this.sellingPlanInputs.forEach((input, i) => {
              input.value = this.subscription.value;
            });

            this.subTypeInputs.forEach((input, i) => {
              input.value = "0";
              input.setAttribute("name", this.subscription.name);
            });

            this.subsIntervalInputs.forEach((input, i) => {
              input.value = this.subscription.value;
            });
          }
        });

        this.breedField.addEventListener("change", (e) => {
          const value = this.breedField.value;
          if (value === "puppy") {
            this.fillWeightField(puppy);
            this.setResult(puppy[0]);
            this.ageFormGroup.classList.remove("hidden");
          } else if (value === "mini") {
            this.fillWeightField(mini);
            this.setResult(mini[0]);
            this.ageFormGroup.classList.add("hidden");
          } else if (value === "medium") {
            this.fillWeightField(medium);
            this.setResult(medium[0]);
            this.ageFormGroup.classList.add("hidden");
          } else {
            this.fillWeightField(large);
            this.setResult(large[0]);
            this.ageFormGroup.classList.add("hidden");
          }

          // setWarning(breedField.value);
          this.checkForWarnings();
        });

        this.weightField.addEventListener("change", (e) => {
          this.breed = this.breedField.value;
          this.weightValue = this.weightField.value;
          if (this.breed === "puppy") {
            let result;
            puppy.forEach((item, i) => {
              if (item.weight == this.weightValue) {
                result = item;
              }
            });
            this.setResult(result);
          } else if (this.breed === "mini") {
            let result;
            mini.forEach((item, i) => {
              if (item.weight == this.weightValue) {
                result = item;
              }
            });
            this.setResult(result);
          } else if (this.breed === "medium") {
            let result;
            medium.forEach((item, i) => {
              if (item.weight == this.weightValue) {
                result = item;
              }
            });
            this.setResult(result);
          } else {
            let result;
            large.forEach((item, i) => {
              if (item.weight == this.weightValue) {
                result = item;
              }
            });
            this.setResult(result);
          }
        });

        this.ageField.addEventListener("change", (e) => {
          if (this.breedField.value === "puppy") {
            let result;
            puppy.forEach((item) => {
              if (
                this.ageField.value === item.age.toString() &&
                this.weightField.value === item.weight.toString()
              ) {
                result = item;
              }
            });
            this.setResult(result);
          }
        });

        this.init();
      }

      init() {
        if (this.calculatorForm.getAttribute("id").indexOf("puppy") > -1) {
          this.setResult(puppy[0]);
          this.fillWeightField(puppy);
          this.fillAgeField();
          this.ageFormGroup.classList.remove("hidden");
          this.breedField.value = "puppy";
        } else if (this.calculatorForm.getAttribute("id").indexOf("(s)") > -1) {
          this.fillAgeField();
          this.breedField.value = "mini";
          this.setResult(mini[0]);
          this.fillWeightField(mini);
          this.ageFormGroup.classList.add("hidden");
        } else {
          this.fillAgeField();
          this.breedField.value = "medium";
          this.setResult(medium[0]);
          this.fillWeightField(medium);
          this.ageFormGroup.classList.add("hidden");
        }
      }

      setResult(resultItem) {
        if (resultItem.dose === "Combinatie niet beschikbaar") {
          this.result1Field.innerHTML = resultItem.dose;
        } else {
          if (this.breedField.value === "puppy") {
            this.result1Field.innerHTML =
              resultItem.dose + "g " + "(" + resultItem.mpd + " meals per day)";
          } else {
            this.result1Field.innerHTML = resultItem.dose + "g";
          }
          this.calcMonthly(resultItem.dose);
        }
      }

      fillAgeField() {
        this.ageField.innerHTML = "";
        const ages = puppy.map((item) => {
          return item.age;
        });
        const uniq = [...new Set(ages)];
        uniq.forEach((item, i) => {
          this.ageField.innerHTML +=
            "<option value='" + item + "'>" + item + "</option>";
        });
      }

      fillWeightField(breed) {
        this.weightField.innerHTML = "";
        const kgs = breed.map((item) => {
          return item.weight;
        });
        const uniq = [...new Set(kgs)];
        uniq.forEach((item, i) => {
          this.weightField.innerHTML +=
            "<option value='" + item + "'>" + item + "</option>";
        });
      }

      calcMonthly(dose) {
        if (this.breedField.value === "puppy") {
          const monthly = (dose * 35) / 1000;
          this.result2Field.innerHTML = monthly + "kg";
          this.divideBags(monthly);
        } else {
          const min = parseInt(dose.substr(0, dose.indexOf("-")));
          const max = parseInt(dose.substr(dose.indexOf("-") + 1));
          const minMonthly = (min * 30) / 1000;
          const maxMonthly = (max * 30) / 1000;
          this.result2Field.innerHTML = minMonthly + " - " + maxMonthly + "kg";
          this.divideBags(maxMonthly);
        }
      }

      divideBags(monthly) {
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

      checkForWarnings() {
        const breed = this.breedField.value;
        let product;
        if (breed == "mini") {
          product = "adult_(s)";
        } else if (breed == "medium" || breed == "large") {
          product = "adult_(l)";
        } else {
          product = "puppy";
        }

        const warnings = [
          {
            tag: "puppy",
            plural: "puppies",
            href: "/products/trekker-fuel-puppy",
          },
          {
            tag: "adult_(s)",
            plural: "small adults",
            href: "/products/trekker-fuel-adult-s",
          },
          {
            tag: "adult_(l)",
            plural: "medium & large adults",
            href: "/products/trekker-fuel-adult-l",
          },
        ];

        if (this.calculatorForm.getAttribute("id").indexOf(product) == -1) {
          let warningObject;
          warnings.forEach((item) => {
            if (item.tag === product) {
              warningObject = item;
            }
          });
          console.log("warningObject: " + warningObject);
          this.warning.innerHTML = `
              <p><strong>Hold on!</strong> This is not the recommended kibble for ${warningObject.plural}. <br><a class="link" href="${warningObject.href}">Click here</a> for our ${warningObject.plural} chicken munchies</p>`;
          console.log("warning triggered: " + warningObject.plural);
          this.warning.classList.remove("hidden");
        } else {
          this.warning.innerHTML = "";
          this.warning.classList.add("hidden");
        }
      }
    }
  );
}
