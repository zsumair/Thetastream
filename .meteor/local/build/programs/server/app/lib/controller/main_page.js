(function(){MainPageController = BaseController.extend({
  template: 'jobsList',


  findOptions: function() {
    return {sort: {createdAt: 1}};
  },

  waitOn: function() {
    return Meteor.subscribe("allJobs",4,this.findOptions());
  },

  data: function(){
    return {jobs: Jobs.find({},this.findOptions() )};
  }
});



/*
MainPageController = BaseController.extend({

  findOptions: function() {
    return {sort: {createdAt: 1}};
  },

  waitOn: function() {
    return Meteor.subscribe("allCars",4,this.findOptions());
  },

  data: function(){
    return {cars: Cars.find({},this.findOptions() )};
  }
});

*/

})();
