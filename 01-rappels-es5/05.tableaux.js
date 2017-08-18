var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(function(element) {
  console.log(element);
});

//Function every
var lettreADansToutesLesVilles = function(element) {
  return element.indexOf("a") >= 0;
};
console.log(
  "lettreADansToutesLesVilles =",
  villes.every(lettreADansToutesLesVilles)
);

//Function some
var auMoinsUneVilleAvecUnTiret = function(element) {
  return element.indexOf("-") >= 0;
};
console.log(
  "auMoinsUneVilleAvecUnTiret =",
  villes.some(auMoinsUneVilleAvecUnTiret)
);

//Function filter
var villesSansTiretSansEspace = function(element) {
  return (element.indexOf("-") < 0) & (element.indexOf(" ") < 0);
};
console.log(
  "villesSansTiretSansEspace =",
  villes.filter(villesSansTiretSansEspace)
);

//Chainage de fonctions
console.log(
  villes
    .filter(function(element) {
      return element.endsWith("s");
    })
    .map(function(element) {
      return element.toUpperCase();
    })
);
