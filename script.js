const inputNumber = document.querySelector('#number');
const convertButton = document.querySelector('#convert-btn')
const result = document.querySelector('#output');

const romanToNumber = (input) => {

    if(input === 1){
        return "I"
    }else if(input > 1 && input <= 3){
        return "I" + romanToNumber(input - 1);
    }else if(input === 4){
        return "IV"
}else if(input === 5){
        return "V"
}else if(input > 5 && input <= 8){
        return "V" + romanToNumber(input - 5);
    }else if(input === 9){
        return "IX"
}else if(input === 10){
        return "X"
}else if(input > 10 && input <= 39){
        return "X" + romanToNumber(input - 10);
}else if(input === 40){
        return "XL"
}else if(input > 10 && input <= 49){
        return "XL" + romanToNumber(input - 40);
}else if(input === 50){
        return "L"
}else if(input > 50 && input <= 89){
        return "L" + romanToNumber(input - 50);
}else if(input === 90){
        return "XC"
}else if(input > 90 && input <= 99){
        return "XC" + romanToNumber(input - 90);
}else if(input === 100){
        return "C"
}else if(input > 100 && input <= 399){
        return "C" + romanToNumber(input - 100);
}else if(input === 400){
        return "CD"
}else if(input > 400 && input <= 499){
        return "CD" + romanToNumber(input - 400);
}else if(input === 500){
        return "D"
}else if(input > 500 && input <= 899){
        return "D" + romanToNumber(input - 500);
}else if(input === 900){
        return "CM"
}else if(input > 900 && input <= 999){
        return "CM" + romanToNumber(input - 900);
}else if(input === 1000){
        return "M"
}else if(input > 1000 && input <= 3999){
        return "M" + romanToNumber(input - 1000);
}else{
    return "out of range"
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

inputNumber.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkInput();
    }
})

