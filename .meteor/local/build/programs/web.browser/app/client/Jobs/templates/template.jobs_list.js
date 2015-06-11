(function(){
Template.__checkName("jobsList");
Template["jobsList"] = new Template("Template.jobsList", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "col s12 filter-holder"
  }, "\n            ", HTML.DIV({
    "class": "col m4 s4 filter-box"
  }, "\n              ", Spacebars.include(view.lookupTemplate("categoryFilter")), "\n            "), "\n            ", HTML.DIV({
    "class": "col m4 s4 filter-box"
  }, "\n             ", Spacebars.include(view.lookupTemplate("cityFilter")), "\n            "), "\n            ", HTML.DIV({
    "class": "col m4 s4 filter-box"
  }, "\n              ", Spacebars.include(view.lookupTemplate("jobTypeFilter")), "\n            "), "\n    "), "\n\n", HTML.DIV({
    "class": "col s12"
  }, "\n  ", HTML.UL({
    "class": "collection",
    id: "listings"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("allJobs"));
  }, function() {
    return [ "\n    ", HTML.LI("\n      ", Spacebars.include(view.lookupTemplate("jobItem")), "\n   "), "\n   " ];
  }), "\n  "), "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("moreResults"));
  }, function() {
    return [ "\n  ", HTML.BUTTON({
      "class": "col s4 offset-s4 btn waves-effect waves-light load-more",
      id: "showMoreResults",
      type: "submit"
    }, "Load More\n    ", HTML.I({
      "class": "mdi-content-send right"
    }), "\n  "), "\n  " ];
  }), "\n") ];
}));

})();
