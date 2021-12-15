let nom = document.querySelector("#nom");
let password = document.querySelector("#password");
let connecter = document.querySelector("#submit");
let message = document.querySelector(".message");
let form = document.querySelector("#myForm");

//Rucuperation du localstorage
const getUser = JSON.parse(localStorage.getItem("student"));

//Ecouteur sur mon formulaire
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //Parcourir le tableau
    for(let etudiant of getUser){

        //Vérifier si la valeur entrée existe dans le tableau
        if (etudiant.name == nom.value && etudiant.pass == password.value) {
            message.innerHTML = `Connexion reussie <br/> bienvenue mr ${etudiant.name}`;
            message.style.visibility = "visible";
            message.classList.add("message");
            message.style.color= "green";
            nom.value = "";
            password.value = "";
            break;
        }else{
             message.textContent = "Nom ou mot de passe incorecte";
            message.style.visibility = "visible";
            message.classList.add("message");
            message.style.color= "red";
        }
    }
});