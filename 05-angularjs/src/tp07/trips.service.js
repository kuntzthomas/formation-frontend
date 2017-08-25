export default class TripsService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.tripResource = this.$resource(
      this.apiUrls.light + ":tripId",
      {
        tripId: "@id"
      },
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

  findAll() {
    return this.tripResource.query();
  }
}
