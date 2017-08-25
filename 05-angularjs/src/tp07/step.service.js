export default class StepService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
  }
  findStepByTripId(tripId) {
    return this.$resource(this.apiUrls.full + "/:tripId", {
      tripId: "@id"
    }).get({ tripId: tripId });
  }
}
