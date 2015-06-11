Router.configure({
  loadingTemplate: 'loading'
});


Router.route('/',{
  name: 'root',
  controller: 'MainPageController',
  onAfterAction: function() {
    Session.set("jobsLimit",4);
  }
});

Router.route("/about",{
  name: 'aboutUs',
  controller: 'AboutController'
});

Router.route("/contact",{
  name: 'contactUs',
  controller: 'ContactController'
});

Router.route("/postjob",{
    name: 'postJob',
    controller: 'BaseController'
});

Router.route("/:_id",{
  name: 'jobDetails',
  controller: 'JobDetailsController'
});
