const images = document.querySelectorAll('.cell');
const background = [
    {
        name: "apple",
        backgroundImg: "apple.png"
    },
    {
        name: "apple",
        backgroundImg: "apple.png"
    },
    {
        name: "banana",
        backgroundImg: "banana.png"
    },
    {
        name: "banana",
        backgroundImg: "banana.png"
    },
    {
        name: "fig",
        backgroundImg: "fig.png"
    },
    {
        name: "fig",
        backgroundImg: "fig.png"
    },
    {
        name: "lemon",
        backgroundImg: "lemon.png"
    },
    {
        name: "lemon",
        backgroundImg: "lemon.png"
    },
    {
        name: "mango",
        backgroundImg: "mango.png"
    },
    {
        name: "mango",
        backgroundImg: "mango.png"
    },
    {
        name: "pear",
        backgroundImg: "pear.png"
    },
    {
        name: "pear",
        backgroundImg: "pear.png"
    }   
  ];

randomArrayShuffle(background);


let clickedArray = [];
let match = "";


for (let i = 0; i < images.length; i++) {
    
    images[i].addEventListener("click", ()=> {
        images[i].style.backgroundImage = `url(images/${background[i].name}.png)`;
        clickedArray.push(images[i].style.backgroundImage = `${background[i]}.png`);
        console.log("Clicked: " + clickedArray);
        if (clickedArray[0] === clickedArray[1]) {
            match = clickedArray[0];
            console.log("MATCHED: " + match);
        }
    
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

  