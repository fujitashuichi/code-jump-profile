const head = document.querySelector("head");
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("dialog-submit");
const infoIcon = document.getElementById("info-icon");
const toggleInput = document.getElementById("toggle");


infoIcon.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});


toggleInput.addEventListener("click", () => {
    toggleInput.classList.toggle("active");
    if (toggleInput.className.includes("active")) {
        head.insertAdjacentHTML("beforeend",
            "<link id=\"feature\" rel=\"stylesheet\" href=\"./css/feature.css\">");
    } else {
        document.getElementById("feature").remove();
    };
});
