
// 1.1 header section right-sidebar 
if (document.getElementById("mySidenav")) {

    function open_aside() {
      "use strict";
      const sidepanel = document.getElementById("mySidenav");
      if (sidepanel) {
        sidepanel.style.left = "0";
      } else {
        console.error("Error: Side panel element not found!");
      }
    }
    function close_aside() {
      "use strict";
      const sidepanel = document.getElementById("mySidenav");
      if (sidepanel) {
        sidepanel.style.left = "-355px";
      } else {
        console.error("Error: Side panel element not found!");
      }
    }
  
    let slid = document.getElementById("slid-btn");
    slid.onclick = () => {
      let dropdwon = document.getElementById("slid-drop");
      dropdwon.classList.toggle("aside-dropdwon");
    };
  }
  
  // 1.3 Waste_slider 
  $(".Waste_Slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
  
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // 1.6  partners section slider
  
$(".Partners_Slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

/* 1.11 Testionials Slider*/

$(".Testimonials_Slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
      },
    },  
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Bind custom pre button
$('.prev').click(function() {
  $('.Testimonials_Slider').slick('slickPrev');
});

// Bind custom next button
$('.next').click(function() {
  $('.Testimonials_Slider').slick('slickNext');
});

// End of tetimonial slider

//1.5  stats section counter

function animateNumbers(num, finalValue, duration) {
  let start = null;
  const finalValueStr = num.getAttribute("data-final-value");
  const charCount = finalValueStr.length;
  num.style.display = "inline";
  num.style.width = `${charCount}ch`;
  const numberFormatter = new Intl.NumberFormat("en-US");
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    num.textContent = numberFormatter.format(Math.floor(progress * finalValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      num.style.display = "inline";
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValue = parseInt(
            entry.target.getAttribute("data-final-value")
          );
          animateNumbers(entry.target, finalValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);

// 4.2  SingleService_overvies section tabs
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// 1.14  footer section message box
const footerform = document.querySelectorAll(".Subscribe-massage");
const footerMessag = document.querySelector(".Succes-box");
if (footerform !== null) {
  footerform.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      footerMessag.innerHTML = `
            <img src="assets/images/index/check-mark.png" alt="">
            <h4>Congratulations</h4>
            <h5>Form Submitted Successfully</h5>
        `;
      footerMessag.style.display = 'block';
      footerMessag.style.opacity='1';
      form.reset();
      setTimeout(() => {
        footerMessag.style.display = 'none';
      }, 5000);
    })
  })
}

// scroll to top

window.onscroll = function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Function to scroll the page to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}