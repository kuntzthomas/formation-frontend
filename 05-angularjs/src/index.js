import tplTp01 from "./tp01/expressions.html";
import tplTp02 from "./tp02/vues.html";
import tplTp03 from "./tp03/carrousel.html";
import tplTp04 from "./tp04/forms.html";
import tplTp05 from "./tp05/tripList.html";
import tplTp06 from "./tp06/tripListDetails.html";
import tplTp07 from "./tp07/tripsComments.html";
import tplTp08 from "./tp08/race/race.html";

import angular from "angular";
import ngResource from "angular-resource";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import CarrouselCtrl from "./tp03/carrousel.controller";
import FormsCtrl from "./tp04/forms.controller";
import TripListCtrl from "./tp05/tripList.controller";
import TripListDetailCtrl from "./tp06/tripListDetails.controller";
import TripsCommentsCtrl from "./tp07/tripsComments.controller";
import apiUrls from "./tp07/apiUrls.service";
import TripsService from "./tp07/trips.service";
import commentsService from "./tp07/comments.service";
import StepService from "./tp07/step.service";
import raceModule from "./tp08/race/race.module";
import simulatorModule from "./tp08/simulator/simulator.module";

// insertion du code HTML dans le corps de la page principale
document.querySelector("body").innerHTML = [
  tplTp08
  // tplTp07,
  // tplTp06,
  // tplTp05,
  // tplTp04,
  // tplTp03,
  // tplTp02,
  // tplTp01
].join("<hr>");

angular
  .module("tripApp", ["ngResource", raceModule.name, simulatorModule.name])
  .controller(CarrouselCtrl.name, CarrouselCtrl)
  .controller(FormsCtrl.name, FormsCtrl)
  .controller(TripListCtrl.name, TripListCtrl)
  .controller(TripListDetailCtrl.name, TripListDetailCtrl)
  .controller(TripsCommentsCtrl.name, TripsCommentsCtrl)
  .constant("apiUrls", apiUrls)
  .service(TripsService.name, TripsService)
  .factory(commentsService.name, commentsService)
  .service(StepService.name, StepService);
