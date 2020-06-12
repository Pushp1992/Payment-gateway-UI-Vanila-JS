const validateCardNumber = function (e) {
    e.preventDefault();

    // Add space every after 4 digit in card
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    });

    let cardNumber = document.getElementById('cardNumber').value;
    let cardType = document.getElementById("cardType");
    let cardFirstDigit = cardNumber[0];

    // Prevent user from entering text value
    if (/[a-zA-Z-_]/.test(cardNumber)) {
        window.alert(`Inavlid input detected: ${cardNumber}`)
    }

    // CHeck and Display Card Type
    if (cardFirstDigit === "4") {
        cardType.innerHTML = "VISA CARD";
        cardType.setAttribute("value", cardType.innerHTML)
    } else if (cardFirstDigit === "5") {
        cardType.innerHTML = "MASTER CARD"
    } else if (cardFirstDigit === "6") {
        cardType.innerHTML = "DISCOVER CARD"
    } else if (cardFirstDigit === "3") {
        cardType.innerHTML = "AMERICAN EXPRESS"
    } else {
        cardType.innerHTML = null
    }
};

const validateCardValidity = function (event) {
    event.preventDefault();

    // Add / every after 2 digit in card
    document.getElementById('validity').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\s/g, '').replace(/(\d{2})/g, '$1 ').trim();
    });

    let validityNumber = document.getElementById('validity').value;
    let year = validityNumber.split("").splice(3, 4).join("");

    // Prevent user from entering text value
    if (/[a-zA-Z-_]/.test(validityNumber)) {
        window.alert(`Inavlid Date: ${validityNumber}`)
    }
    if (validityNumber.length === 2 && validityNumber > "12") {
        window.alert(`Inavlid Month: ${validityNumber}`)
    }
    if (validityNumber.length === 5 && year < "20") {
        window.alert(`Inavlid Year: ${year}`)
    }

};

const validateCvv = function (event) {
    event.preventDefault();

    let cvvValue = document.getElementById("cvv").value;
    let cardType = document.getElementById("cardType").innerHTML;

    if (cardType === "AMERICAN EXPRESS" && cvvValue.length !== 4) {
        window.alert(`Invalid CVV for ${cardType}. \n It should be of 4 Digit`);
        return false;
    }

    if (cardType !== "AMERICAN EXPRESS" && cvvValue.length !== 3) {
        window.alert(`Invalid CVV for ${cardType}. \n It Should be of 3 Digit`);
        return false;
    }
}