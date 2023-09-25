// eduMod scroller splideJs
eduArrows("eduMod");
function eduArrows(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: false,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    gap: 25,
    omitEnd: true,
    breakpoints: {
      320: {
        perPage: 1.2,
        gap:0
      },
      375: {
        perPage: 1.4,
        gap:10
      },
      425: {
        perPage: 1.5,
      },
      500: {
        perPage: 1.5,
      },
      576: {
        perPage: 1.5,
      },
      650: {
        perPage: 2.1,
      },
      768: {
        perPage: 2.5,
      },
      878: {
        perPage: 2.4,
      },
      991: {
        perPage: 2.5,
      },
      992: {
        perPage: 3.2,
      },
      1024: {
        perPage: 3.5,
      },
      1100: {
        perPage: 4.5,
      },
      1200: {
        perPage: 4.6,
      },
      1300: {
        perPage: 5.2,
      },
      1400: {
        perPage: 6,
      },
    },
  };
  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */

