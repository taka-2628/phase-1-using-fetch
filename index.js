fetch('http://api.open-notify.org/astros.json ')
.then(function (response) {
    return response.json();
})
.then(function (jsonifiedResponse){
    console.log(jsonifiedResponse)
})

