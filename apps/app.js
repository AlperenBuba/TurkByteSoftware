// Textler
let text0 = document.getElementById("aciklama-text");
let text1 = document.getElementById("text-1");
let text2 = document.getElementById("text-2");

// Yazılacak yazılar
yazi0 = ["H", "e", "r", " ", "t", "ü", "r", "d", "e", "n", " ", "y", "a", "z", "ı", "l", "ı", "m"];
yazi1 = ["S", "O", "F", "T", "W", "A", "R", "E"];
yazi2 = ["G", "İ", "Z", "L", "i", "L", "İ", "K"];

// Butonlar
let discover_button = document.getElementById("discover-button");

let i = 0;
let j = 0;
let k = 0;

if (text0) text0.textContent = "";
if (text1) text1.textContent = "";
if (text2) text1.textContent = "";

const zamanlayici0 = setInterval(() => {
    if (i < yazi0.length) {
        if (text0) text0.textContent += yazi0[i];
        i++;
    } else {
        clearInterval(zamanlayici0);
        discover_button.style.transition = "0.5s";
        discover_button.style.opacity = 1;
    }
}, 100);

const zamanlayici1 = setInterval(() => {
    if (j < yazi1.length) {
        if (text1) text1.textContent += yazi1[j];
        j++;
    } else {
        clearInterval(zamanlayici1);
        discover_button.style.transition = "0.5s";
        discover_button.style.opacity = 1;
    }
}, 100);

const zamanlayici2 = setInterval(() => {
    if (k < yazi2.length) {
        if (text2) text2.textContent += yazi2[k];
        k++;
    } else {
        clearInterval(zamanlayici2);
        discover_button.style.transition = "0.5s";
        discover_button.style.opacity = 1;
    }
}, 100);

if (discover_button) {
    discover_button.addEventListener("click", function(){
        window.location.href = "/sites/softwares.html";
    });
}