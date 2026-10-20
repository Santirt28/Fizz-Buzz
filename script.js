//Connecting the button and list elements from the HTML and setting a limit for the FizzBuzz sequence
const button = document.getElementById('runBtn');
const list = document.getElementById('result');
const limit = 100; 
//Function to run the FizzBuzz logic 
function runFizzBuzz() {
    list.innerHTML = ''; 

    for (let i = 1; i<= limit; i++){
        let text;

        if (i % 3 === 0 && i % 5 === 0) {
            text ="FizzBuzz";
        } else if (i % 3 === 0) {
            text = "Fizz";
        } else if (i % 5 === 0) {
            text = "Buzz";
        } else {
            text = i;
        }

        const item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
    }
}
//Adding an event listener to the button to trigger the FizzBuzz function when clicked
button.addEventListener("click", runFizzBuzz);