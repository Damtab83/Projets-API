const allentriesDiv = document.getElementById('allentries');
const baseUrl = "https://reqres.in/";
const BaseUrlUsers = baseUrl + "api/users";

document.getElementById('getUsers').addEventListener('click', function(){
    getAllUser();
})

function getAllUser() {
    let pageNum =  document.getElementById('pageNum').value;
    fetch(BaseUrlUsers + '?' + new URLSearchParams({
        per_page: 4,
        page: pageNum
    }).toString()
    , {method: 'GET'})
    .then(function(response){
        return response.json();
    })
    .then(function(responseJson){
        allentriesDiv.innerHTML = '';
        let allUsersArray = responseJson.data;
        allUsersArray.forEach(user => {
            allentriesDiv.innerHTML += user.email + '<br/>';
        });
    });
}

function createUser() {
    let name = document.getElementById('nomInput').value;
    let job = document.getElementById('jobInput').value;
    fetch(BaseUrlUsers, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "job": job
            })
        })
    .then(function(response){
        return response.json();
    })
    .then(function(responseJson){
        let dateCreation = new Date(responseJson.createdAt);
        alert("Félicitations, l'utilisateur n°"+ 
        responseJson.id + " a bien été créé à"
        + dateCreation.toLocaleTimeString() +
        "/ Nom: "+ 
        responseJson.name + "/ Job: "+ 
        responseJson.job);
    })
}