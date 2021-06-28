toggler = document.querySelector(".toggler");
monthlyPricing = document.querySelector(".monthly__container");
annuallyPricing = document.querySelector(".annually__container");

toggler.addEventListener("click", () => {
  monthlyPricing.classList.toggle("remove__container");
  annuallyPricing.classList.toggle("show__container");
});
