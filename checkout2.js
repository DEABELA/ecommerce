if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
}

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        fetchFavourites();


    } else {
        // No user is signed in.
    }
});

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}

//fetching favourites 
var database = firebase.database();


//generateAdCard
function adCard(data, key) {
    return `
    <div class='line'></div>
    <table class='order-table'>
        <tbody>
            <tr>
                <td><img src='${data.url}' class='full-width'></img>
                </td>
                <td>
                    <br> <span class='card-title'>${data.title}</span>
                    <br> ${data.description}<br> <span class='thin small'> </span>
                </td>

            </tr>
            <tr>
                <td>
                    <div class='price'>${data.price}</div>
                </td>
            </tr>
        </tbody>

    </table>
    `
}

//Delete Favourite 

function deleteFavourite(key, button) {

    // console.log(button.parentElement)
    document.getElementById('row').removeChild(button.parentElement.parentElement.parentElement);
    var favouritesRef = database.ref('favourites/' + firebase.auth().currentUser.uid + `/` + key).set({});
    location.reload();
}



//fetching code
function fetchTotal() {
    userId = firebase.auth().currentUser.uid;
    fetch(`https://olx-pakistan-8800e.firebaseio.com/favourites/${userId}.json`)
        .then(data => {
            // console.log(data.json())
            // console.log(data.json())
            return data.json();
        })
        .then(data2 => {

            for (let i in data2) {


            }
            a;
        })
        // userId = firebase.auth().currentUser.uid;
        // console.log(userId)
}

function fetchFavourites() {
    userId = firebase.auth().currentUser.uid;
    console.log(userId)
    fetch(`https://olx-pakistan-8800e.firebaseio.com/favourites/${userId}.json`)
        .then(data => {
            // console.log(data.json())
            // console.log(data.json())
            return data.json();
        })
        .then(data2 => {
            console.log(data2);
            let a = 0
            for (let i in data2) {
                console.log(data2[i])
                a += parseInt(data2[i].price.replace("Etb", ""));
                // console.log(data2[i].price);
                document.querySelector(`.order-info-content`).innerHTML += adCard(data2[i], i);
            }
            console.log(document.getElementById(`.cartTotal`))
            document.querySelector(`.cartTotal`).innerHTML = a



        })
}