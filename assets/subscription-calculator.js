(function () {
  if (window.location.href.indexOf("/a/subscriptions/manage/")) {
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
      openCalcButton.innerHTML = "Open calculator";
      openCalcButton.setAttribute("onclick", "openCalculator(" + id + ")");
      item.appendChild(openCalcButton);
    });
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
    document
      .querySelector(".calculator-close")
      .addEventListener("click", closeCalculator);
  };
  xhr.send();
}

function openCalculator(id) {
  console.log(id);
  const calculator = document.querySelector(".calculator-modal");
  calculator.classList.add("open");
}

function closeCalculator() {
  const calculator = document.querySelector(".calculator-modal");
  calculator.classList.remove("open");
}
