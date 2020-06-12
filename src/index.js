fetch("./src/view/card.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("card-template").innerHTML = data;
    });

// const callClick = function () {
//     event.preventDefault()

//     window.alert('clicked')
// }