
var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
    nav.classList.remove("bg-transparent", "shadow");
  } else {
    nav.classList.add("bg-transparent", "shadow");
    nav.classList.remove("bg-dark", "shadow");
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("btnScrollToTop").style.display = "block";
  } else {
    document.getElementById("btnScrollToTop").style.display = "none";
  }
}
// Wait for the document to load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get the carousel element
  var carousel = document.getElementById("carouselExampleIndicators");

  // Initialize the carousel
  var carouselInstance = new bootstrap.Carousel(carousel);

  // Set an interval to automatically slide the carousel
  setInterval(function () {
    // Move to the next slide
    carouselInstance.next();
  }, 3000); // Adjust the interval (in milliseconds) as needed
});
document.addEventListener("DOMContentLoaded", function () {
  const landingContent = document.getElementById("landingContent");
  landingContent.classList.add("slide-from-left");

  // Trigger reflow to restart the animation
  void landingContent.offsetWidth;

  landingContent.classList.remove("slide-from-left");
  landingContent.classList.add("slide-from-right");
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class to elements when they enter viewport
function animateElementsOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const animatedSection = document.getElementById('landingContent');
  const pricingSection = document.getElementById('packs');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("animated");
    }
  });
  if (isInViewport(animatedSection)) {
      // Add the animate__backInLeft class when the section is in viewport
      animatedSection.classList.add('animate__animated', 'animate__backInLeft');
      // Remove the 'hidden' class to make the section visible
      animatedSection.classList.remove('hidden');
  }
}



// Add event listener for scroll event
window.addEventListener("scroll", animateElementsOnScroll);
// Trigger the animation check once initially in case the section is already in viewport on page load
animateElementsOnScroll();




  $("#monthly").click(function(){
          $(this).addClass('active');
          $("#yearly").removeClass('active')

          $(".monthlyPriceList").removeClass('d-none');
          $(".monthlyPriceList").addClass('fadeIn');
          $(".yearlyPriceList").addClass('d-none');

          $(".indicator").css("left","2px");
  })

  $("#yearly").click(function(){
          $(this).addClass('active');
          $("#monthly").removeClass('active');

          $(".yearlyPriceList").removeClass('d-none');
          $(".yearlyPriceList").addClass('fadeIn');
          $(".monthlyPriceList").addClass('d-none');

          $(".indicator").css("left","163px");
  })
