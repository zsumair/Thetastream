(function(){
Template.__checkName("jobItem");
Template["jobItem"] = new Template("Template.jobItem", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("jobDetails"),
      "class": Spacebars.call("collection-item")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return [ "\n       ", HTML.H4({
        "class": "left"
      }, Blaze.View("lookup:title", function() {
        return Spacebars.mustache(view.lookup("title"));
      })), "\n      ", HTML.P({
        "class": "center-align city"
      }, HTML.I({
        "class": "tiny mdi-maps-pin-drop maps"
      }), Blaze.View("lookup:city", function() {
        return Spacebars.mustache(view.lookup("city"));
      })), "\n      ", HTML.SPAN({
        "class": "description"
      }, HTML.STRONG(Blaze.View("lookup:cname", function() {
        return Spacebars.mustache(view.lookup("cname"));
      })), " - ", Blaze.View("lookup:ccategory", function() {
        return Spacebars.mustache(view.lookup("ccategory"));
      }), " "), "\n      ", HTML.SPAN({
        "class": "new badge absolute-badge right"
      }), "\n      ", HTML.SPAN({
        "class": "date right"
      }, " ", Blaze.View("lookup:formatDate", function() {
        return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"));
      }), " "), "\n   " ];
    });
  });
}));

})();
