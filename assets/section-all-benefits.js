(function () {
  const section = document.getElementById("all-benefits");

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

  window.onscroll = () => {
    const scrollY = window.scrollY * 2;
    let rate = scrollY / section.offsetHeight;
    korrels.forEach((korrel, i) => {
      // const transform = korrel.style.transform;
      // const valuesString = transform.substring(9);
      // const valuesSubstr = valuesString.substring(1, valuesString.indexOf(")"));
      // const valuesArray = valuesSubstr.split(",");
      // const valuesArrayInt = [];
      // valuesArray.forEach((value, i) => {
      //   valuesArrayInt.push(parseInt(value.substring(0, value.indexOf("p"))));
      // });

      if (rate > 1) {
        rate = 1;
      }

      const baseX = transformArray[i].baseX;
      const baseY = transformArray[i].baseY;

      const rateY = baseY - baseY * rate;
      const rateX = baseX - baseX * rate;

      korrel.style.transform = `translate(${rateX}px, -${rateY}px)`;

      const viewPortOffsetKorrel = korrel.getBoundingClientRect();
      const leftKorrel = viewPortOffsetKorrel.left;
      const topKorrel = viewPortOffsetKorrel.top;
      const rightKorrel = viewPortOffsetKorrel.right;
      const bottomKorrel = viewPortOffsetKorrel.bottom;

      const viewPortOffsetBowl = dogBowl.getBoundingClientRect();
      const leftBowl = viewPortOffsetBowl.left;
      const topBowl = viewPortOffsetBowl.top;
      const rightBowl = viewPortOffsetBowl.right;
      const bottomBowl = viewPortOffsetBowl.bottom;

      if (scrollY < 100) {
        korrel.classList.remove("show");
      } else {
        if (
          leftKorrel > leftBowl &&
          rightKorrel < rightBowl &&
          topKorrel - 50 > topBowl &&
          bottomKorrel < bottomBowl
        ) {
          korrel.classList.add("show");
        } else {
          korrel.classList.remove("show");
        }
      }
    });
  };

  // const korrelFragments = Math.ceil(korrels.length / 40);
  // const korrelsWrap = document.getElementById("korrels");
  // const amountPerFragment = Math.ceil(korrels.length / korrelFragments);
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
