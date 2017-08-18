//Constructeur personne
var personne = function(nom, prenom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {
    return this.nom + " " + this.prenom + " " + this.pseudo;
  };
};

var jules = new personne("LEMAIRE", "Jules", "jules77");

var paul = new personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne(personne) {
  console.log(personne.nom);
  console.log(personne.prenom);
  console.log(personne.pseudo);
  console.log(personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);
//Test modification du pseudo
jules.pseudo = "jules44";
console.log(jules.getNomComplet);

console.log(jules.age);

//Ajout de la propriété age à personne
personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

//Ajout de la methode des initiales
personne.prototype.getInitiales = function(nom, prenom) {
  return nom.charAt(0) + prenom.charAt(0);
};
console.log(jules.getInitiales(jules.nom, jules.prenom));

var robert = {
  prenom: "Robert",
  nom: "LEPREFET",
  pseudo: "robert77",
  getNomComplet: function() {
    return this.nom + " " + this.prenom + " " + this.pseudo;
  }
};
afficherPersonne(robert);

function client(nom, prenom, pseudo, numeroClient) {
  personne.call(this, nom, prenom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfo = function() {
    return this.nom + " " + this.prenom + " " + this.pseudo;
  };
}

var steve = new client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());