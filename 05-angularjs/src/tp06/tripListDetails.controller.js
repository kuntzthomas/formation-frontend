export default class TripListDetailsCtrl {
  constructor($resource) {
    this.$resource = $resource;
    this.tripList;
    this.TripResource = $resource(
      "http://localhost:3000/trips-details/:tripId",
      { tripId: "@id" },
      {
        update: { method: "PUT" },
        query: {
          method: "GET",
          params: { data: "trips" },
          isArray: true
        }
      }
    );
  }
  $onInit() {
    this.tripList = this.TripResource.query();
  }
  update(desc) {
    desc.$update();
  }
}
