export default class RaceCtrl {
  constructor(RaceService, SimulatorService) {
    this.RaceService = RaceService;
    this.SimulatorService = SimulatorService;
  }

  $onInit() {
    this.walkerList = this.RaceService.list();
  }
  start() {
    this.SimulatorService.start();
  }

  reset() {
    this.walkerList.forEach(w => {
      w.progress = 0;
    });
  }
}
