
//  owl 
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });



// -------------------------------------------------
let modal = document.getElementsByClassName("modal");

// for (let i = 0; i < modal.length; i++);

document.getElementById("modal_link1").addEventListener("click", function () {
  document.getElementsByClassName("modal")[0].style.display = "flex";
});

// --------------------

document.getElementById("modal_link2").addEventListener("click", function () {
  document.getElementsByClassName("modal")[1].style.display = "flex";
});

// --------------------

document.getElementById("modal_link3").addEventListener("click", function () {
  document.getElementsByClassName("modal")[2].style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
};

// --------------------------------------------
