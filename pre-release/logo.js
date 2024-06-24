let flcFlixLogo = document.getElementById("title");

flcFlixLogo.addEventListener("click", function () {
    let flcFlixSrc = flcFlixLogo.getAttribute("src");
    if (flcFlixSrc === "img/FLC-Flix_2-Ans_title.png") {
        flcFlixLogo.setAttribute("src", "img/FLC Films 4.png");
    } else {
        flcFlixLogo.setAttribute("src", "img/FLC Films 4.png");
    }
    if (flcFlixSrc === "img/FLC Films 4.png") {
        flcFlixLogo.setAttribute("src", "img/FLC-Flix_2-Ans_title.png");
    } else {
        flcFlixLogo.setAttribute("src", "img/FLC Films 4.png");
    }
});