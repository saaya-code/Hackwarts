
function popupHandler() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

document.getElementById("gotoChallengeBtn").addEventListener("click", function () {
    window.open("/carousel.html", "_blank");

});
