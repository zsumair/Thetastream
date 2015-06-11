JobDetailsController= BaseController.extend ({
  template: 'jobDetails',

  waitOn: function() {
    return Meteor.subscribe("singleJob", this.params._id);
  },

  data: function(){
    return Jobs.findOne(this.params._id);
  }

});
