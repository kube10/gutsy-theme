(function () {
  const dogBowl = document.getElementById("dog-bowl-svg");
  const korrels = dogBowl.querySelectorAll(".korrel");

  korrels.forEach((korrel, i) => {
    const viewPortOffset = korrel.getBoundingClientRect();
    const left = viewPortOffset.left;

    if (left > window.innerWidth / 2) {
      const offset = left - window.innerWidth / 2;
      korrel.style.transform = "translate(-" + offset + "px, -250px)";
    } else {
      const offset = (left - window.innerWidth / 2) * -1;
      korrel.style.transform = "translate(" + offset + "px, -250px)";
    }
  });

  const korrelFragments = Math.ceil(korrels.length / 40);
  const korrelsWrap = document.getElementById("korrels");
  const amountPerFragment = Math.ceil(korrels.length / korrelFragments);

  window.onscroll = () => {
    const scrollY = window.scrollY;
    const rate = window.scrollY / window.innerHeight;
    korrels.forEach((korrel, i) => {
      korrel.classList.add("show");
      const baseY = -250;
      const baseX = korrel.style.transform.substring(
        10,
        korrel.style.transform.indexOf("px")
      );

      const rateY = baseY - baseY * rate;
      const rateX = baseX - baseX * rate;

      // korrel.style.transform = "translate(" + Math.ceil(baseY * rate) + "px)";
      korrel.style.transform = `translate(${rateX}px, ${rateY}px)`;
    });
  };

  // for (var i = 0; i < korrelFragments; i++) {
  //   const index = i;
  //   let delay;
  //   if (index === 0) {
  //     delay = 500;
  //   } else {
  //     delay = i * 500;
  //   }
  //
  //   setTimeout(function () {
  //     for (var x = 1; x <= amountPerFragment; x++) {
  //       if (korrels[index * amountPerFragment + x - 1]) {
  //         korrels[index * amountPerFragment + x - 1].classList.add("show");
  //         korrels[index * amountPerFragment + x - 1].style.transform =
  //           "translate(0, 0)";
  //         korrels[index * amountPerFragment + x - 1].style.transitionDelay =
  //           "." + x * 10 + "s";
  //       }
  //     }
  //   }, delay);
  // }
})();
