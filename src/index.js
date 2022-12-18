$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

//HEADER
const header = document.querySelector("#MainHeader");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        //when hero is not intersecting
        header?.classList.remove("lg:bg-transparent");
        header?.classList.add("shadow", "[&>ul]:text-black");
      } else {
        header?.classList.add("lg:bg-transparent");
        header?.classList.remove("shadow", "[&>ul]:text-black");
      }
    });
  },
  {
    rootMargin: "50px",
    threshold: 1.0,
  }
);

observer.observe(document.querySelector("#HeroSection"));
