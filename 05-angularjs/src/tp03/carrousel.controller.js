export default class CarrouselCtrl {
  constructor($interval) {
    this.$interval = $interval;
  }

  $onInit() {
    this.images = [
      { name: "New York", url: "img/nyc.jpg" },
      { name: "Paris", url: "img/paris.jpg" },
      { name: "Rio de Janeiro", url: "img/rio-de-janeiro.jpg" },
      { name: "Rome", url: "img/rome.jpg" },
      { name: "Tokyo", url: "img/tokyo.jpg" }
    ];

    this.currentId = 0;

    this.$interval(() => this.next(), 3000);
  }

  next() {
    this.currentId == this.images.length - 1
      ? (this.currentId = 0)
      : this.currentId++;
  }

  previous() {
    this.currentId == 0
      ? (this.currentId = this.images.length - 1)
      : this.currentId--;
  }
}
