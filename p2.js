"use strict";
// let namee = document.querySelector(".name");

let inp = document.querySelectorAll(".inp");
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

document.querySelector(".submit").addEventListener("click", function () {
  // console.log(namee.value);
  document.querySelector(".text").classList.add("hidden");

  for (let i = 0; i < inp.length; i++) {
    document.querySelector(".valid--" + i).classList.add("hidden");
  }
  for (let i = 0; i < inp.length; i++) {
    if (!inp[i].value) {
      document.querySelector(".valid--" + i).classList.remove("hidden");
    }
  }
  if (!inp[2].value.match(mailformat)) {
    document.querySelector(".text").textContent =
      "Plese Enter Correct Email Id";
    document.querySelector(".text").classList.remove("hidden");
  } else if (inp[3].value && inp[4].value && inp[3].value != inp[4].value) {
    console.log(4);
    document.querySelector(".text").textContent =
      "Your Password And Confirm Password Is Not Equal";
    document.querySelector(".text").classList.remove("hidden");
  } else {
    document.querySelector(".text").textContent = "Your Form Is Submitted";
    document.querySelector(".text").style.color = "green";
    document.querySelector(".text").classList.remove("hidden");
  }
});
