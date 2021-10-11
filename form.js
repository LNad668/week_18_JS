
let errors=[];

function checkValidity(input){
    let validity = input.validity;
    if(validity.valueMissing){
        errors.push('Поле ' + input.pleceholder +' не заполнено');
    }
    if (validity.patternMismatch){
        errors.push('ytdthysq');
    }
}

function checkAll(){
    errors = []; 
    let inputs = document.querySelectorAll("input")

    for (let input of inputs){
        checkValidity(input);
    }

    document.getElementById('errorsMessage').innerHTML= errors.join('. <br>');
}

/*function checkAll()
{
    let email = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    let address = document.getElementById("inputAddress");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");

    document.getElementById('errorMessage') .innerHTML = "";

    if (email.value == ''){
        document.getElementById('errorMessage').innerHTML += "Ваш электронный адрес не заполнен <br> "  
    }

    if (password.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш пароль не заполнен <br>"  
    }
    if (password.value.length < 6){
        document.getElementById('errorMessage') .innerHTML += "Пароль должен содержать не меньше 6 символов <br>"  
    }

    if (address.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш адрес не заполнен <br>"  
    }

    if (city.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш город не заполнен <br>"  
    }

    if (state.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш статус не заполнен <br>"  
    }


    if (email.value != '' && password.value != '' && password.value.length >= 6 && address.value != '' && city.value != '' &&
    state.value != ''){
    alert ("Добро пожаловать");
    }
}*/



