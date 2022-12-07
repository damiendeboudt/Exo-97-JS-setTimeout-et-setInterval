let buttonTimeout = document.getElementById("timeout");
let divTimeOut = document.getElementById("timeout-div");
let buttonSetInterval = document.getElementById("interval-start");
let interStop = document.getElementById("interval-stop");
let intervalDiv = document.getElementById("interval-div");
let compteur = 0


//fonction sur bouton timeout
buttonTimeout.addEventListener("click", () => {
    setTimeout(function () {
        let div = document.createElement("div")
        divTimeOut.appendChild(div)
        div.style.border = "1px solid black"
        div.innerHTML = "Mon Timeout vient de créer ce div 2 secondes après le click sur le bouton Timeout !"
    }, 2000)
});


//fonction interval sur bouton start & stop

buttonSetInterval.addEventListener("click", () => {
   let inTer = setInterval(()=> {
if (compteur <= 60) {
    intervalDiv.innerHTML = compteur.toString()
    compteur++
    interStop.addEventListener("click", () => {
      clearInterval(inTer)
    })
}
else{
        clearInterval(inTer)
}
    }, 1000)
})