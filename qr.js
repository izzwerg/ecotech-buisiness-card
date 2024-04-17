const leButton = document.querySelector(".qr-button");
const leQr = document.querySelector(".qr");
leButton.addEventListener("click", leFunction);

if (window.screen.width < 768) {
  leButton.setAttribute("onclick", "window.open('russu.vcf')");
} else {
    leQr.setAttribute("onclick", "window.open('russu.vcf')");
}

function leFunction() {
  leButton.classList.add("is-hidden");
  leQr.classList.add("is-visible");
}
