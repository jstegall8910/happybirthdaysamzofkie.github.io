document.getElementById("flameContainer").addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        event.target.style.display = "none";
    }
});

