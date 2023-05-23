import * as moment from 'moment';

function AgeCalculator(year, month, day) {
    // Date uses month values beggining on 0, so 7 is august, 6 is july and so on
    let birthday = new Date(year, month - 1, day, 0, 0, 0, 0);
    let now = new Date();
    var age = now.getFullYear() - birthday.getFullYear();
    if (now.getMonth() < birthday.getMonth() || now.getMonth() == birthday.getMonth() && now.getDate() < birthday.getDate()) {
        age -= 1;
    }
    // console.log("now ->", now);
    // console.log("birthday ->", birthday);
    return age;
}

document.addEventListener("DOMContentLoaded", (e) => {
    const form = document.querySelector("#messageForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            SubmitForm(e, this);
        });
    }
})

function SubmitForm(e, message_form) {
    e.preventDefault();

    var message = message_form.querySelector("#msg").value;

    alert("Sorry but this doesn't work yet. xD")

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         message: message
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
}