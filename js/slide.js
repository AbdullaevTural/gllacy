const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("li");
const observer = new IntersectionObserver(
  (listSlider) => {
    listSlider.forEach((ItemSlider) => {
      if (ItemSlider.isIntersecting) {
        const { bg, img } = ItemSlider.target.dataset;
        document.body.style.backgroundColor = bg;
        document.body.style.backgroundImage = `url(${img})`;
      }
    });
  },
  {
    root: slider,
  }
);

slides.forEach((slide) => observer.observe(slide));
