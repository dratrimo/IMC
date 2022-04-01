let poids = prompt("Quel est votre poids en kg ?");
let taille = prompt("Quel est votre taille en mètre ?");

function calculerIMC(poids, taille) {
  let resultat = poids / Math.pow(taille, 2);
  return resultat;
}

alert(
  "Votre IMC (indince de masse corporel) est de " +
    calculerIMC(poids, taille) +
    "."
);
