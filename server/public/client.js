console.log('js');

$(document).ready(readyNow);

// let readyNow = () => {
//     console.log('jq');
//     $('body').append('<h1>, let\'s see them</h1>');

// }

function readyNow() {
    console.log('jq');
    // Before .then is the promise. think of the promise as a receipt at burger king. receipt says at some point you will get a burger. receipt is not a burger
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function (response){
        console.log(response);
        for (let i = 0; i < response.length; i++){
            $('ul').append(`<li>${response[i].text} - ${response[i].author}</li>`);
        }
    }); // this is the burger we will get at some point
}