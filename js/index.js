
function popupHandler() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

document.getElementById("gotoChallengeBtn").addEventListener("click", function () {
    window.open("/Hackwarts/challenges.html", "_blank");
});
