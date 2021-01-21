const images = document.querySelectorAll('.cell');
const background = ["apple", "banana", "fig", "lemon", "mango", "pear", "apple", "banana", "fig", "lemon", "mango", "pear"];




for (let i = 0; i < images.length; i++) {
    
    images[i].addEventListener("click", ()=> {
        images[i].classList.toggle("turned");
            images[i].style.backgroundImage = `url(images/${background[i]}.png)`;
    })
}