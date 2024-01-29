

var submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function () {

    var cardholderName = document.getElementById('cardholder-name');
    var cardNumber = document.getElementById('card-number').value;
    var cardExpiration = document.getElementById('expiration-date').value;

    var yearExp = cardExpiration.split('/')[1];

    var today = new Date();
    var year = today.getFullYear();

    console.log(today, year, yearExp);



    if (cardNumber === NaN) {
        alert("Error, tiene que ser número")
        cardNumber.value = '';
    } if (cardNumber.length < 16) {
        alert("Error, tiene que ser 16 dígitos")
        cardNumber.value = '';
    } if (yearExp < year) {
        alert("Error, la tarjeta ya está vencida.")
    }else{
        alert("Tarjeta válida. Bienvenido " + cardholderName.value)
    }


})
