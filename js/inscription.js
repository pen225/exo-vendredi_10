let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#repeatPassword");
let valider = document.querySelector("#submit");
let form = document.querySelector("#myForm");

// ECOUTEUR
form.addEventListener('submit',verification);


//Verification
function verification(e) {

    //Creation de mon objet user
    const user ={
        name: nom.value,
        secondName: prenom.value,
        pass: password.value,
        rPassword: repeatPassword.value
    }

    //Vérifier si les Inputs sont vides
    if (user.name === "" || user.secondName === "" || user.pass ==="" || user.rPassword ==="") {
        alert("Veuillez remplir tous les champs");
    }else{

        //Verification de password
        if (user.pass != user.rPassword) {
            alert("Veuillez entrer le même mot de passe");
        }else{
            
            // Fonction enregistrer
            enregistrer(user);
        }
        
    }
    e.preventDefault();
}

// FONCTION

Enregistrement
function enregistrer(user) {
    let usr =JSON.parse(localStorage.getItem("student"));
            if (usr) {  
                usr.push(user)
                localStorage.setItem("student",JSON.stringify(usr));
                nom.value ="";
                prenom.value ="";
                password.value ="";
                repeatPassword.value ="";
            }else{
                usr = [];
                usr.push(user)
                localStorage.setItem("student",JSON.stringify(usr));
                nom.value ="";
                prenom.value ="";
                password.value ="";
                repeatPassword.value ="";
            }
}

