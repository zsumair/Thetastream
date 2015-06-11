(function(){/* ===========================================
      Global Declarations
============================================= */

AutoForm.addHooks('insertJobs', {
  onSuccess: function() {
    console.log("running after hooks insert");
    return Session.set('jobPosted',true);
    Router.go('root');
  }
});

//var pageSession =  new ReactiveDict();

/* ======================================

  Template Helpers

========================================== */

/*=============================
  MomentJs Date Helpers
*/

Template.registerHelper("formatDate", function(createdAt){
    return moment(new Date(createdAt)).fromNow();
});

/*=======================================
  Displaying Filter Template Helpers
*/

Template.categoryFilter.helpers({
  companyCategories: function() {
    var everything = Jobs.find().fetch();
    var ccategory = _.pluck(everything,"ccategory");
    var justCategory = _.uniq(ccategory)
    console.log(justCategory);
    return justCategory;
  }
});

Template.cityFilter.helpers({
  companyCities: function() {
    var everything = Jobs.find().fetch();
    var city = _.pluck(everything,"city");
    var justCity = _.uniq(city)
    console.log(justCity);
    return justCity;
  }
});

Template.jobTypeFilter.helpers({
  jobTypeSelection: function() {
    var everything = Jobs.find().fetch();
    var jtype = _.pluck(everything,"jtype");
    var jobType = _.uniq(jtype)
    console.log(jobType);
    return jobType;
  }
});

/*======================================
   Displaying Job List Template Helpers
*/

// incrementLimit = function(inc=10) {
//   newLimit = Session.get('limit') + inc;
//   Session.set("limit", newLimit);
// }
//
// Template.Jobs.created = function() {
//   Session.setDefault("limit", 10);
//
//   Tracker.autorun(function(){
//      Meteor
//   });
// }


Template.jobsList.onCreated(function(){
    this.selectedCategory = new ReactiveVar();
    this.selectedCity = new ReactiveVar();
    this.selectedJobType = new ReactiveVar();
  //  Session.setDefault("jobsLimit",jobsInc);
});

Template.jobsList.onRendered(function(){
    Session.setDefault("jobsLimit", 4);
    this.autorun(function(){
        Meteor.subscribe("allJobs", Session.get("jobsLimit"));
    });
});

Template.jobsList.events({
  "click #showMoreResults" : function(e,t){
    Session.set("jobsLimit",Session.get("jobsLimit") + 4);
  },
  "click .categoryselection": function(e, t){
    var text = $(e.target).text();
     t.selectedCategory.set(text);
   },
   "click .cityselection": function(e,t) {
     var text = $(e.target).text();
     t.selectedCity.set(text);
   },
   "click .jtypeselection": function(e,t){
     var text = $(e.target).text();
     t.selectedJobType.set(text);
   }
});

Template.jobsList.helpers({
  'allJobs': function(){
    var filter ={};
    var category = Template.instance().selectedCategory.get();
    var city = Template.instance().selectedCity.get();
    var jtype = Template.instance().selectedJobType.get();
    if(jtype)
      filter.jtype = jtype;
    if(city)
      filter.city = city;
    if(category)
      filter.ccategory = category;
    return Jobs.find(filter);
  },
  'moreResults': function(){
    return !(Jobs.find().count() < Session.get("jobsLimit"));
  }
});

// Template.jobsList.helpers ({
//     'allJobs': function() {
//       var category = Template.instance().selectedCategory.get();
//       return Jobs.find(category ? {ccategory: category} : {});
//     },
// });



/*=======================================
  Displaying Job details Template Helpers
*/


Template.jobDetails.helpers({
  lines: function() {
    return this.jreq.split("\n");
  }
});

/*==========================================
  Posting Job Helpers
*/

Template.postJob.helpers({
  isJobPosted: function(){
    return Session.get("jobPosted");

  }
});


Template.postJob.created = function() {
  return Session.set("jobPosted", false);

}

Template.postJob.destroyed = function() {
   return Session.set("jobPosted", false);
};


/*==========================================
   About Page Helpers
*/







/* ======================================

  Template Helpers

========================================== */

})();
