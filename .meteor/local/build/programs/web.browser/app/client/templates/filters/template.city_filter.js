(function(){
Template.__checkName("cityFilter");
Template["cityFilter"] = new Template("Template.cityFilter", (function() {
  var view = this;
  return HTML.DIV({
    "class": "input-field"
  }, "\n   ", HTML.SELECT({
    name: "city",
    id: "city",
    "class": "cityselection"
  }, "\n     ", HTML.Raw('<option value="" disabled="" selected="">Choose your option</option>'), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("companyCities"));
  }, function() {
    return [ "\n        ", HTML.OPTION(Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n      " ];
  }), "\n   "), HTML.Raw("\n   <label>Select City</label>\n "));
}));

})();
