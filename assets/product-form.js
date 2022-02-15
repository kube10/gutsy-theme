if (!customElements.get("product-form")) {
  customElements.define(
    "product-form",
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        // if (this.form.querySelector("[name=selling_plan]")) {
        //   this.form.querySelector(
        //     "[name=selling_plan_502653]"
        //   ).disabled = false;
        //   this.form.querySelector("[name=selling_plan]").disabled = false;
        // }
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.cartNotification = document.querySelector("cart-notification");
        this.form.addEventListener("keydown", function (e) {
          if (e.keyCode == 13) {
            e.preventDefault();
            return false;
          }
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
