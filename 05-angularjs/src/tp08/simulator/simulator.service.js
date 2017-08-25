export default class SimulatorService {
  constructor($interval, RaceService) {
    this.$interval = $interval;
    this.RaceService = RaceService;
    this.walkers = RaceService.list();
  }
  start() {
    let stopTime = this.$interval(() => {
      let min = 10;
      let max = 30;

      this.walkers.forEach(w => {
        this.RaceService.update(w.name, Math.floor(Math.random() * (max-min)/2) + min);
      })

      if(this.walkers.find(w => w.progress >= 100)) {
        this.$interval.cancel(stopTime);
      }

    }, 1000);
}
}
