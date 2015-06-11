(function(){
Template.__checkName("jobTypeFilter");
Template["jobTypeFilter"] = new Template("Template.jobTypeFilter", (function() {
  var view = this;
  return HTML.DIV({
    "class": "input-field"
  }, "\n   ", HTML.SELECT({
    name: "jtype",
    id: "jtype",
    "class": "jtypeselection"
  }, "\n     ", HTML.Raw('<option value="" disabled="" selected="">Choose your option</option>'), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("jobTypeSelection"));
  }, function() {
    return [ "\n        ", HTML.OPTION(Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n      " ];
  }), "\n   "), HTML.Raw("\n   <label>Select Job Type</label>\n "));
}));

})();
