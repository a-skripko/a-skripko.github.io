var iv = document.getElementById("value-input");
iv.addEventListener("change", function (el) {
   let val = iv.value;
   if (val < 0 || val > 100) {
       alert("Введите число от 0 до 100!");
   }
   else if (val <= 50) {
     let  circle2 = document.getElementById("circle2");
     circle2.classList.remove("circle2-50");
     let degValue = 45 + parseInt(val)*3.6;
     circle2.style.transform = "rotate(" + degValue + "deg)";
   }
   else {
       let  circle2 = document.getElementById("circle2");
       circle2.classList.add("circle2-50");
       let degValue = parseInt(val)*3.6 - 135;
       circle2.style.transform = "rotate(" + degValue + "deg)";
   }
});

var anim = document.getElementById("animate-button");
anim.addEventListener("click", function () {
    if (anim.checked == true) {
        document.getElementById("circle-wrapper").classList.add("circle-rotation");
        document.getElementById("circle-wrapper").classList.remove("circle-rotation-paused");
    }
    else {
        document.getElementById("circle-wrapper").classList.add("circle-rotation-paused");
    }
});

var hide = document.getElementById("hide-button");
hide.addEventListener("click", function () {
    if (hide.checked == true) {
        document.getElementById("circle-wrapper").style.visibility = "hidden";
    }
    else {
        document.getElementById("circle-wrapper").style.visibility = "visible";
    }
});