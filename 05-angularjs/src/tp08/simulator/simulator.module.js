import SimulatorService from "./simulator.service";
import Racemodule from "../race/race.module";

const SimulatorModule = angular
  .module("simulatorModule", [Racemodule.name])
  .service(SimulatorService.name, SimulatorService);

export default SimulatorModule;
