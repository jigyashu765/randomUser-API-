let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userLocation = document.getElementById("userLocation");
let aboutUser = document.getElementById("aboutUser");
let detailText = document.getElementById("detailText");


const url = "https://randomuser.me/api/"

let getUser = () => {
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let picture = data.results[0].picture.large;
        let first = data.results[0].name.first;
        let last = data.results[0].name.last;
        let title = data.results[0].name.title;
        let gender = data.results[0].gender;
        let email = data.results[0].email;
        let city = data.results[0].location.city;
        let state = data.results[0].location.state;
        let country = data.results[0].location.country;
        let date = data.results[0].dob.date.substring(0, 10);
        let age = data.results[0].dob.age;
        let number = data.results[0].location.street.number;
        let streetName = data.results[0].location.street.name;
        let username = data.results[0].login.username;
        let password = data.results[0].login.password;
        let idValue = data.results[0].login.uuid;
        let registrationDate = data.results[0].registered.date.substring(0, 10);
        let registrationAge = data.results[0].registered.age;
        let phone = data.results[0].phone;
        let cell = data.results[0].cell;
        let nat = data.results[0].nat;


        userImage.src = picture;
        userName.innerHTML = first + " " + last;
        userEmail.innerHTML = email;
        aboutUser.innerHTML = "About " + title + " " + last;
        userLocation.innerHTML = "Location : " + city + ", " + state + ", " + country;
        detailText.innerHTML = `
        Meet ${title} ${first} ${last}, a distinguished ${gender} individual hailing from the vibrant city of ${city} in the state of ${state}, ${country}. Born on ${date}, ${first} carries with ${gender === 'female' ? 'her' : 'him'} the wisdom of ${age} years, making ${gender === 'female' ? 'her' : 'him'} a beacon of experience and grace. Residing at ${number} ${streetName}, ${first} navigates life with a spirited heart and a keen sense of adventure.

        In the digital realm, ${gender === 'female' ? 'she' : 'he'} goes by the username "${username}," a playful moniker that hints at the delightful personality ${gender === 'female' ? 'she' : 'he'} likely possesses. ${gender === 'female' ? 'Her' : 'His'} online presence is safeguarded by the password "${password}," adding a touch of security to ${gender === 'her' ? 'her' : 'his'} virtual identity. ${first}'s unique identifier, the UUID "${idValue}," sets ${gender === 'her' ? 'her' : 'him'} apart in the vast digital landscape.

        Having registered ${gender === 'her' ? 'her' : 'his'} place in the world on ${registrationDate}, ${first} brings ${registrationAge} years of rich experiences to every interaction. ${gender === 'Her' ? 'Her' : 'His'} contact details, including the phone number ${phone} and cell number ${cell}, serve as the conduits for connections with those fortunate enough to cross paths with ${gender === 'her' ? 'her' : 'him'}.

        As a ${gender === 'female' ? 'woman' : 'man'} of ${country} nationality (nat: ${nat}), ${first} embodies the cultural diversity that enriches our global tapestry.

        Join us in celebrating the life and presence of ${title} ${last}, a remarkable individual who adds vibrancy to the mosaic of humanity.
    `;
        console.log(data)
    })
}

window.addEventListener("load", getUser);