if (!customElements.get("product-form")) {
  customElements.define(
    "product-form",
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.cartNotification = document.querySelector("cart-notification");
        this.form.addEventListener("keydown", function (e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            return false;
          }
        });

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

        this.checkoutBtn = this.querySelector("#directCheckout");
        this.checkoutBtn.addEventListener("click", function (e) {
          e.preventDefault();
          this.form.setAttribute("checkout", true);
          this.form.submit();
        });
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

            this.cartNotification.renderContents(response);
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
    }
  );
}
