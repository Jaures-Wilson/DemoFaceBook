function verifierNom(nom){
    let nomRegExp = RegExp("[a-zA_Z]");
    if(nomRegExp.test(nom)){
        console.log("nom true")
        return true
    }else{
        console.log("nom false")
        let th = document.querySelector(".prenomClass")
        th.classList.add("error")
       
        let text = "((remplissez le champ <<nom>> convenablement))"
        let posi = document.createElement("span")
        posi.classList.add("error1") 
        posi.textContent = text
        let entete = document.querySelector(".entete")
        entete.appendChild(posi)
        return false
    }
}


function verifierNomFamille(nom){
    let nomRegExp = RegExp("[a-zA_Z]");
    if(nomRegExp.test(nom)){
        console.log("famille true")
        return true
    }else{
        console.log("famille false")
        let thA = document.querySelector(".nomfamilleClass")
        thA.classList.add("error")
        let text = "((remplissez le champ <<nom de famille>> convenablement))"
        let posi = document.createElement("span")
        posi.classList.add("error1") 
        posi.textContent = text
        let entete = document.querySelector(".entete")
        entete.appendChild(posi)
        return false
    }
}


function verifierMobileEmail(mobileemail) { 
    const numeroRegExp = new RegExp('^[0-9]{9}$');
    if (numeroRegExp.test(mobileemail)) {
      console.log("Numéro de téléphone valide");
      return true;
    }
    const emailRegExp = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$');
    if (emailRegExp.test(mobileemail)) {
      console.log("Adresse email valide");
      return true;
    }
    console.log("Entrée invalide");
    let th = document.querySelector(".mobileemailClass")
        th.classList.add("error")
        let text = "((numéro mobile à 9 chiffres exactement ou email de syntaxe correcte))"
        let posi = document.createElement("span")
        posi.classList.add("error1") 
        posi.textContent = text
        let entete = document.querySelector(".entete")
        entete.appendChild(posi)
    return false;
  }



function verifierMotPass(motPass){
    let motPassRegExp = new RegExp("^[a-zA-Z0-9.?!,;]+$")
    if((motPassRegExp.test(motPass)) && (motPass.length > 6)){
        console.log("pass true")
        return true
    }else{
        console.log("pass false")
        let th = document.querySelector(".motpassClass")
        th.classList.add("error")
        let text = "((mot de passe à 6 caractères parmi lesquels les lettres, les chiffres et ponctuations))"
        let posi = document.createElement("span")
        posi.classList.add("error2") 
        posi.textContent = text
        let premiereTable = document.querySelector(".entete")
        premiereTable.appendChild(posi)
        return false
    }
}


function verifierDate(annee){
    if(annee > 2019){
        let tha = document.querySelector(".jourClass")
        let thb = document.querySelector(".moisClass")
        let thc = document.querySelector(".anneeClass")
        tha.classList.add("error")
        thb.classList.add("error")
        thc.classList.add("error")
        let text = "((veillez entrez votre véritable année de naissance))"
        let posi = document.createElement("span")
        posi.classList.add("error2") 
        posi.textContent = text
        let date = document.querySelector(".date")
        date.appendChild(posi)
        console.log("annee false")
        return false
    }else{
        return true
    }
}





function Enregistrement(){
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let balisemobileemail = document.getElementById("mobileemail")
        let mobileemail = balisemobileemail.value
        let baliseprenom = document.getElementById("prenom")
        let prenom = baliseprenom.value
        let balisenomfamille = document.getElementById("nomfamille")
        let nomfamille = balisenomfamille.value
        let balisemotPass = document.getElementById("motpass")
        let motPass = balisemotPass.value
        let baliseannee = document.querySelector("#annee")
        let annee = baliseannee.value
        
        console.log(prenom)
        verifierNom(prenom)
        console.log(nomfamille)
        verifierNomFamille(nomfamille)
        console.log(mobileemail)
        verifierMobileEmail(mobileemail)
        console.log(motPass)
        verifierMotPass(motPass)
        console.log(annee)
        verifierDate(annee)

        const selectedRadio = form.querySelector('input[name="genre"]:checked');
        if (!selectedRadio) {
            console.log(false)
            // Si aucun bouton radio n'est sélectionné, afficher le message d'erreur
            let tha = document.querySelector(".gen1")
            let thb = document.querySelector(".gen2")
            let thc = document.querySelector(".gen3")
            tha.classList.add("error")
            thb.classList.add("error")
            thc.classList.add("error")
            let text = "((cocher un champ ci-dessous est obligatoire))"
            let posi = document.querySelector(".error5")
            let html= `
                    <span for="prenom">${text}<\span>
                    `
            posi.innerHTML=html
            return false
        } 
    })
}

Enregistrement()

