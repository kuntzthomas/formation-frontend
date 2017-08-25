class CommentsService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.commentResource = this.$resource(
      this.apiUrls.full + "/:tripId",
      { tripId: "@id" },
      {
        update: { method: "PUT" }
      }
    );
  }

  findBytripId(tripId) {
    return this.commentResource.get({ tripId: tripId });
  }

  addComment(comment, trip) {
    trip.comments.push({id: 'anonymous', text: comment})
    trip.$update();
  }
}

const commentsService = (apiUrls, $resource) => {
  return new CommentsService(apiUrls, $resource);
};

export default commentsService;
