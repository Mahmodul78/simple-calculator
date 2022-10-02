let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        }

        else if (this.innerHTML == "x") {
            let newInput = value.innerHTML;
            let deleteLastDigit = Math.floor(newInput / 10);
            if (deleteLastDigit > 0) {
                value.innerHTML = deleteLastDigit;
            }
            else {
                value.innerHTML = "";
            }
        }

        else {
            if (this.innerHTML == "C") {
                value.innerHTML = "";
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }

    })
}