text = document.getElementById("aciklama-text");

yazi = ["H", "e", "r"," ","t","ü","r","d","e","n"," ","y","a","z","ı","l","ı","m"];
discover_button = document.getElementById("discover-button");
    
let i = 0;
text.innerHTML = "";

const zamanlayici = setInterval(() => {
    if (i < yazi.length) {
        text.textContent += yazi[i];
        i++;
    } else {
        clearInterval(zamanlayici);
        discover_button.style.transition = "0.5s";
        discover_button.style.opacity = 1;
    }
}, 100);