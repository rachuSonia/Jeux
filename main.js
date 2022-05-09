//recuperer id 
//declaration des variables global
var button = document.getElementById('firingButton');
var compteur = document.getElementById('billboard');
var loncementFusee = document.getElementById('rocket');
var arretLoncement = document.getElementById('arret');
var LoncementZero = document.getElementById('zero');
var intervalDuCompteurRebour;
var timeOut;
var count = 10;
var creerEtoile;
var rand;

//fonction qui permet de supprimer l'intervale
function arretInterval() {
	clearInterval(intervalDuCompteurRebour);
}

//fonction qui permet d'arreter l'intervale
function arrettime() {
	clearTimeout(timeOut);
}

//fonction qui permet de réaliser le décompte de 10 à 0 
function maFonction() {
	compteur.innerHTML = '<span>' + count + '</span>';
	count--;

	if (count < 0) {
		arretInterval();
		count--;
		declanchementFusee();
	}
}


//fonction qui permet de realiser l'evenement
function declanchementFusee() {
	loncementFusee.classList.toggle('tookOff');
}


function onButtonClick() {
	button.removeEventListener('click', onButtonClick);
	button.classList.toggle('hidden');
	intervalDuCompteurRebour = window.setInterval(maFonction, 1000);
	timeOut = window.setTimeout(maFonction, 1000);
}


function arretLoncementFusee() {
	arretLoncement.removeEventListener('click', arretLoncementFusee);
	arretInterval();
	arrettime();
}

//fonction qui permet d'arreter le compte à reboure
function arretZero() {
	if (count < 10) {
		LoncementZero.removeEventListener('click', arretZero);
		count = 10;
		loncementFusee.classList.toggle('tookOfff');
		arretInterval();
		arrettime();
		compteur.innerHTML = '<span>' + count + '</span>';
	}
}
button.addEventListener('click', onButtonClick);
arretLoncement.addEventListener('click', arretLoncementFusee);
LoncementZero.addEventListener('click', arretZero);

