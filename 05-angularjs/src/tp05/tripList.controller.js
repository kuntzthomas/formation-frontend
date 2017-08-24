export default class TripListCtrl {
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http({
      methode: "GET",
      url: "http://localhost:3000/trips"
    }).then(
      response => {
        this.data = response.data;
      },
      response => {}
    );
  }

  save(trip) {
    this.$http.patch("http://localhost:3000/trips/" + trip.id, trip)
  }
}
