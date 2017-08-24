import tplTp01 from "./tp01/expressions.html";
import tplTp02 from "./tp02/vues.html";
import tplTp03 from "./tp03/carrousel.html";
import tplTp04 from "./tp04/forms.html";
import tplTp05 from "./tp05/tripList.html";
import tplTp06 from "./tp06/tripListDetails.html";
import angular from "angular";
import CarrouselCtrl from "./tp03/carrousel.controller";
import FormsCtrl from "./tp04/forms.controller";
import TripListCtrl from "./tp05/tripList.controller";
import TripListDetailCtrl from "./tp06/tripListDetails.controller";
import ngResource from "angular-resource";

// insertion du code HTML dans le corps de la page principale
document.querySelector("body").innerHTML = [tplTp06].join("<hr>");

angular
  .module("tripApp", ["ngResource"])
  .controller(CarrouselCtrl.name, CarrouselCtrl)
  .controller(FormsCtrl.name, FormsCtrl)
  .controller(TripListCtrl.name, TripListCtrl)
  .controller(TripListDetailCtrl.name, TripListDetailCtrl);
  
