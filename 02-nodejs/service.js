var devfest = require("./data/devfest-2015.js");

var listerTousLesPresentateurs = function() {
  return devfest.speakers;
};

var listerToutesLesSessions = function() {
  return devfest.sessions;
};

var trouverUneSession = function(idSession) {
  return listerToutesLesSessions().filter(function(element) {
    return element.id == idSession;
  });
};

var listerTopPresentateurs = function() {
  return listerTousLesPresentateurs().filter(function(element) {
    return element.topspeaker == true;
  });
};

exports.listerTousLesPresentateurs = listerTousLesPresentateurs;
exports.listerToutesLesSessions = listerToutesLesSessions;
exports.trouverUneSession = trouverUneSession;
exports.listerTopPresentateurs = listerTopPresentateurs;
