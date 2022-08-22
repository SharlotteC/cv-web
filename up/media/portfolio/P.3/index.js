const colors = new Array( // déclaration de mes couleurs pour le code secret
    "rgb(0, 128, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 192, 203)",
    "rgb(255, 165, 0)"
);

const colorsArray = document.querySelectorAll(".color"); 
const secretCode = document.querySelectorAll(".secretColor");
const checkBtn = document.getElementById("check");
const popup = document.getElementById("popup");
const messageFin = document.getElementById("message-fin");
const btnReplay = document.getElementById('play-button')
const audioLose  = document.createElement('audio');
audioLose.src = "son/perdu.mp3";
const audioWin = document.createElement('audio');
audioWin.src = "son/gagné.mp3";

// initialistaion du code secret
function randomColors() { 
    const color = colors.length;
    let random;
    random = Math.floor(Math.random() * color);
    document.getElementById("secretColor1").style.background = colors[random];
    random = Math.floor(Math.random() * color);
    document.getElementById("secretColor2").style.background = colors[random];
    random = Math.floor(Math.random() * color);
    document.getElementById("secretColor3").style.background = colors[random];
    random = Math.floor(Math.random() * color);
    document.getElementById("secretColor4").style.background = colors[random];
}
randomColors();

let userChoiceArray = [];
let activeLine = 12;
let activeCell = 1;
let userChoice = ""
let currentLine = document.querySelector(`.lineBoard${activeLine}`);
let cellCheck = currentLine.children[4];
let cellCheckArray = cellCheck.children;

// fonction pour remplir le board avec les couleurs de l'utilisateur
function inputColors() {
    for (let i = 0; i < 6; i++){
        colorsArray[i].addEventListener("click", (e) => {
            if(activeCell < 5){
                document.querySelector(`.lineBoard${activeLine}`)
                        .querySelector(`.cell${activeCell}`).style.backgroundColor = e.target.id; // recupère la value pour remplir le deck avec choix du joueur           
                userChoice = window.getComputedStyle(e.currentTarget)
                                .getPropertyValue("background-color");
                userChoiceArray.push(userChoice);          
                activeCell++;
            }            
        })
    }
};
// fonction poour comparer les couleurs choisies et celles du code secret
function compareBoardCell() {
    if (userChoiceArray[0] === secretCode[0].style.backgroundColor) { // compare les valeurs récuperées et injecte la classe en fonction du résulat
        cellCheckArray[0].classList.add("goodPlace"); // si la couleur est bonne class= good place
    } else if (cellCheckArray) {
        for (let i = 0; i < secretCode.length; i++) {   // verifie si la couleur est presente dans le code secret
            if (userChoiceArray[0] == secretCode[i].style.backgroundColor) {
                cellCheckArray[0].classList.add("wrongPlace"); // si elle est presente claas "wrong place"
            }
        }
    }

    if (userChoiceArray[1] === secretCode[1].style.backgroundColor) {
        cellCheckArray[1].classList.add("goodPlace");
    } else if (cellCheckArray) {
        for (let i = 0; i < secretCode.length; i++) {
            if (userChoiceArray[1] == secretCode[i].style.backgroundColor) {
                cellCheckArray[1].classList.add("wrongPlace");
            }
        }
    }
    if (userChoiceArray[2] === secretCode[2].style.backgroundColor) {
        cellCheckArray[2].classList.add("goodPlace");
    } else if (cellCheckArray) {
        for (let i = 0; i < secretCode.length; i++) {
            if (userChoiceArray[2] == secretCode[i].style.backgroundColor) {
                cellCheckArray[2].classList.add("wrongPlace");
            }
        }
    }
    if (userChoiceArray[3] === secretCode[3].style.backgroundColor) {
        cellCheckArray[3].classList.add("goodPlace");
    } else if (cellCheckArray) {
        for (let i = 0; i < secretCode.length; i++) {
            if (userChoiceArray[3] == secretCode[i].style.backgroundColor) {
                cellCheckArray[3].classList.add("wrongPlace");
            }
        }
    }
}
// fonction pour afficher le resultat de la comparaison et les actions en résultant
function checkResult() {
    if (
        cellCheckArray[0].classList.contains("goodPlace") &&   // si les 4 pions sont de la classe "good place" on gagne 
        cellCheckArray[1].classList.contains("goodPlace") &&
        cellCheckArray[2].classList.contains("goodPlace") &&
        cellCheckArray[3].classList.contains("goodPlace")
    ) {
        messageFin.innerText = " You Win !!!";
        popupBox.style.display = "flex"
        cache.style.display = "none"
        audioWin.play()
    } else {
        activeCell = 1                 // sinon on passe a une autre ligne 
        activeLine--
        userChoiceArray = []
        currentLine = document.querySelector(`.lineBoard${activeLine}`);
        cellCheck = currentLine.children[4];
        cellCheckArray = cellCheck.children;
    }
    if (activeLine <1) {      // si on arrive en haut du tableau on perd 
        messageFin.innerText = " You Lose !!!";
        popupBox.style.display = "flex"
        cache.style.display = "none"
        audioLose.play()
    }
    if ((activeLine <1 ) && (cellCheckArray[0].classList.contains("goodPlace") && // si on est en haut avec la bonne combinaison on gagne 
        cellCheckArray[1].classList.contains("goodPlace") &&
        cellCheckArray[2].classList.contains("goodPlace") &&
        cellCheckArray[3].classList.contains("goodPlace"))) {
        messageFin.innerText = " You win!!!";
        popupBox.style.display = "flex"
        cache.style.display = "none"
        audioWin.play()
    }
}
 // evenement permettant de lancer mes fonctions au click
checkBtn.addEventListener("click", () => {
    compareBoardCell();        
    checkResult();
});
// evenement permettant de recharger ma page au click pour rejouer 
btnReplay.addEventListener( "click", () => { location.reload()  })

inputColors();




























// function randomColors() {
//     const color = colors.length;
//     let random;
//     random = Math.floor(Math.random() * color);
//     document.getElementById("secretColor1").style.background = colors[random];
//     random = Math.floor(Math.random() * color);
//     document.getElementById("secretColor2").style.background = colors[random];
//     random = Math.floor(Math.random() * color);
//     document.getElementById("secretColor3").style.background = colors[random];
//     random = Math.floor(Math.random() * color);
//     document.getElementById("secretColor4").style.background = colors[random];
// }
// randomColors();

// let userChoiceArray = [];
// let activeLine = 12;
// let activeCell = 1;
// let endLine = 1;

// function inputColors() {
//     for (let i = 0; i < 6; i++)
//         colorsArray[i].addEventListener("click", (e) => {
//             if (endLine > 4) {
//                 endLine = 1;
//                 activeLine--;
//                 activeCell = 1;
//             }
//             document
//                 .querySelector(`.lineBoard${activeLine}`)
//                 .querySelector(`.cell${activeCell}`).style.backgroundColor =
//                 e.target.id;
//             let userChoice = window
//                 .getComputedStyle(e.currentTarget)
//                 .getPropertyValue("background-color");
//             // console.log(userChoice);
//             userChoiceArray.push(userChoice);
//             // console.log(userChoiceArray);
//             const currentLine = document.querySelector(`.lineBoard${activeLine}`);
//             // console.log(currentLine);
//             let cellCheck = currentLine.children[4];
//             // console.log(cellCheck);
//             let cellCheckArray = cellCheck.children;
//             // console.log(cellCheckArray);
//             activeCell++;

//             checkBtn.addEventListener("click", () => {
//                 function compareBoardCell() {
//                     if (userChoiceArray[0] === secretCode[0].style.backgroundColor) {
//                         cellCheckArray[0].classList.add("goodPlace");
//                     } else if (cellCheckArray) {
//                         for (let i = 0; i < secretCode.length; i++) {
//                             if (userChoiceArray[0] == secretCode[i].style.backgroundColor) {
//                                 cellCheckArray[0].classList.add("wrongPlace");
//                             }
//                         }
//                     }

//                     if (userChoiceArray[1] === secretCode[1].style.backgroundColor) {
//                         cellCheckArray[1].classList.add("goodPlace");
//                     } else if (cellCheckArray) {
//                         for (let i = 0; i < secretCode.length; i++) {
//                             if (userChoiceArray[1] == secretCode[i].style.backgroundColor) {
//                                 cellCheckArray[1].classList.add("wrongPlace");
//                             }
//                         }
//                     }
//                     if (userChoiceArray[2] === secretCode[2].style.backgroundColor) {
//                         cellCheckArray[2].classList.add("goodPlace");
//                     } else if (cellCheckArray) {
//                         for (let i = 0; i < secretCode.length; i++) {
//                             if (userChoiceArray[2] == secretCode[i].style.backgroundColor) {
//                                 cellCheckArray[2].classList.add("wrongPlace");
//                             }
//                         }
//                     }
//                     if (userChoiceArray[3] === secretCode[3].style.backgroundColor) {
//                         cellCheckArray[3].classList.add("goodPlace");
//                     } else if (cellCheckArray) {
//                         for (let i = 0; i < secretCode.length; i++) {
//                             if (userChoiceArray[3] == secretCode[i].style.backgroundColor) {
//                                 cellCheckArray[3].classList.add("wrongPlace");
//                             }
//                         }
//                     }
//                 }

//                 compareBoardCell();

//                 function checkResult() {
//                     if (
//                         cellCheckArray[0].classList.contains("goodPlace") &&
//                         cellCheckArray[1].classList.contains("goodPlace") &&
//                         cellCheckArray[2].classList.contains("goodPlace") &&
//                         cellCheckArray[3].classList.contains("goodPlace")
//                     ) {
//                         messageFin.innerText = " You Win !!!";
//                         popupBox.style.display = "flex"
//                         cache.style.display = "none"
//                     } else if (
//                         !cellCheckArray[0].classList.contains("goodPlace") ||
//                         !cellCheckArray[1].classList.contains("googPlace") ||
//                         !cellCheckArray[2].classList.contains("goodPlace") ||
//                         !cellCheckArray[3].classList.contains("goodPlace")
//                     ) {
//                         endLine++;
//                         // console.log(userChoiceArray);
//                         cellCheckArray = [];
//                         userChoiceArray = [];
//                         userChoiceArray.push(userChoice);
//                         userChoiceArray.shift();
//                         // console.log(currentLine);
//                         // console.log(currentLine);
//                     }
//                     if (activeLine <= 1) {
//                         messageFin.innerText = " You Lose !!!";
//                         popupBox.style.display = "flex"
//                         cache.style.display = "none"
//                     }
//                     if ((activeLine <= 1) && (cellCheckArray[0].classList.contains("goodPlace") &&
//                         cellCheckArray[1].classList.contains("goodPlace") &&
//                         cellCheckArray[2].classList.contains("goodPlace") &&
//                         cellCheckArray[3].classList.contains("goodPlace"))) {
//                         messageFin.innerText = " You win!!!";
//                         popupBox.style.display = "flex"
//                         cache.style.display = "none"
//                     }
//                 }
//                 checkResult();
//             });
//         });
//     }
//     btnReplay.addEventListener( "click", () => { location.reload()
    
    
//     })
// inputColors();






