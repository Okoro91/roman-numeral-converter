const inputNumber = document.querySelector('#number');
const convertButton = document.querySelector('#convert-btn')
const result = document.querySelector('#output');

const romanToNumber = (input) => {

    if(input === 1){
        return "I"
    }else{
        return "I" + romanToNumber(input - 1);
    }
}

const checkInput = () => {
   const input = inputNumber.value.trim();
    if(input === ""){
        result.classList.add("invalid");
        result.innerText = "Please enter a valid number";
    }else if(input <= 0){
        result.classList.add("invalid");
        result.innerText = "Please enter a number greater than or equal to 1";
    }else if(input >= 4000){
        result.classList.add("invalid");
        result.innerText = "Please enter a number less than or equal to 3999";
    }else {
        result.classList.remove("invalid");
        result.innerText =  romanToNumber(parseInt(input));
    }
}

convertButton.addEventListener("click", checkInput);

