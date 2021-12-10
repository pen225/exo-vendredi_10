let nom = document.querySelector("#nom");
let password = document.querySelector("#password");
let connecter = document.querySelector("#submit");
let message = document.querySelector(".message");
let form = document.querySelector("#myForm");

const getUser = JSON.parse(localStorage.getItem("user"));
form.addEventListener('submit',(e)=>{
    console.log(getUser);
    e.preventDefault();
    if (getUser.name != nom.value || getUser.pass != password.value) {
        message.textContent = "Nom ou mot de passe incorecte";
        message.style.visibility = "visible";
        message.classList.add("message");
        message.style.color= "red";
    }else{
        message.textContent = "Connexion reussie";
        message.style.visibility = "visible";
        message.classList.add("message");
        message.style.color= "green";
        nom.value = "";
        password.value = "";
    }
})