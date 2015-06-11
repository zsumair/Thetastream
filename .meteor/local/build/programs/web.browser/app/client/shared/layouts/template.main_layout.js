(function(){
Template.__checkName("mainLayout");
Template["mainLayout"] = new Template("Template.mainLayout", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "container"
  }, "\n  ", HTML.DIV({
    "class": "navbar"
  }, "\n  ", HTML.NAV("\n    ", HTML.DIV({
    "class": "nav-wrapper"
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("root"),
      "class": Spacebars.call("brand-logo")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n          Job Stream\n      ";
    });
  }), "\n\n      ", HTML.UL({
    id: "nav-mobile",
    "class": "right hide-on-med-and-down"
  }, "\n        ", HTML.LI("\n          ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("postJob")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n            Post a New Job\n          ";
    });
  }), "\n        "), "\n        ", HTML.LI("\n          ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("aboutUs")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n            About Us\n          ";
    });
  }), "\n        "), "\n        ", HTML.LI("\n          ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("contactUs")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n            Contact Us\n          ";
    });
  }), "\n        "), "\n      "), "\n    "), "\n\n  "), "\n"), "\n  ", HTML.DIV({
    "class": "row"
  }, "\n    ", HTML.DIV({
    "class": "col s12"
  }, "\n      ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n  "), "\n "), HTML.Raw('\n\n <footer class="page-footer">\n           <div class="container">\n             <div class="row">\n               <div class="col l6 s12">\n                 <h5 class="white-text">Footer Content</h5>\n                 <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>\n               </div>\n               <div class="col l4 offset-l2 s12">\n                 <h5 class="white-text">Links</h5>\n                 <ul>\n                   <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>\n                   <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>\n                   <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>\n                   <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>\n                 </ul>\n               </div>\n             </div>\n           </div>\n           <div class="footer-copyright">\n             <div class="container">\n             © 2014 Copyright Text\n             <a class="grey-text text-lighten-4 right" href="#!">More Links</a>\n             </div>\n           </div>\n </footer>') ];
}));

})();
