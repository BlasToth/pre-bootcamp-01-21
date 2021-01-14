const display = document.querySelector('#display');
display.textContent = "0";
const numbers = document.querySelectorAll('.numbers');

numbers[0].addEventListener('click',() => {
    display.textContent += numbers[0].textContent;
});
numbers[1].addEventListener('click',() => {
    display.textContent += numbers[1].textContent;
});


console.log(numbers[2].textContent);
