const display = document.querySelector('#display');
display.textContent = "0";
const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('#clear');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',() => {
        if (display.textContent === "0"){
            display.textContent = numbers[i].textContent;
        } else {
            display.textContent += numbers[i].textContent;
        }
    });
}


// numbers[1].addEventListener('click',() => {
//     if (display.textContent === "0"){
//         display.textContent = numbers[1].textContent;
//     } else {
//         display.textContent += numbers[1].textContent;
//     }
// });
// numbers[2].addEventListener('click',() => {
//     if (display.textContent === "0"){
//         display.textContent = numbers[2].textContent;
//     } else {
//         display.textContent += numbers[2].textContent;
//     }
// });

clear.addEventListener('click',() => {
    display.textContent = "0";
});
