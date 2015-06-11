(function(){
Template.__checkName("categoryFilter");
Template["categoryFilter"] = new Template("Template.categoryFilter", (function() {
  var view = this;
  return HTML.DIV({
    "class": "input-field"
  }, "\n   ", HTML.SELECT({
    name: "category",
    id: "category",
    "class": "categoryselection"
  }, "\n     ", HTML.Raw('<option value="" disabled="" selected="">Choose your option</option>'), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("companyCategories"));
  }, function() {
    return [ "\n        ", HTML.OPTION(Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n      " ];
  }), "\n   "), HTML.Raw("\n   <label>Select Category</label>\n "));
}));

})();
