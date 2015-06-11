(function(){
Template.__checkName("jobDetails");
Template["jobDetails"] = new Template("Template.jobDetails", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "col s8"
  }, "\n    ", HTML.DIV({
    "class": "card-panel"
  }, "\n      ", HTML.H5(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n      ", HTML.SPAN({
    "class": "text"
  }, "\n        ", Blaze.View("lookup:cname", function() {
    return Spacebars.mustache(view.lookup("cname"));
  }), " - ", Blaze.View("lookup:city", function() {
    return Spacebars.mustache(view.lookup("city"));
  }), "\n      "), "\n      ", HTML.SPAN({
    "class": "right"
  }, "Posted : ", Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"));
  })), "\n    "), "\n  "), "\n  ", HTML.DIV({
    "class": "col s8 details-box"
  }, "\n    ", HTML.Raw("<h6>About Company</h6>"), "\n    ", HTML.P("\n      ", Blaze.View("lookup:cdesc", function() {
    return Spacebars.mustache(view.lookup("cdesc"));
  }), "\n    "), "\n    ", HTML.Raw("<h6>Job Description</h6>"), "\n    ", HTML.Raw("<p>\n      Your primary responsibilities will be development-related; converting designs and layouts for professional web sites, web software applications, emails, and other web/mobile applications as needed, producing Responsive / Mobile HTML, CSS to implement these designs, and communicating these designs with PHP developers. You will also help with Search Engine Optimization upgrades, and custom WordPress theme development.Candidate must dream bigger than we do (and we dream big), and must live his/her life for love, character, and truth.\n    </p>"), "\n    ", HTML.Raw("<h6>Job Requirements</h6>"), "\n    ", HTML.UL("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("lines"));
  }, function() {
    return [ "\n        ", HTML.LI(Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n      " ];
  }), "\n    "), "\n    ", HTML.Raw("<h6>To Apply:</h6>"), "\n    ", HTML.P("Email resume, cover letter and links to currently active sites in your portfolio to:\n      ", HTML.A({
    href: "#"
  }, Blaze.View("lookup:cemail", function() {
    return Spacebars.mustache(view.lookup("cemail"));
  })), "\n    "), "\n    ", HTML.Raw('<div class="divider"></div>'), "\n    ", HTML.Raw('<button class="btn waves-effect waves-light" type="submit" name="action">Apply For This Job\n      <i class="mdi-content-send right"></i>\n    </button>'), "\n  "), "\n  ", HTML.ASIDE({
    "class": "col s4 right z-depth-1"
  }, "\n    ", HTML.Raw("<hr>"), "\n    ", HTML.Raw('<a href="#">visit company website</a>'), "\n    ", HTML.Raw("<hr>"), "\n    ", HTML.Raw('<a href="#">Share this listing</a>'), "\n    ", HTML.P({
    "class": "flow-text small-text"
  }, "\n      To Apply please forward your email to the below address\n      ", HTML.A({
    href: "#"
  }, Blaze.View("lookup:cemail", function() {
    return Spacebars.mustache(view.lookup("cemail"));
  })), "\n      ", HTML.Raw('<button class="btn waves-effect waves-light" type="submit" name="action">Apply\n        <i class="mdi-content-send right"></i>\n      </button>'), "\n    "), "\n  ") ];
}));

})();
