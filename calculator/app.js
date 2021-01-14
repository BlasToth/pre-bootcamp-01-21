const display = document.querySelector('#display');
display.value = "0";
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.operations');
const clear = document.querySelector('#clear');

// numbers 
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',() => {
        if (display.value === "0"){
            display.value = numbers[i].textContent;
        } else {
            display.value += numbers[i].textContent;
        }
    });
}
function add() {
    console.log(display.textContent);

}


clear.addEventListener('click',() => {
    display.value = "0";
});
