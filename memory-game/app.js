const images = document.querySelectorAll('.cell');
const background = ["apple", "banana", "fig", "lemon", "mango", "pear", "apple", "banana", "fig", "lemon", "mango", "pear"];


const randomBg = randomArrayShuffle(background);

for (let i = 0; i < images.length; i++) {
    
    images[i].addEventListener("click", ()=> {
        images[i].style.backgroundImage = `url(images/${background[i]}.png)`;
        setTimeout(()=> {
            images[i].style.backgroundImage = "url(images/blank.png)";
        }, 1500);
        // images[i].classList.toggle("turned");
    })
}


function randomArrayShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  