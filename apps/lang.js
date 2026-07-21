var lang = (navigator.language || navigator.userLanguage || "tr").startsWith("tr") ? "tr" : "en";

var translations = {
    tr: {
        typing_home: ["H", "e", "r", " ", "t", "\u00FC", "r", "d", "e", "n", " ", "y", "a", "z", "\u0131", "l", "\u0131", "m"],
        typing_software: ["S", "O", "F", "T", "W", "A", "R", "E"],
        typing_privacy: ["G", "\u0130", "Z", "L", "\u0130", "L", "\u0130", "K"],
        aht_desc: "AHT, t\u00FCm hacking ara\u00E7lar\u0131n\u0131 bir arada sunan kapsaml\u0131 bir yaz\u0131l\u0131m paketidir. G\u00FCvenlik testleri ve penetrasyon \u00E7al\u0131\u015Fmalar\u0131 i\u00E7in gerekli t\u00FCm ara\u00E7lar\u0131 b\u00FCnyesinde bar\u0131nd\u0131r\u0131r.",
        tepegoz_desc: "Tepeg\u00F6z, Kullan\u0131c\u0131lar\u0131n Takma adlar\u0131n\u0131 kullanarak di\u011Fer platformlarda da bu ad\u0131 tarayarak kullan\u0131c\u0131lar\u0131n di\u011Fer platformlardaki hesaplar\u0131n\u0131 bulan bir program.",
        ctree_desc: "CTree, C diliyle geli\u015Ftirilmi\u015F, hafif ve a\u00E7\u0131k kaynakl\u0131 bir bilgi y\u00F6netim uygulamas\u0131d\u0131r. Notlar\u0131, kod bloklar\u0131n\u0131 ve dosyalar\u0131 d\u00FCzenli bir a\u011Fa\u00E7 yap\u0131s\u0131nda toplaman\u0131z\u0131 sa\u011Flar.",
        calculator_desc: "Geli\u015Fmi\u015F algoritmalar ve \u00F6zel matematik motoru ile donat\u0131lm\u0131\u015F, premium kullan\u0131c\u0131 deneyimi sunan bir bilimsel hesap makinesi. nCr, nPr, trigonometri, logaritma ve daha fazlas\u0131n\u0131 destekler.",
    },
    en: {
        typing_home: ["A", "l", "l", " ", "k", "i", "n", "d", "s", " ", "o", "f", " ", "s", "o", "f", "t", "w", "a", "r", "e"],
        typing_software: ["S", "O", "F", "T", "W", "A", "R", "E"],
        typing_privacy: ["P", "R", "I", "V", "A", "C", "Y"],
        aht_desc: "AHT is a comprehensive software package that brings all hacking tools together. It contains all the necessary tools for security testing and penetration studies.",
        tepegoz_desc: "TepeG\u00F6z is a program that scans usernames across different platforms to find users' accounts on other platforms using their nicknames.",
        ctree_desc: "CTree is a lightweight, open-source information management application developed in C. It allows you to organize notes, code blocks, and files in a structured tree format.",
        calculator_desc: "A scientific calculator equipped with advanced algorithms and a custom math engine, delivering a premium user experience. Supports nCr, nPr, trigonometry, logarithms, and more.",
    }
};

var t = translations[lang];

function applyTranslations() {
    document.querySelectorAll("[data-lang]").forEach(function(el) {
        var key = el.getAttribute("data-lang");
        if (t[key] !== undefined) {
            if (key === "footer_contact" || key === "footer_copyright") {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
}

if (lang === "en") {
    document.addEventListener("DOMContentLoaded", function() {
        // Nav
        var navLinks = document.querySelectorAll(".navigation-button");
        navLinks.forEach(function(el) {
            if (el.textContent.trim() === "Anasayfa" || el.textContent.trim() === "Home Page") el.textContent = "Home Page";
        });
        // Discover button
        var discoverBtn = document.getElementById("discover-button");
        if (discoverBtn) {
            discoverBtn.childNodes.forEach(function(node) {
                if (node.nodeType === 3 && node.textContent.trim()) {
                    node.textContent = "Discover More ";
                }
            });
        }
        // Popular header
        var headers = document.querySelectorAll(".header");
        headers.forEach(function(h) {
            if (h.textContent.trim() === "Popular Softwares") h.textContent = "Popular Softwares";
        });
        // Detail labels
        document.querySelectorAll(".detail-info-item .label").forEach(function(el) {
            var map = {"S\u00FCr\u00FCm":"Version","Fiyat":"Price","Platform":"Platform","Boyut":"Size"};
            if (map[el.textContent.trim()]) el.textContent = map[el.textContent.trim()];
        });
        document.querySelectorAll(".detail-info-item .value").forEach(function(el) {
            if (el.textContent.trim() === "\u00DCcretsiz") el.textContent = "Free";
        });
        // Platform messages
        document.querySelectorAll(".platform-msg").forEach(function(el) {
            var txt = el.textContent.trim();
            if (txt === "Windows destekliyor") el.innerHTML = el.innerHTML.replace("Windows destekliyor", "Supports Windows");
            if (txt === "Android destekliyor") el.innerHTML = el.innerHTML.replace("Android destekliyor", "Supports Android");
        });
        // Footer
        var footer = document.querySelector(".footer");
        if (footer) {
            var contactDiv = footer.querySelector("div");
            if (contactDiv) {
                var contactHtml = contactDiv.innerHTML;
                if (contactHtml.indexOf("E-posta:") !== -1) {
                    contactDiv.innerHTML = contactHtml.replace("E-posta:", "Email:");
                }
                var copyrightDiv = contactDiv.nextElementSibling;
                if (copyrightDiv && copyrightDiv.innerHTML.indexOf("Gizlilik Politikas\u0131") !== -1) {
                    copyrightDiv.innerHTML = copyrightDiv.innerHTML.replace("Gizlilik Politikas\u0131", "Privacy Policy");
                }
            }
        }
        // Description texts
        var descMap = {};
        descMap[translations.tr.aht_desc] = translations.en.aht_desc;
        descMap[translations.tr.tepegoz_desc] = translations.en.tepegoz_desc;
        descMap[translations.tr.ctree_desc] = translations.en.ctree_desc;
        descMap[translations.tr.calculator_desc] = translations.en.calculator_desc;
        document.querySelectorAll(".detail-desc").forEach(function(el) {
            if (descMap[el.textContent.trim()]) el.textContent = descMap[el.textContent.trim()];
        });
        // "Apk \u0130ndir" -> "Download APK"
        document.querySelectorAll(".download-button").forEach(function(el) {
            var txt = el.textContent.trim();
            if (txt === "Apk \u0130ndir") {
                el.childNodes.forEach(function(node) {
                    if (node.nodeType === 3 && node.textContent.trim() === "Apk \u0130ndir") {
                        node.textContent = "Download APK";
                    }
                });
            } else if (txt === "\u0130ndir") {
                el.childNodes.forEach(function(node) {
                    if (node.nodeType === 3 && node.textContent.trim() === "\u0130ndir") {
                        node.textContent = "Download";
                    }
                });
            }
        });
    });
}
