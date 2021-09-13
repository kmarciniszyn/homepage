console.log("Cześć wszystkim!")

let displayImageButton = document.querySelector(".js-displayImageButton");
let rabbitImage = document.querySelector(".js-rabbitImage");
let displayImageText = "Wyświetl zdjęcie";
let hiddenImageText = "Ukryj zdjęcie";

displayImageButton.addEventListener("click", () => {
    rabbitImage.classList.toggle("section__image--hidden");
    displayImageButton.innerText = rabbitImage.classList.contains("section__image--hidden") ? displayImageText : hiddenImageText;    
});