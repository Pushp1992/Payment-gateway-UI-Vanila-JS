let userCardList = [];

const saveCard = function (event) {
    event.preventDefault()

    let userDetails = {
        cardNumber: document.getElementById("cardNumber").value,
        validity: document.getElementById("validity").value,
        cvv: document.getElementById("cvv").value,
        cardHolderName: document.getElementById("cardHolderName").value
    }

    // validate all the input field value filled or not
    if (userDetails.cardNumber === "" || userDetails.validity === "" || userDetails.cvv === "" ||
        userDetails.cardNumber === "" || userDetails.cardHolderName === "") {
        window.alert("All fields are mandatory. Please check")
        return false;
    }
    userCardList.push(userDetails);
    window.localStorage.setItem('cardDetails', JSON.stringify(userCardList));
    document. getElementById("myForm"). reset();
    window.alert("Card Saved Successfully! \n Please refresh");

};

// populating Saved Card List
if (window.localStorage.getItem('cardDetails') !== null) {
    let savedCardList = JSON.parse(window.localStorage.getItem('cardDetails'));
    userCardList = [...savedCardList];

    userCardList.forEach(data => {

        document.addEventListener("DOMContentLoaded", function (event) {
            event.preventDefault();

            const createform = document.createElement('form');
            createform.setAttribute("style", "position:relative;display:contents;text-align:center;justify-content:center;width:100%");
            // createform.setAttribute("style", "display:flex;text-align:center;justify-content:center;width:100%");
            document.body.appendChild(createform);

            let numberLabel = document.createElement('label');
            numberLabel.innerHTML = "Card Number";
            numberLabel.setAttribute("style", "color:black;font-size:19px;");
            createform.appendChild(numberLabel);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            const cardNumber = document.createElement('input'); // Card Number Field
            cardNumber.setAttribute("type", 'text');
            cardNumber.setAttribute('name', data.cardNumber);
            cardNumber.setAttribute("value", data.cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim());
            cardNumber.setAttribute("style", "width:15%;padding:10px");
            createform.appendChild(cardNumber);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            let validityLabel = document.createElement('label');
            validityLabel.innerHTML = "Validity";
            validityLabel.setAttribute("style", "color:black;font-size:19px;");
            createform.appendChild(validityLabel)

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            const validity = document.createElement('input'); // Card Validity Field
            validity.setAttribute("type", 'text');
            validity.setAttribute("name", data.validity);
            validity.setAttribute("value", data.validity.replace(/\s/g, '').replace(/(\d{2})/g, '$1 ').trim());
            validity.setAttribute("style", "width:15%;padding:10px");
            createform.appendChild(validity)

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            let cvvLabel = document.createElement('label');
            cvvLabel.innerHTML = "Card CVV";
            cvvLabel.setAttribute("style", "color:black;font-size:19px;");
            createform.appendChild(cvvLabel);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            const cvv = document.createElement('input'); // Card CVV Field
            cvv.setAttribute("type", 'password');
            cvv.setAttribute("name", data.cvv);
            cvv.setAttribute("value", data.cvv);
            cvv.setAttribute("style", "width:15%;padding:10px");
            createform.appendChild(cvv)


            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            let userLabel = document.createElement('label');
            userLabel.innerHTML = "Card Holder Name";
            userLabel.setAttribute("style", "color:black;font-size:19px;");
            createform.appendChild(userLabel);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            const name = document.createElement('input'); // Card Holder Name Field
            name.setAttribute("type", "text");
            name.setAttribute('name', data.cardHolderName);
            name.setAttribute("value", data.cardHolderName);
            name.setAttribute("style", "width:15%;padding:10px");
            createform.appendChild(name);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            const button = document.createElement('input') // Remove Card Feature
            button.setAttribute("type", "button")
            button.setAttribute("name", "Delete");
            button.setAttribute("value", "Delete Card");
            button.setAttribute("onclick", `deleteCard(${userCardList.indexOf(data)})`);
            button.setAttribute("style", "color:red;font-size:13px;width:12%;padding:5px;");
            createform.appendChild(button);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);

            var linebreak = document.createElement('br');
            createform.appendChild(linebreak);
        })
    });
}

// removibg card and then updating localstorage with new values
const deleteCard = function (index) {
    userCardList.splice(index, 1);
    window.localStorage.setItem('cardDetails', JSON.stringify(userCardList))
    window.alert("your Card is removed. Please refresh the Page")
}