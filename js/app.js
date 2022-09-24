let section = document.getElementById("section");
let onglet_un = document.getElementById("onglet-un");
let onglet_deux = document.getElementById("onglet-deux");
let onglet_trois = document.getElementById("onglet-trois");
let onglet_quatre = document.getElementById("onglet-quatre");
let un = document.getElementById("chiffre-un");
let deux = document.getElementById("chiffre-deux");
let trois = document.getElementById("chiffre-trois");
let quatre = document.getElementById("chiffre-quatre");
let titre = document.getElementById("onglet-titre");
let soustitre = document.getElementById("onglet-soustitre");
let description = document.getElementById("onglet-description");
let exit = document.getElementById("btn-rond");


/** CLICK ONGLET 1 */
onglet_un.onclick = function () { click_Ongletun() };


function click_Ongletun() {
    background = document.createElement("div");
    background.setAttribute("class", "bg-popup");
    section.prepend(background);
    onglet_un.style.background = "#1184D1";
    onglet_trois.style.background = "#1184D1";
    onglet_deux.style.background = "#1184D1";
    onglet_quatre.style.background = "#1184D1";
    onglet_deux.onclick = function (e) { e.preventDefault(); };
    onglet_trois.onclick = function (e) { e.preventDefault(); };
    onglet_quatre.onclick = function (e) { e.preventDefault(); };
    un.style.opacity = 0;
    deux.style.opacity = 0;
    trois.style.opacity = 0;
    quatre.innerHTML = "1";
    titre.innerHTML = "Conseil";
    soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
    description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
    exit.classList.add("rotate");
    if (window.matchMedia("(max-width: 700px)").matches) {
        onglet_trois.style.display = "none";
        onglet_quatre.style.display = "none";
        deux.innerHTML = "1";
        deux.style.opacity = 1;
    }
    background.addEventListener("click", () => {
        background.remove();
        exit.classList.remove("rotate");
        onglet_deux.onclick = function () { click_Ongletdeux() };
        onglet_trois.onclick = function () { click_Onglettrois() };
        onglet_quatre.onclick = function () { click_Ongletquatre() };
        onglet_deux.style.background = "#0777C2";
        onglet_trois.style.background = "#EF8451";
        onglet_quatre.style.background = "#EA6419";
        onglet_un.style.background = "#1184D1";
        un.style.opacity = 1;
        deux.style.opacity = 2;
        trois.style.opacity = 3;
        quatre.innerHTML = "4";
        titre.innerHTML = "Conseil";
        soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
        description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
        if (window.matchMedia("(max-width: 700px)").matches) {
            onglet_trois.style.display = "block";
            onglet_quatre.style.display = "block";
            deux.innerHTML = "2";
            deux.style.opacity = 1;
        }
    });
}/**END CLICK ONGLET 1 */

/** CLICK ONGLET 2 */
onglet_deux.onclick = function () { click_Ongletdeux() };

function click_Ongletdeux() {
    background = document.createElement("div");
    background.setAttribute("class", "bg-popup");
    section.prepend(background);
    onglet_un.style.background = "#0777C2";
    onglet_trois.style.background = "#0777C2";
    onglet_deux.style.background = "#0777C2";
    onglet_quatre.style.background = "#0777C2";
    onglet_un.onclick = function (e) { e.preventDefault(); };
    onglet_trois.onclick = function (e) { e.preventDefault(); };
    onglet_quatre.onclick = function (e) { e.preventDefault(); };
    un.style.opacity = 0;
    deux.style.opacity = 0;
    trois.style.opacity = 0;
    quatre.innerHTML = "2";
    titre.innerHTML = "Pratique";
    soustitre.innerHTML = "Nous croyons que la cybersécurité </br> permet de faire tourner le monde.";
    description.innerHTML = "Un monde plus sécurisé, plus inclusif, plus éducatif, plus respectueux de l’environnement.";
    if (window.matchMedia("(max-width: 700px)").matches) {
        onglet_trois.style.display = "none";
        onglet_quatre.style.display = "none";
        deux.innerHTML = "2";
        deux.style.opacity = 1;
    }
    exit.classList.add("rotate");
    background.addEventListener("click", () => {
        background.remove();
        exit.classList.remove("rotate");
        onglet_deux.style.background = "#0777C2";
        onglet_trois.style.background = "#EF8451";
        onglet_quatre.style.background = "#EA6419";
        onglet_un.style.background = "#1184D1";
        onglet_un.onclick = function () { click_Ongletun() };
        onglet_trois.onclick = function () { click_Onglettrois() };
        onglet_quatre.onclick = function () { click_Ongletquatre() };
        un.style.opacity = 1;
        deux.style.opacity = 2;
        trois.style.opacity = 3;
        quatre.innerHTML = "4";
        titre.innerHTML = "Conseil";
        soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
        description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
        if (window.matchMedia("(max-width: 700px)").matches) {
            onglet_trois.style.display = "block";
            onglet_quatre.style.display = "block";
            deux.innerHTML = "2";
            deux.style.opacity = 1;
        }
    });
}/**END CLICK ONGLET 2 */

/** CLICK ONGLET 3 */
onglet_trois.onclick = function () { click_Onglettrois() };

function click_Onglettrois() {
    background = document.createElement("div");
    background.setAttribute("class", "bg-popup");
    section.prepend(background);
    onglet_un.style.background = "#EF8451";
    onglet_trois.style.background = "#EF8451";
    onglet_deux.style.background = "#EF8451";
    onglet_quatre.style.background = "#EF8451";
    onglet_un.onclick = function (e) { e.preventDefault(); };
    onglet_deux.onclick = function (e) { e.preventDefault(); };
    onglet_quatre.onclick = function (e) { e.preventDefault(); };
    un.style.opacity = 0;
    deux.style.opacity = 0;
    trois.style.opacity = 0;
    quatre.innerHTML = "3";
    titre.innerHTML = "Carrières";
    soustitre.innerHTML = "Rejoindre un projet d’entreprise </br> dont vous êtes acteur !";
    description.innerHTML = "Chez Advens, on ne fait pas de la sécurité pour faire de la sécurité. La sécurité doit créer de la valeur, pour nos clients et pour nous.";
    exit.classList.add("rotate");
    if (window.matchMedia("(max-width: 700px)").matches) {
        onglet_deux.style.display = "none";
        onglet_quatre.style.display = "none";
        trois.innerHTML = "3";
        trois.style.opacity = 1;
    }
    background.addEventListener("click", () => {
        background.remove();
        exit.classList.remove("rotate");
        onglet_deux.style.background = "#0777C2";
        onglet_trois.style.background = "#EF8451";
        onglet_quatre.style.background = "#EA6419";
        onglet_un.style.background = "#1184D1";
        onglet_un.onclick = function () { click_Ongletun() };
        onglet_deux.onclick = function () { click_Ongletdeux() };
        onglet_quatre.onclick = function () { click_Ongletquatre() };
        un.style.opacity = 1;
        deux.style.opacity = 2;
        trois.style.opacity = 3;
        quatre.innerHTML = "4";
        titre.innerHTML = "Conseil";
        soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
        description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
        if (window.matchMedia("(max-width: 700px)").matches) {
            onglet_deux.style.display = "block";
            onglet_quatre.style.display = "block";
        }
    });
}/**END CLICK ONGLET 3 */

/** CLICK ONGLET 4 */
onglet_quatre.onclick = function () { click_Ongletquatre() };

function click_Ongletquatre() {
    background = document.createElement("div");
    background.setAttribute("class", "bg-popup");
    section.prepend(background);
    onglet_un.style.background = "#EA6419";
    onglet_trois.style.background = "#EA6419";
    onglet_deux.style.background = "#EA6419";
    onglet_quatre.style.background = "#EA6419";
    onglet_un.onclick = function (e) { e.preventDefault(); };
    onglet_deux.onclick = function (e) { e.preventDefault(); };
    onglet_trois.onclick = function (e) { e.preventDefault(); };
    un.style.opacity = 0;
    deux.style.opacity = 0;
    trois.style.opacity = 0;
    quatre.innerHTML = "4";
    titre.innerHTML = "Citation";
    soustitre.innerHTML = "Si notre mission est de participer à faire touner le monde";
    description.innerHTML = "Notre ambition doit être de participer à le changer.";
    exit.classList.add("rotate");
    if (window.matchMedia("(max-width: 700px)").matches) {
        onglet_deux.style.display = "none";
        onglet_trois.style.display = "none";
    }
    background.addEventListener("click", () => {
        background.remove();
        exit.classList.remove("rotate");
        onglet_deux.style.background = "#0777C2";
        onglet_trois.style.background = "#EF8451";
        onglet_quatre.style.background = "#EA6419";
        onglet_un.style.background = "#1184D1";
        onglet_un.onclick = function () { click_Ongletun() };
        onglet_deux.onclick = function () { click_Ongletdeux() };
        onglet_trois.onclick = function () { click_Onglettrois() };
        un.style.opacity = 1;
        deux.style.opacity = 2;
        trois.style.opacity = 3;
        quatre.innerHTML = "4";
        titre.innerHTML = "Conseil";
        soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
        description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
        if (window.matchMedia("(max-width: 700px)").matches) {
            onglet_deux.style.display = "block";
            onglet_trois.style.display = "block";
        }
    });
}/**END CLICK ONGLET 4 */

/** CLICK ONGLET 1 */
exit.onclick = function () { click_exit() };

function click_exit() {
    exit.classList.remove("rotate");
    onglet_deux.style.background = "#0777C2";
    onglet_trois.style.background = "#EF8451";
    onglet_quatre.style.background = "#EA6419";
    onglet_un.style.background = "#1184D1";
    onglet_un.onclick = function (e) { e.preventDefault };
    onglet_deux.onclick = function () { click_Ongletdeux() };
    onglet_trois.onclick = function () { click_Onglettrois() };
    un.style.opacity = 1;
    deux.style.opacity = 2;
    trois.style.opacity = 3;
    quatre.innerHTML = "4";
    titre.innerHTML = "Conseil";
    soustitre.innerHTML = "Vous accompagner </br> dans la démarche sécurité";
    description.innerHTML = "La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.";
}/**END CLICK ONGLET 4 */


/** RELOAD JS SCREENSIZE CHANGE */
window.addEventListener("resize", () => {
    const widthAbove700 = window.innerWidth > 700;

    const urlParams = new URLSearchParams(window.location.search);
    let noRun = urlParams.get('noRun');

    if (widthAbove700 && noRun)
      window.location.href = window.location.href.split("?")[0];

    if (widthAbove700 || noRun) return;

    window.location.href = window.location.href + "?noRun=true";
  });

  window.addEventListener("resize", () => {
    const widthAbove800 = window.innerWidth > 800;

    const urlParams = new URLSearchParams(window.location.search);
    let noRun = urlParams.get('noRun');

    if (widthAbove800 && noRun)
      window.location.href = window.location.href.split("?")[0];

    if (widthAbove800 || noRun) return;

    window.location.href = window.location.href + "?noRun=true";
  });/**END RELOAD JS SCREENSIZE CHANGE */