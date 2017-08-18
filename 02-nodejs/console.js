const readline = require("readline");
var service = require("./service.js");
var listerTousLesPresentateurs = service.listerTousLesPresentateurs;
var listerTopPresentateurs = service.listerTopPresentateurs;
var listerToutesLesSessions = service.listerToutesLesSessions;
var trouverUneSession = service.trouverUneSession;

const rl = readline.createInterface(process.stdin, process.stdout);

function tousLesPresentateurs() {
  listerTousLesPresentateurs().forEach(p => {
    console.log(p.firstname, p.lastname);
  });
}

function listerTopPresentateurs() {
  listerTopPresentateurs().forEach(p => {
    console.log(p.firstname, p.lastname);
  });
}

function listerToutesLesSessions() {
  listerToutesLesSessions().forEach(s => {
    console.log(s.title);
  });
}

function trouverUneSession() {
  trouverUneSession().forEach(s => {
    console.log("description: " + s.desc);
    console.log("présentateurs: " + s.speakers);
  });
}

let menu = [
  { id: 0, libelle: "*** Application Conférence ***" },
  {
    id: 1,
    libelle: "1. Liste de tous les présentateurs",
    exec: tousLesPresentateurs
  },
  {
    id: 2,
    libelle: "2. Top présentateurs",
    exec: listerTopPresentateurs
  },
  {
    id: 3,
    libelle: "3. Liste des Sessions",
    exec: listerToutesLesSessions
  },
  {
    id: 4,
    libelle: "4. Détail d'une session",
    exec: trouverUneSession
  }
];
const menuStr =
  menu
    .map(m => {
      return m.libelle;
    })
    .join("\n") +
  "\n" +
  "choix > ";

rl.setPrompt(menuStr, menuStr.length);

rl.prompt();

rl
  .on("line", answer => {
    let commande = answer.split(" ")[0];
    let param = answer.split(" ")[1];
    if (commande === "99") {
      rl.close();
    } else if (menu[commande]) {
      if (menu[commande].param) {
        menu[commande].exec(param);
      } else {
        menu[commande].exec();
      }
    }
  })
  .on("close", () => {
    console.log("Aurevoir!");
    process.exit(0);
  });
