(function(){
Template.__checkName("postJob");
Template["postJob"] = new Template("Template.postJob", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isJobPosted"));
  }, function() {
    return [ "\n      ", HTML.H2("\n          Your Job Posted Successfully. Thank You\n      "), "\n    " ];
  }, function() {
    return [ "\n      ", Blaze._TemplateWith(function() {
      return {
        collection: Spacebars.call("Jobs"),
        id: Spacebars.call("insertJobs"),
        type: Spacebars.call("insert")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("quickForm"));
    }), "\n  " ];
  });
}));

})();
