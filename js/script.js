{
    const welcome = () => {
        console.log("Hello!")
    }

    const updateButtonText = (button, image) => {
        const displayImageText = "Wyświetl zdjęcie";
        const hiddenImageText = "Ukryj zdjęcie";
        button.innerText = image.classList.contains("section__image--hidden") ? displayImageText : hiddenImageText;    
    }

    const toggleImage = (image) => {
        image.classList.toggle("section__image--hidden");
    }

    const init = () => {
        const displayImageButton = document.querySelector(".js-displayImageButton");
        const rabbitImage = document.querySelector(".js-rabbitImage");
                
        displayImageButton.addEventListener("click", () => {
            toggleImage(rabbitImage);
            updateButtonText(displayImageButton, rabbitImage);
        });
        
        welcome();
    }

    init();
}