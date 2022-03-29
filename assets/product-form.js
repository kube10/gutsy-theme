if (!customElements.get("product-form")) {
  customElements.define(
    "product-form",
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.handle = this.dataset.handle;
        this.cartNotification = document.querySelector("cart-notification");
        this.form.addEventListener("keydown", function (e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            return false;
          }
        });

        this.subscriptionInputWrap = this.querySelector(
          ".sealsubs-target-element"
        );

        this.calculatorInForm = this.dataset.calculator;

        if (this.calculatorInForm && this.subscriptionInputWrap) {
          this.calculators = this.querySelectorAll(".calculator-modal");
          this.openCalculator = this.querySelector(".open-calculator-link");
          this.calculatorModal = this.querySelector(".calculator-modal");

          const calculatorModal = this.calculatorModal;
          this.openCalculator.addEventListener("click", function (e) {
            calculatorModal.classList.add("open");
          });

          this.closeCalculator = this.querySelector(".calculator-close");

          this.closeCalculator.addEventListener("click", function (e) {
            calculatorModal.classList.remove("open");
          });
        }

        this.checkoutBtnInForm = this.dataset.checkoutBtn;
        if (this.checkoutBtnInForm) {
          this.checkoutBtn = this.querySelector("#directCheckout");
          this.checkoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            this.form.setAttribute("checkout", true);
            this.form.submit();
          });
        }

        this.quantityInput = this.querySelector(".quantity__input");
        this.priceItem = this.querySelector(".price-item");
        this.totalPriceWrapper = this.querySelector(".totalPrice > .price");

        this.calculateTotalPrice(
          this.priceItem,
          this.quantityInput,
          this.totalPriceWrapper
        );

        this.quantityInput.addEventListener("change", (e) => {
          console.log(this.priceItem);
          this.calculateTotalPrice(
            this.priceItem,
            this.quantityInput,
            this.totalPriceWrapper
          );
        });

        let $this = this;

        this.subscriptionInput;

        this.subscriptionSelected = true;

        this.perMonthInfo = this.querySelector(".perMonthInfo");
        this.perMonthInfo.classList.add("hidden");

        /* SubscriptionFields are inserted with JS later, so we must check for them to be loaded, before adding a mutation observer to the hidden input field. */

        if (this.subscriptionInputWrap) {
          const subscriptionLoaded = setInterval(function (e) {
            if (
              $this.querySelector(
                ".sls-purchase-options-container input[name='selling_plan']"
              )
            ) {
              this.subscriptionInput = $this.querySelector(
                ".sls-purchase-options-container input[name='selling_plan']"
              );
              const config = {
                attributes: true,
                childList: true,
                subtree: true,
              };
              const callback = function (mutationsList, observer) {
                for (const mutation of mutationsList) {
                  if (mutation.type === "attributes") {
                    if (mutation.target.value) {
                      $this.subscriptionSelected = true;
                    } else {
                      $this.subscriptionSelected = false;
                    }
                    $this.applyDiscount($this.subscriptionSelected);
                    $this.setSubscriptionPrice();
                  }
                }
              };
              const observer = new MutationObserver(callback);

              observer.observe(this.subscriptionInput, config);

              $this.applyDiscount($this.subscriptionSelected);
              $this.setSubscriptionPrice();

              clearInterval(subscriptionLoaded);
            }
          }, 20);
        }
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        const submitButton = this.querySelector('[type="submit"]');
        if (submitButton.classList.contains("loading")) return;

        this.handleErrorMessage();
        this.cartNotification.setActiveElement(document.activeElement);

        submitButton.setAttribute("aria-disabled", true);
        submitButton.classList.add("loading");
        this.querySelector(".loading-overlay__spinner").classList.remove(
          "hidden"
        );

        const config = fetchConfig("javascript");
        config.headers["X-Requested-With"] = "XMLHttpRequest";
        delete config.headers["Content-Type"];

        const formData = new FormData(this.form);

        formData.append(
          "sections",
          this.cartNotification
            .getSectionsToRender()
            .map((section) => section.id)
        );
        formData.append("sections_url", window.location.pathname);
        config.body = formData;

        for (var value of formData.entries()) {
          console.log(value);
        }

        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              this.handleErrorMessage(response.description);
              return;
            }

            // this.cartNotification.renderContents(response);

            console.log(response);
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            submitButton.classList.remove("loading");
            submitButton.removeAttribute("aria-disabled");
            this.querySelector(".loading-overlay__spinner").classList.add(
              "hidden"
            );
            this.querySelector(".product-form__success-wrapper").classList.add(
              "show"
            );
            this.querySelector(".product-form__success-close").onclick = () => {
              this.querySelector(
                ".product-form__success-wrapper"
              ).classList.remove("show");
            };
          });
      }

      handleErrorMessage(errorMessage = false) {
        this.errorMessageWrapper =
          this.errorMessageWrapper ||
          this.querySelector(".product-form__error-message-wrapper");
        this.errorMessage =
          this.errorMessage ||
          this.errorMessageWrapper.querySelector(
            ".product-form__error-message"
          );

        this.errorMessageWrapper.toggleAttribute("hidden", !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }

      applyDiscount(isDiscount) {
        const unitPriceStr = this.priceItem.innerHTML.replace(/\s+/g, "");
        let unitPrice = parseFloat(unitPriceStr.substr(1).replace(",", "."));
        let newPrice;

        if (isDiscount) {
          newPrice = unitPrice * 0.9;
          this.perMonthInfo.classList.remove("hidden");
        } else {
          newPrice = unitPrice / 0.9;
          this.perMonthInfo.classList.add("hidden");
        }

        const euroLocale = Intl.NumberFormat("en-EU", {
          style: "currency",
          currency: "EUR",
        });

        const newPriceEU = euroLocale.format(newPrice);

        this.priceItem.innerHTML = newPriceEU;
        this.calculateTotalPrice(
          this.priceItem,
          this.quantityInput,
          this.totalPriceWrapper
        );
      }

      calculateTotalPrice(priceItem, quantityInput, totalPriceWrapper) {
        const unitPriceStr = priceItem.innerHTML.replace(/\s+/g, "");
        let unitPrice = parseFloat(unitPriceStr.substr(1).replace(",", "."));
        const quantity = parseFloat(quantityInput.value);

        const euroLocale = Intl.NumberFormat("en-EU", {
          style: "currency",
          currency: "EUR",
        });
        const totalPrice = parseFloat(unitPrice * quantity);
        const totalPriceEU = euroLocale.format(totalPrice);
        totalPriceWrapper.innerHTML = totalPriceEU.replace(".", ",");
      }

      setSubscriptionPrice() {
        const priceWrap = this.form.querySelector(
          '.sls-option-container[data-selling-plan-group="0"] .money'
        );

        const fullPrice = this.form.querySelector(
          ".sls-option-container .money"
        ).innerHTML;

        const fullPriceReplc = fullPrice.substring(fullPrice.indexOf(";") + 1);

        let fullPriceFloat = parseFloat(fullPriceReplc.replace(",", "."));

        const discounted = fullPriceFloat * 0.9;

        const euroLocale = Intl.NumberFormat("en-EU", {
          style: "currency",
          currency: "EUR",
        });

        const discountedEU = euroLocale.format(discounted);
        priceWrap.innerHTML = discountedEU.replace(".", ",");
      }
    }
  );
}
