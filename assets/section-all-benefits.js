(function () {
  const section = document.getElementById("all-benefits");

  const bowlWrap = document.querySelector(".all-benefits__bowl-wrap");

  const dogBowl = document.getElementById("dog-bowl-svg");
  const korrels = dogBowl.querySelectorAll(".korrel");

  const transformArray = [];

  korrels.forEach((korrel, i) => {
    const viewPortOffset = korrel.getBoundingClientRect();
    const left = viewPortOffset.left;

    let offsetX;

    let offsetY = 500 * (1 + i * 0.02);

    if (left > window.innerWidth / 2) {
      offsetX = (left - window.innerWidth / 2) * -1;
      const rndm = Math.random();
      const rndm2 = Math.random();
      if (rndm2 > 0.5) {
        offsetX = offsetX * (1 + rndm);
      } else {
        offsetX = offsetX * (1 - rndm);
      }
      if (rndm > 0.5) {
        offsetY = offsetY * (1 + rndm2);
      } else {
        offsetY = offsetY * (1 - rndm2);
      }
      korrel.style.transform = `translate(${offsetX}px, -${offsetY}px)`;
    } else {
      offsetX = (left - window.innerWidth / 2) * -1;
      const rndm = Math.random();
      const rndm2 = Math.random();
      if (rndm2 > 0.5) {
        offsetX = offsetX * (1 + rndm);
      } else {
        offsetX = offsetX * (1 - rndm);
      }
      if (rndm > 0.5) {
        offsetY = offsetY * (1 + rndm2);
      } else {
        offsetY = offsetY * (1 - rndm2);
      }
      korrel.style.transform = `translate(${offsetX}px, -${offsetY}px)`;
    }

    transformArray.push({
      id: i,
      baseX: offsetX,
      baseY: offsetY,
    });
  });

  const korrelFragments = Math.ceil(korrels.length / 40);
  const korrelsWrap = document.getElementById("korrels");
  const amountPerFragment = Math.ceil(korrels.length / korrelFragments);

  if (!bowlWrap.classList.contains("homepage")) {
    korrels.forEach((korrel, i) => {
      let delay;
      if (i === 0) {
        delay = 500;
      } else {
        delay = i * 20;
      }

      setTimeout(function () {
        korrel.classList.add("show");
        korrel.style.transform = "translate(0px, 0px)";
      }, delay);
    });
  } else {
    window.onscroll = () => {
      if (
        bowlWrap.offsetTop - 500 <= window.scrollY &&
        !bowlWrap.classList.contains("fulle")
      ) {
        korrels.forEach((korrel, i) => {
          let delay;
          if (i === 0) {
            delay = 500;
          } else {
            delay = i * 20;
          }

          setTimeout(function () {
            korrel.classList.add("show");
            korrel.style.transform = "translate(0px, 0px)";
          }, delay);
        });
        bowlWrap.classList.add("full");
      }
    };
  }
})();
