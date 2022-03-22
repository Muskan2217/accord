
 
let bgImg = document.querySelector(".bg_img");
let images = [
  "images/gallery-item-1-big.jpg",
  "images/gallery-item-2.jpg",
  "images/gallery-item-8-big.jpg",
  "images/gallery-item-4-big.jpg",
  "images/gallery-item-7-big.jpg",
  "images/gallery-item-6-big.jpg",
  "images/gallery-item-5-big.jpg",
  "images/gallery-item-3.jpg"
];
console.log(images);
let i = 0;

document.getElementById("prev").addEventListener("click", function () {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
});
document.getElementById("next").addEventListener("click", function () {
  if (i >= images.length - 1) i = -1;
  i++;

  return setImg();
});

function setImg() {
  return (bgImg.src = images[i]);
   
}

// =============================================================

let imgSlider=document.getElementById("img_slider")
// let imgBox = document.querySelectorAll(".img_box")

//   open---------------------------
let img = document.querySelectorAll(".img");


  for(let i=0; i< img.length; i++){
    let x =img[i];
  x.addEventListener("click", function () {
      imgSlider.style.display='flex'
  });
}
// ----------------
img[0].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[0];
});
img[1].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[1];
   document.querySelectorAll(".img_box")[0].style.width = "20%";
});
img[2].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[2];
});
img[3].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[3];
});
img[4].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[4];
});
img[5].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[5];
});
img[6].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[6];
});
img[7].addEventListener("click", function () {
  document.querySelector(".bg_img").src = images[7];
});

// close ------------------------
let closeBtn = document.getElementById("close_btn").addEventListener("click", function(){
        imgSlider.style.display = "none";
});

  window.onclick = function (event) {
    if (event.target == imgSlider) {
      imgSlider.style.display = "none";
    }
  };


  // ---------------------------------


