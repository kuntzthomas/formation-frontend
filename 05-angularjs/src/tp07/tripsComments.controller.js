export default class TripsCommentsCtrl {
  constructor(TripsService, commentsService, StepService) {
    this.tripsService = TripsService;
    this.commentsService = commentsService;
    this.StepService = StepService;
  }

  $onInit() {
    this.trip = this.tripsService.findAll();
  }

  comment() {
    this.commentFound = this.commentsService.findBytripId(this.tripId);
  }

  addComment() {
    this.commentsService.addComment(this.newComment, this.commentFound);
    this.newComment = "";
  }

  steps() {
    this.stepFound = this.StepService.findStepByTripId(this.tripId);
  }
}
