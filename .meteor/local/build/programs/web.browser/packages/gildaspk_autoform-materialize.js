//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk:autoform-materialize/template.materialize.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("autoForm_materialize");                                                                          // 2
Template["autoForm_materialize"] = new Template("Template.autoForm_materialize", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("afDestroyUpdateForm"));                                                         // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.FORM(HTML.Attrs(function() {                                                               // 8
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 9
    }), "\n      ", HTML.DIV({                                                                                         // 10
      "class": "row"                                                                                                   // 11
    }, "\n        ", Spacebars.With(function() {                                                                       // 12
      return Spacebars.dataMustache(view.lookup("innerContext"), view.lookup(".."));                                   // 13
    }, function() {                                                                                                    // 14
      return [ "\n          ", Blaze._InOuterTemplateScope(view, function() {                                          // 15
        return Blaze._TemplateWith(function() {                                                                        // 16
          return Spacebars.call(view.lookup("."));                                                                     // 17
        }, function() {                                                                                                // 18
          return Spacebars.include(function() {                                                                        // 19
            return Spacebars.call(view.templateContentBlock);                                                          // 20
          });                                                                                                          // 21
        });                                                                                                            // 22
      }), "\n        " ];                                                                                              // 23
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
Template.__checkName("quickForm_materialize");                                                                         // 28
Template["quickForm_materialize"] = new Template("Template.quickForm_materialize", (function() {                       // 29
  var view = this;                                                                                                     // 30
  return Blaze._TemplateWith(function() {                                                                              // 31
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 32
  }, function() {                                                                                                      // 33
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 34
      return [ "\n    ", Spacebars.include(view.lookupTemplate("afQuickFields")), "\n    ", Blaze.If(function() {      // 35
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 36
      }, function() {                                                                                                  // 37
        return [ "\n      ", HTML.DIV({                                                                                // 38
          "class": "col s12"                                                                                           // 39
        }, "\n        ", HTML.BUTTON(HTML.Attrs({                                                                      // 40
          type: "submit"                                                                                               // 41
        }, function() {                                                                                                // 42
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 43
        }), "\n          ", Spacebars.With(function() {                                                                // 44
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 45
        }, function() {                                                                                                // 46
          return [ "\n            ", Blaze.View("lookup:.", function() {                                               // 47
            return Spacebars.mustache(view.lookup("."));                                                               // 48
          }), "\n          " ];                                                                                        // 49
        }, function() {                                                                                                // 50
          return "\n            Submit\n          ";                                                                   // 51
        }), "\n        "), "\n      "), "\n    " ];                                                                    // 52
      }), "\n  " ];                                                                                                    // 53
    });                                                                                                                // 54
  });                                                                                                                  // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
Template.__checkName("afQuickField_materialize");                                                                      // 58
Template["afQuickField_materialize"] = new Template("Template.afQuickField_materialize", (function() {                 // 59
  var view = this;                                                                                                     // 60
  return Blaze.If(function() {                                                                                         // 61
    return Spacebars.dataMustache(view.lookup("isGroup"), Spacebars.kw({                                               // 62
      atts: view.lookup(".")                                                                                           // 63
    }));                                                                                                               // 64
  }, function() {                                                                                                      // 65
    return [ "\n    ", Spacebars.include(view.lookupTemplate("afObjectField_materialize")), "\n  " ];                  // 66
  }, function() {                                                                                                      // 67
    return [ "\n    ", Blaze.If(function() {                                                                           // 68
      return Spacebars.dataMustache(view.lookup("isFieldArray"), Spacebars.kw({                                        // 69
        atts: view.lookup(".")                                                                                         // 70
      }));                                                                                                             // 71
    }, function() {                                                                                                    // 72
      return [ "\n      ", Spacebars.include(view.lookupTemplate("afArrayField_materialize")), "\n    " ];             // 73
    }, function() {                                                                                                    // 74
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 75
        return Spacebars.call(view.lookup("groupAtts"));                                                               // 76
      }, function() {                                                                                                  // 77
        return Spacebars.include(view.lookupTemplate("afFormGroup_materialize"));                                      // 78
      }), "\n    " ];                                                                                                  // 79
    }), "\n  " ];                                                                                                      // 80
  });                                                                                                                  // 81
}));                                                                                                                   // 82
                                                                                                                       // 83
Template.__checkName("afFormGroup_materialize");                                                                       // 84
Template["afFormGroup_materialize"] = new Template("Template.afFormGroup_materialize", (function() {                   // 85
  var view = this;                                                                                                     // 86
  return HTML.DIV({                                                                                                    // 87
    "class": function() {                                                                                              // 88
      return Blaze.If(function() {                                                                                     // 89
        return Spacebars.call(view.lookup("addInputField"));                                                           // 90
      }, function() {                                                                                                  // 91
        return "input-field";                                                                                          // 92
      });                                                                                                              // 93
    }                                                                                                                  // 94
  }, "\n    ", Blaze.If(function() {                                                                                   // 95
    return Spacebars.call(view.lookup("skipLabel"));                                                                   // 96
  }, function() {                                                                                                      // 97
    return [ "\n      ", Blaze._TemplateWith(function() {                                                              // 98
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                      // 99
    }, function() {                                                                                                    // 100
      return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                   // 101
    }), "\n    " ];                                                                                                    // 102
  }, function() {                                                                                                      // 103
    return [ "\n      ", Blaze.If(function() {                                                                         // 104
      return Spacebars.call(view.lookup("labelFirst"));                                                                // 105
    }, function() {                                                                                                    // 106
      return [ "\n        ", Spacebars.include(view.lookupTemplate("afLabel_materialize")), "\n      " ];              // 107
    }), "\n      ", Blaze._TemplateWith(function() {                                                                   // 108
      return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                      // 109
    }, function() {                                                                                                    // 110
      return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                   // 111
    }), "\n      ", Blaze.Unless(function() {                                                                          // 112
      return Spacebars.call(view.lookup("labelFirst"));                                                                // 113
    }, function() {                                                                                                    // 114
      return [ "\n        ", Blaze._TemplateWith(function() {                                                          // 115
        return Spacebars.call(view.lookup("."));                                                                       // 116
      }, function() {                                                                                                  // 117
        return Spacebars.include(view.lookupTemplate("afLabel_materialize"));                                          // 118
      }), "\n      " ];                                                                                                // 119
    }), "\n    " ];                                                                                                    // 120
  }), "\n    ", Blaze.If(function() {                                                                                  // 121
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 122
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 123
    }));                                                                                                               // 124
  }, function() {                                                                                                      // 125
    return [ "\n      ", HTML.DIV({                                                                                    // 126
      "class": "red-text"                                                                                              // 127
    }, "\n        ", HTML.I({                                                                                          // 128
      "class": "mdi-alert-warning"                                                                                     // 129
    }), " ", Blaze.View("lookup:afFieldMessage", function() {                                                          // 130
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 131
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 132
      })));                                                                                                            // 133
    }), "\n      "), "\n    " ];                                                                                       // 134
  }), "\n  ");                                                                                                         // 135
}));                                                                                                                   // 136
                                                                                                                       // 137
Template.__checkName("afLabel_materialize");                                                                           // 138
Template["afLabel_materialize"] = new Template("Template.afLabel_materialize", (function() {                           // 139
  var view = this;                                                                                                     // 140
  return HTML.LABEL(HTML.Attrs({                                                                                       // 141
    "for": function() {                                                                                                // 142
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 143
    }                                                                                                                  // 144
  }, function() {                                                                                                      // 145
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 146
  }), "\n    ", Blaze.If(function() {                                                                                  // 147
    return Spacebars.call(Spacebars.dot(view.lookup("."), "labelText"));                                               // 148
  }, function() {                                                                                                      // 149
    return [ Blaze.View("lookup:..labelText", function() {                                                             // 150
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "labelText"));                                         // 151
    }), "\n    " ];                                                                                                    // 152
  }, function() {                                                                                                      // 153
    return [ Blaze.View("lookup:afFieldLabelText", function() {                                                        // 154
      return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                        // 155
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 156
      }));                                                                                                             // 157
    }), "\n    " ];                                                                                                    // 158
  }), "\n  ");                                                                                                         // 159
}));                                                                                                                   // 160
                                                                                                                       // 161
Template.__checkName("afObjectField_materialize");                                                                     // 162
Template["afObjectField_materialize"] = new Template("Template.afObjectField_materialize", (function() {               // 163
  var view = this;                                                                                                     // 164
  return HTML.DIV({                                                                                                    // 165
    "class": "card-panel autoform-object-field"                                                                        // 166
  }, "\n    ", HTML.DIV({                                                                                              // 167
    "class": "card-content"                                                                                            // 168
  }, "\n      ", Spacebars.With(function() {                                                                           // 169
    return Spacebars.dataMustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                      // 170
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 171
    }));                                                                                                               // 172
  }, function() {                                                                                                      // 173
    return [ "\n        ", HTML.DIV({                                                                                  // 174
      "class": "card-title"                                                                                            // 175
    }, "\n          ", Blaze.View("lookup:.", function() {                                                             // 176
      return Spacebars.mustache(view.lookup("."));                                                                     // 177
    }), "\n        "), "\n      " ];                                                                                   // 178
  }), "\n      ", Blaze.If(function() {                                                                                // 179
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 180
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 181
    }));                                                                                                               // 182
  }, function() {                                                                                                      // 183
    return [ "\n        ", HTML.DIV({                                                                                  // 184
      "class": "red-text"                                                                                              // 185
    }, Blaze.View("lookup:afFieldMessage", function() {                                                                // 186
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 187
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 188
      })));                                                                                                            // 189
    })), "\n      " ];                                                                                                 // 190
  }), "\n      ", Blaze._TemplateWith(function() {                                                                     // 191
    return {                                                                                                           // 192
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "name"))                                                    // 193
    };                                                                                                                 // 194
  }, function() {                                                                                                      // 195
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 196
  }), "\n    "), "\n  ");                                                                                              // 197
}));                                                                                                                   // 198
                                                                                                                       // 199
Template.__checkName("afArrayField_materialize");                                                                      // 200
Template["afArrayField_materialize"] = new Template("Template.afArrayField_materialize", (function() {                 // 201
  var view = this;                                                                                                     // 202
  return HTML.DIV({                                                                                                    // 203
    "class": "collection"                                                                                              // 204
  }, "\n    ", HTML.DIV({                                                                                              // 205
    "class": "collection-item"                                                                                         // 206
  }, "\n      ", Blaze.View("lookup:afFieldLabelText", function() {                                                    // 207
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 208
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 209
    }));                                                                                                               // 210
  }), "\n\n      ", Blaze.If(function() {                                                                              // 211
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 212
      name: Spacebars.dot(view.lookup("."), "atts", "name"),                                                           // 213
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 214
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 215
    }));                                                                                                               // 216
  }, function() {                                                                                                      // 217
    return [ "\n        ", HTML.BUTTON({                                                                               // 218
      type: "button",                                                                                                  // 219
      "class": "btn autoform-add-item",                                                                                // 220
      "data-autoform-field": function() {                                                                              // 221
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "name"));                                    // 222
      },                                                                                                               // 223
      "data-autoform-mincount": function() {                                                                           // 224
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "minCount"));                                // 225
      },                                                                                                               // 226
      "data-autoform-maxcount": function() {                                                                           // 227
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "maxCount"));                                // 228
      }                                                                                                                // 229
    }, "\n          Add ", HTML.I({                                                                                    // 230
      "class": "mdi-content-add"                                                                                       // 231
    }), "\n        "), "\n      " ];                                                                                   // 232
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                       // 233
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 234
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 235
    }));                                                                                                               // 236
  }, function() {                                                                                                      // 237
    return [ "\n      ", HTML.DIV({                                                                                    // 238
      "class": "collection-item"                                                                                       // 239
    }, "\n        ", HTML.SPAN({                                                                                       // 240
      "class": "red-text"                                                                                              // 241
    }, Blaze.View("lookup:afFieldMessage", function() {                                                                // 242
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 243
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 244
      })));                                                                                                            // 245
    })), "\n      "), "\n    " ];                                                                                      // 246
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 247
    return {                                                                                                           // 248
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 249
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 250
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 251
    };                                                                                                                 // 252
  }, function() {                                                                                                      // 253
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 254
      return [ "\n      ", HTML.DIV({                                                                                  // 255
        "class": "collection-item"                                                                                     // 256
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 257
        return {                                                                                                       // 258
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 259
          label: Spacebars.call(false),                                                                                // 260
          options: Spacebars.call(view.lookup("afOptionsFromSchema"))                                                  // 261
        };                                                                                                             // 262
      }, function() {                                                                                                  // 263
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 264
      }), "\n      "), "\n      ", Blaze.If(function() {                                                               // 265
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 266
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 267
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 268
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 269
        }));                                                                                                           // 270
      }, function() {                                                                                                  // 271
        return [ "\n        ", HTML.DIV({                                                                              // 272
          "class": "collection-item"                                                                                   // 273
        }, "\n          ", HTML.BUTTON({                                                                               // 274
          type: "button",                                                                                              // 275
          "class": "btn autoform-remove-item"                                                                          // 276
        }, "\n            Remove ", HTML.SPAN({                                                                        // 277
          "class": "mdi-content-clear"                                                                                 // 278
        }), "\n          "), "\n        "), "\n      " ];                                                              // 279
      }), "\n    " ];                                                                                                  // 280
    });                                                                                                                // 281
  }), "\n  ");                                                                                                         // 282
}));                                                                                                                   // 283
                                                                                                                       // 284
Template.__checkName("afCheckbox_materialize");                                                                        // 285
Template["afCheckbox_materialize"] = new Template("Template.afCheckbox_materialize", (function() {                     // 286
  var view = this;                                                                                                     // 287
  return HTML.P("\n    ", HTML.INPUT(HTML.Attrs({                                                                      // 288
    type: "checkbox",                                                                                                  // 289
    value: function() {                                                                                                // 290
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 291
    }                                                                                                                  // 292
  }, function() {                                                                                                      // 293
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 294
  })), "\n    ", HTML.LABEL({                                                                                          // 295
    "for": function() {                                                                                                // 296
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 297
    }                                                                                                                  // 298
  }, Blaze.View("lookup:afFieldLabelText", function() {                                                                // 299
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 300
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 301
    }));                                                                                                               // 302
  })), "\n  ");                                                                                                        // 303
}));                                                                                                                   // 304
                                                                                                                       // 305
Template.__checkName("afCheckboxGroup_materialize");                                                                   // 306
Template["afCheckboxGroup_materialize"] = new Template("Template.afCheckboxGroup_materialize", (function() {           // 307
  var view = this;                                                                                                     // 308
  return HTML.DIV(HTML.Attrs({                                                                                         // 309
    "class": "af-checkbox-group collection"                                                                            // 310
  }, function() {                                                                                                      // 311
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 312
  }), "\n    ", Blaze.Each(function() {                                                                                // 313
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 314
  }, function() {                                                                                                      // 315
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 316
      type: "checkbox",                                                                                                // 317
      value: function() {                                                                                              // 318
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 319
      }                                                                                                                // 320
    }, function() {                                                                                                    // 321
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 322
    })), "\n      ", HTML.LABEL({                                                                                      // 323
      "for": function() {                                                                                              // 324
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 325
      }                                                                                                                // 326
    }, Blaze.View("lookup:..label", function() {                                                                       // 327
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 328
    })), "\n    "), "\n    " ];                                                                                        // 329
  }), "\n  ");                                                                                                         // 330
}));                                                                                                                   // 331
                                                                                                                       // 332
Template.__checkName("afCheckboxGroupInline_materialize");                                                             // 333
Template["afCheckboxGroupInline_materialize"] = new Template("Template.afCheckboxGroupInline_materialize", (function() {
  var view = this;                                                                                                     // 335
  return HTML.DIV(HTML.Attrs({                                                                                         // 336
    "class": "af-checkbox-group"                                                                                       // 337
  }, function() {                                                                                                      // 338
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 339
  }), "\n    ", Blaze.Each(function() {                                                                                // 340
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 341
  }, function() {                                                                                                      // 342
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 343
      type: "checkbox",                                                                                                // 344
      value: function() {                                                                                              // 345
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 346
      }                                                                                                                // 347
    }, function() {                                                                                                    // 348
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 349
    })), "\n      ", HTML.LABEL({                                                                                      // 350
      "for": function() {                                                                                              // 351
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 352
      }                                                                                                                // 353
    }, Blaze.View("lookup:..label", function() {                                                                       // 354
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 355
    })), "\n    "), "\n    " ];                                                                                        // 356
  }), "\n  ");                                                                                                         // 357
}));                                                                                                                   // 358
                                                                                                                       // 359
Template.__checkName("afRadio_materialize");                                                                           // 360
Template["afRadio_materialize"] = new Template("Template.afRadio_materialize", (function() {                           // 361
  var view = this;                                                                                                     // 362
  return HTML.P("\n    ", HTML.INPUT(HTML.Attrs({                                                                      // 363
    type: "radio",                                                                                                     // 364
    value: function() {                                                                                                // 365
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 366
    }                                                                                                                  // 367
  }, function() {                                                                                                      // 368
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 369
  })), "\n    ", HTML.LABEL({                                                                                          // 370
    "for": function() {                                                                                                // 371
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 372
    }                                                                                                                  // 373
  }, Blaze.View("lookup:afFieldLabelText", function() {                                                                // 374
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 375
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 376
    }));                                                                                                               // 377
  })), "\n  ");                                                                                                        // 378
}));                                                                                                                   // 379
                                                                                                                       // 380
Template.__checkName("afRadioGroup_materialize");                                                                      // 381
Template["afRadioGroup_materialize"] = new Template("Template.afRadioGroup_materialize", (function() {                 // 382
  var view = this;                                                                                                     // 383
  return HTML.DIV(HTML.Attrs({                                                                                         // 384
    "class": "af-radio-group"                                                                                          // 385
  }, function() {                                                                                                      // 386
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 387
  }), "\n    ", Blaze.Each(function() {                                                                                // 388
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 389
  }, function() {                                                                                                      // 390
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 391
      type: "radio",                                                                                                   // 392
      value: function() {                                                                                              // 393
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 394
      }                                                                                                                // 395
    }, function() {                                                                                                    // 396
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 397
    })), "\n      ", HTML.LABEL({                                                                                      // 398
      "for": function() {                                                                                              // 399
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 400
      }                                                                                                                // 401
    }, Blaze.View("lookup:..label", function() {                                                                       // 402
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 403
    })), "\n    "), "\n    " ];                                                                                        // 404
  }), "\n  ");                                                                                                         // 405
}));                                                                                                                   // 406
                                                                                                                       // 407
Template.__checkName("afRadioGroupInline_materialize");                                                                // 408
Template["afRadioGroupInline_materialize"] = new Template("Template.afRadioGroupInline_materialize", (function() {     // 409
  var view = this;                                                                                                     // 410
  return HTML.DIV(HTML.Attrs({                                                                                         // 411
    "class": "af-radio-group"                                                                                          // 412
  }, function() {                                                                                                      // 413
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 414
  }), "\n    ", Blaze.Each(function() {                                                                                // 415
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 416
  }, function() {                                                                                                      // 417
    return [ "\n    ", HTML.P("\n      ", HTML.INPUT(HTML.Attrs({                                                      // 418
      type: "radio",                                                                                                   // 419
      value: function() {                                                                                              // 420
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 421
      }                                                                                                                // 422
    }, function() {                                                                                                    // 423
      return Spacebars.attrMustache(view.lookup("itemAtts"));                                                          // 424
    })), "\n      ", HTML.LABEL({                                                                                      // 425
      "for": function() {                                                                                              // 426
        return Spacebars.mustache(Spacebars.dot(view.lookup("itemAtts"), "id"));                                       // 427
      }                                                                                                                // 428
    }, Blaze.View("lookup:..label", function() {                                                                       // 429
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 430
    })), "\n    "), "\n    " ];                                                                                        // 431
  }), "\n  ");                                                                                                         // 432
}));                                                                                                                   // 433
                                                                                                                       // 434
Template.__checkName("afBooleanRadioGroup_materialize");                                                               // 435
Template["afBooleanRadioGroup_materialize"] = new Template("Template.afBooleanRadioGroup_materialize", (function() {   // 436
  var view = this;                                                                                                     // 437
  return HTML.DIV(HTML.Attrs({                                                                                         // 438
    "class": function() {                                                                                              // 439
      return [ "af-radio-group ", Spacebars.mustache(view.lookup("rowColumnAtts")) ];                                  // 440
    }                                                                                                                  // 441
  }, function() {                                                                                                      // 442
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 443
  }), "\n    ", HTML.P({                                                                                               // 444
    "class": function() {                                                                                              // 445
      return Spacebars.mustache(view.lookup("falseColumnAtts"));                                                       // 446
    }                                                                                                                  // 447
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                               // 448
    id: function() {                                                                                                   // 449
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_false" ];                               // 450
    },                                                                                                                 // 451
    type: "radio",                                                                                                     // 452
    value: "false"                                                                                                     // 453
  }, function() {                                                                                                      // 454
    return Spacebars.attrMustache(view.lookup("falseAtts"));                                                           // 455
  })), "\n      ", HTML.LABEL({                                                                                        // 456
    "for": function() {                                                                                                // 457
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_false" ];                               // 458
    }                                                                                                                  // 459
  }, Spacebars.With(function() {                                                                                       // 460
    return Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "trueLabel"));                                       // 461
  }, function() {                                                                                                      // 462
    return Blaze.View("lookup:.", function() {                                                                         // 463
      return Spacebars.mustache(view.lookup("."));                                                                     // 464
    });                                                                                                                // 465
  }, function() {                                                                                                      // 466
    return "False";                                                                                                    // 467
  })), "\n    "), "\n    ", HTML.P({                                                                                   // 468
    "class": function() {                                                                                              // 469
      return Spacebars.mustache(view.lookup("trueColumnAtts"));                                                        // 470
    }                                                                                                                  // 471
  }, "\n      ", HTML.INPUT(HTML.Attrs({                                                                               // 472
    id: function() {                                                                                                   // 473
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_true" ];                                // 474
    },                                                                                                                 // 475
    type: "radio",                                                                                                     // 476
    value: "true"                                                                                                      // 477
  }, function() {                                                                                                      // 478
    return Spacebars.attrMustache(view.lookup("trueAtts"));                                                            // 479
  })), "\n      ", HTML.LABEL({                                                                                        // 480
    "for": function() {                                                                                                // 481
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id")), "_true" ];                                // 482
    }                                                                                                                  // 483
  }, Spacebars.With(function() {                                                                                       // 484
    return Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "trueLabel"));                                       // 485
  }, function() {                                                                                                      // 486
    return Blaze.View("lookup:.", function() {                                                                         // 487
      return Spacebars.mustache(view.lookup("."));                                                                     // 488
    });                                                                                                                // 489
  }, function() {                                                                                                      // 490
    return "True";                                                                                                     // 491
  })), "\n    "), "\n  ");                                                                                             // 492
}));                                                                                                                   // 493
                                                                                                                       // 494
Template.__checkName("afSelect_materialize");                                                                          // 495
Template["afSelect_materialize"] = new Template("Template.afSelect_materialize", (function() {                         // 496
  var view = this;                                                                                                     // 497
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 498
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 499
  }), "\n    ", Blaze.Each(function() {                                                                                // 500
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 501
  }, function() {                                                                                                      // 502
    return [ "\n      ", Blaze.If(function() {                                                                         // 503
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                              // 504
    }, function() {                                                                                                    // 505
      return [ "\n        ", HTML.OPTGROUP({                                                                           // 506
        label: function() {                                                                                            // 507
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                                      // 508
        }                                                                                                              // 509
      }, "\n          ", Blaze.Each(function() {                                                                       // 510
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 511
      }, function() {                                                                                                  // 512
        return [ "\n          ", HTML.OPTION(HTML.Attrs(function() {                                                   // 513
          return Spacebars.attrMustache(view.lookup("optionAtts"));                                                    // 514
        }), Blaze.View("lookup:..label", function() {                                                                  // 515
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                         // 516
        })), "\n          " ];                                                                                         // 517
      }), "\n        "), "\n      " ];                                                                                 // 518
    }, function() {                                                                                                    // 519
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                                                       // 520
        return Spacebars.attrMustache(view.lookup("optionAtts"));                                                      // 521
      }), Blaze.View("lookup:..label", function() {                                                                    // 522
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 523
      })), "\n      " ];                                                                                               // 524
    }), "\n    " ];                                                                                                    // 525
  }), "\n  ");                                                                                                         // 526
}));                                                                                                                   // 527
                                                                                                                       // 528
Template.__checkName("afBooleanSelect_materialize");                                                                   // 529
Template["afBooleanSelect_materialize"] = new Template("Template.afBooleanSelect_materialize", (function() {           // 530
  var view = this;                                                                                                     // 531
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 532
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 533
  }), "\n    ", Blaze.Each(function() {                                                                                // 534
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 535
  }, function() {                                                                                                      // 536
    return [ "\n      ", HTML.OPTION(HTML.Attrs(function() {                                                           // 537
      return Spacebars.attrMustache(view.lookup("optionAtts"));                                                        // 538
    }), Blaze.View("lookup:..label", function() {                                                                      // 539
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 540
    })), "\n    " ];                                                                                                   // 541
  }), "\n  ");                                                                                                         // 542
}));                                                                                                                   // 543
                                                                                                                       // 544
Template.__checkName("afSelectMultiple_materialize");                                                                  // 545
Template["afSelectMultiple_materialize"] = new Template("Template.afSelectMultiple_materialize", (function() {         // 546
  var view = this;                                                                                                     // 547
  return HTML.SELECT(HTML.Attrs({                                                                                      // 548
    multiple: ""                                                                                                       // 549
  }, function() {                                                                                                      // 550
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 551
  }), "\n    ", Blaze.Each(function() {                                                                                // 552
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 553
  }, function() {                                                                                                      // 554
    return [ "\n      ", Blaze.If(function() {                                                                         // 555
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                              // 556
    }, function() {                                                                                                    // 557
      return [ "\n        ", HTML.OPTGROUP({                                                                           // 558
        label: function() {                                                                                            // 559
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                                      // 560
        }                                                                                                              // 561
      }, "\n          ", Blaze.Each(function() {                                                                       // 562
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 563
      }, function() {                                                                                                  // 564
        return [ "\n            ", HTML.OPTION(HTML.Attrs(function() {                                                 // 565
          return Spacebars.attrMustache(view.lookup("optionAtts"));                                                    // 566
        }), Blaze.View("lookup:..label", function() {                                                                  // 567
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                         // 568
        })), "\n          " ];                                                                                         // 569
      }), "\n        "), "\n      " ];                                                                                 // 570
    }, function() {                                                                                                    // 571
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                                                       // 572
        return Spacebars.attrMustache(view.lookup("optionAtts"));                                                      // 573
      }), Blaze.View("lookup:..label", function() {                                                                    // 574
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 575
      })), "\n      " ];                                                                                               // 576
    }), "\n    " ];                                                                                                    // 577
  }), "\n  ");                                                                                                         // 578
}));                                                                                                                   // 579
                                                                                                                       // 580
Template.__checkName("afSwitch");                                                                                      // 581
Template["afSwitch"] = new Template("Template.afSwitch", (function() {                                                 // 582
  var view = this;                                                                                                     // 583
  return HTML.DIV({                                                                                                    // 584
    "class": "switch"                                                                                                  // 585
  }, "\n    ", HTML.LABEL({                                                                                            // 586
    "for": function() {                                                                                                // 587
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "id"));                                             // 588
    }                                                                                                                  // 589
  }, "\n      ", Spacebars.With(function() {                                                                           // 590
    return Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "falseLabel"));                                      // 591
  }, function() {                                                                                                      // 592
    return Blaze.View("lookup:.", function() {                                                                         // 593
      return Spacebars.mustache(view.lookup("."));                                                                     // 594
    });                                                                                                                // 595
  }, function() {                                                                                                      // 596
    return "Off";                                                                                                      // 597
  }), "\n      ", HTML.INPUT(HTML.Attrs({                                                                              // 598
    type: "checkbox",                                                                                                  // 599
    value: function() {                                                                                                // 600
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 601
    }                                                                                                                  // 602
  }, function() {                                                                                                      // 603
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 604
  })), "\n      ", HTML.Raw('<span class="lever"></span>'), "\n      ", Spacebars.With(function() {                    // 605
    return Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "trueLabel"));                                       // 606
  }, function() {                                                                                                      // 607
    return Blaze.View("lookup:.", function() {                                                                         // 608
      return Spacebars.mustache(view.lookup("."));                                                                     // 609
    });                                                                                                                // 610
  }, function() {                                                                                                      // 611
    return "On";                                                                                                       // 612
  }), "\n    "), "\n  ");                                                                                              // 613
}));                                                                                                                   // 614
                                                                                                                       // 615
Template.__checkName("afPickadate");                                                                                   // 616
Template["afPickadate"] = new Template("Template.afPickadate", (function() {                                           // 617
  var view = this;                                                                                                     // 618
  return HTML.INPUT(HTML.Attrs({                                                                                       // 619
    type: "date",                                                                                                      // 620
    "data-value": function() {                                                                                         // 621
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 622
    },                                                                                                                 // 623
    value: function() {                                                                                                // 624
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 625
    },                                                                                                                 // 626
    checked: "checked/"                                                                                                // 627
  }, function() {                                                                                                      // 628
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 629
  }));                                                                                                                 // 630
}));                                                                                                                   // 631
                                                                                                                       // 632
Template.__checkName("afTextarea_materialize");                                                                        // 633
Template["afTextarea_materialize"] = new Template("Template.afTextarea_materialize", (function() {                     // 634
  var view = this;                                                                                                     // 635
  return HTML.TEXTAREA(HTML.Attrs(function() {                                                                         // 636
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 637
  }, {                                                                                                                 // 638
    value: function() {                                                                                                // 639
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 640
    }                                                                                                                  // 641
  }));                                                                                                                 // 642
}));                                                                                                                   // 643
                                                                                                                       // 644
Template.__checkName("afInputText_materialize");                                                                       // 645
Template["afInputText_materialize"] = new Template("Template.afInputText_materialize", (function() {                   // 646
  var view = this;                                                                                                     // 647
  return HTML.INPUT(HTML.Attrs({                                                                                       // 648
    type: "text",                                                                                                      // 649
    value: function() {                                                                                                // 650
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 651
    }                                                                                                                  // 652
  }, function() {                                                                                                      // 653
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 654
  }));                                                                                                                 // 655
}));                                                                                                                   // 656
                                                                                                                       // 657
Template.__checkName("afInputPassword_materialize");                                                                   // 658
Template["afInputPassword_materialize"] = new Template("Template.afInputPassword_materialize", (function() {           // 659
  var view = this;                                                                                                     // 660
  return HTML.INPUT(HTML.Attrs({                                                                                       // 661
    type: "password",                                                                                                  // 662
    value: function() {                                                                                                // 663
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 664
    }                                                                                                                  // 665
  }, function() {                                                                                                      // 666
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 667
  }));                                                                                                                 // 668
}));                                                                                                                   // 669
                                                                                                                       // 670
Template.__checkName("afInputButton_materialize");                                                                     // 671
Template["afInputButton_materialize"] = new Template("Template.afInputButton_materialize", (function() {               // 672
  var view = this;                                                                                                     // 673
  return HTML.INPUT(HTML.Attrs({                                                                                       // 674
    type: "button",                                                                                                    // 675
    value: function() {                                                                                                // 676
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 677
    }                                                                                                                  // 678
  }, function() {                                                                                                      // 679
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 680
  }));                                                                                                                 // 681
}));                                                                                                                   // 682
                                                                                                                       // 683
Template.__checkName("afInputSubmit_materialize");                                                                     // 684
Template["afInputSubmit_materialize"] = new Template("Template.afInputSubmit_materialize", (function() {               // 685
  var view = this;                                                                                                     // 686
  return HTML.INPUT(HTML.Attrs({                                                                                       // 687
    type: "submit",                                                                                                    // 688
    value: function() {                                                                                                // 689
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 690
    }                                                                                                                  // 691
  }, function() {                                                                                                      // 692
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 693
  }));                                                                                                                 // 694
}));                                                                                                                   // 695
                                                                                                                       // 696
Template.__checkName("afInputReset_materialize");                                                                      // 697
Template["afInputReset_materialize"] = new Template("Template.afInputReset_materialize", (function() {                 // 698
  var view = this;                                                                                                     // 699
  return HTML.INPUT(HTML.Attrs({                                                                                       // 700
    type: "reset",                                                                                                     // 701
    value: function() {                                                                                                // 702
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 703
    }                                                                                                                  // 704
  }, function() {                                                                                                      // 705
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 706
  }));                                                                                                                 // 707
}));                                                                                                                   // 708
                                                                                                                       // 709
Template.__checkName("afInputDateTime_materialize");                                                                   // 710
Template["afInputDateTime_materialize"] = new Template("Template.afInputDateTime_materialize", (function() {           // 711
  var view = this;                                                                                                     // 712
  return HTML.INPUT(HTML.Attrs({                                                                                       // 713
    type: "datetime",                                                                                                  // 714
    value: function() {                                                                                                // 715
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 716
    }                                                                                                                  // 717
  }, function() {                                                                                                      // 718
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 719
  }));                                                                                                                 // 720
}));                                                                                                                   // 721
                                                                                                                       // 722
Template.__checkName("afInputDateTimeLocal_materialize");                                                              // 723
Template["afInputDateTimeLocal_materialize"] = new Template("Template.afInputDateTimeLocal_materialize", (function() { // 724
  var view = this;                                                                                                     // 725
  return HTML.INPUT(HTML.Attrs({                                                                                       // 726
    type: "datetime-local",                                                                                            // 727
    value: function() {                                                                                                // 728
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 729
    }                                                                                                                  // 730
  }, function() {                                                                                                      // 731
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 732
  }));                                                                                                                 // 733
}));                                                                                                                   // 734
                                                                                                                       // 735
Template.__checkName("afInputDate_materialize");                                                                       // 736
Template["afInputDate_materialize"] = new Template("Template.afInputDate_materialize", (function() {                   // 737
  var view = this;                                                                                                     // 738
  return HTML.INPUT(HTML.Attrs({                                                                                       // 739
    type: "date",                                                                                                      // 740
    value: function() {                                                                                                // 741
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 742
    }                                                                                                                  // 743
  }, function() {                                                                                                      // 744
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 745
  }));                                                                                                                 // 746
}));                                                                                                                   // 747
                                                                                                                       // 748
Template.__checkName("afInputMonth_materialize");                                                                      // 749
Template["afInputMonth_materialize"] = new Template("Template.afInputMonth_materialize", (function() {                 // 750
  var view = this;                                                                                                     // 751
  return HTML.INPUT(HTML.Attrs({                                                                                       // 752
    type: "month",                                                                                                     // 753
    value: function() {                                                                                                // 754
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 755
    }                                                                                                                  // 756
  }, function() {                                                                                                      // 757
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 758
  }));                                                                                                                 // 759
}));                                                                                                                   // 760
                                                                                                                       // 761
Template.__checkName("afInputTime_materialize");                                                                       // 762
Template["afInputTime_materialize"] = new Template("Template.afInputTime_materialize", (function() {                   // 763
  var view = this;                                                                                                     // 764
  return HTML.INPUT(HTML.Attrs({                                                                                       // 765
    type: "time",                                                                                                      // 766
    value: function() {                                                                                                // 767
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 768
    }                                                                                                                  // 769
  }, function() {                                                                                                      // 770
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 771
  }));                                                                                                                 // 772
}));                                                                                                                   // 773
                                                                                                                       // 774
Template.__checkName("afInputWeek_materialize");                                                                       // 775
Template["afInputWeek_materialize"] = new Template("Template.afInputWeek_materialize", (function() {                   // 776
  var view = this;                                                                                                     // 777
  return HTML.INPUT(HTML.Attrs({                                                                                       // 778
    type: "week",                                                                                                      // 779
    value: function() {                                                                                                // 780
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 781
    }                                                                                                                  // 782
  }, function() {                                                                                                      // 783
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 784
  }));                                                                                                                 // 785
}));                                                                                                                   // 786
                                                                                                                       // 787
Template.__checkName("afInputNumber_materialize");                                                                     // 788
Template["afInputNumber_materialize"] = new Template("Template.afInputNumber_materialize", (function() {               // 789
  var view = this;                                                                                                     // 790
  return HTML.INPUT(HTML.Attrs({                                                                                       // 791
    type: "number",                                                                                                    // 792
    value: function() {                                                                                                // 793
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 794
    }                                                                                                                  // 795
  }, function() {                                                                                                      // 796
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 797
  }));                                                                                                                 // 798
}));                                                                                                                   // 799
                                                                                                                       // 800
Template.__checkName("afInputRange_materialize");                                                                      // 801
Template["afInputRange_materialize"] = new Template("Template.afInputRange_materialize", (function() {                 // 802
  var view = this;                                                                                                     // 803
  return HTML.P({                                                                                                      // 804
    "class": "range-field"                                                                                             // 805
  }, "\n    ", HTML.INPUT(HTML.Attrs({                                                                                 // 806
    type: "range",                                                                                                     // 807
    value: function() {                                                                                                // 808
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 809
    }                                                                                                                  // 810
  }, function() {                                                                                                      // 811
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 812
  })), "\n  ");                                                                                                        // 813
}));                                                                                                                   // 814
                                                                                                                       // 815
Template.__checkName("afInputEmail_materialize");                                                                      // 816
Template["afInputEmail_materialize"] = new Template("Template.afInputEmail_materialize", (function() {                 // 817
  var view = this;                                                                                                     // 818
  return HTML.INPUT(HTML.Attrs({                                                                                       // 819
    type: "email",                                                                                                     // 820
    value: function() {                                                                                                // 821
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 822
    }                                                                                                                  // 823
  }, function() {                                                                                                      // 824
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 825
  }));                                                                                                                 // 826
}));                                                                                                                   // 827
                                                                                                                       // 828
Template.__checkName("afInputUrl_materialize");                                                                        // 829
Template["afInputUrl_materialize"] = new Template("Template.afInputUrl_materialize", (function() {                     // 830
  var view = this;                                                                                                     // 831
  return HTML.INPUT(HTML.Attrs({                                                                                       // 832
    type: "url",                                                                                                       // 833
    value: function() {                                                                                                // 834
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 835
    }                                                                                                                  // 836
  }, function() {                                                                                                      // 837
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 838
  }));                                                                                                                 // 839
}));                                                                                                                   // 840
                                                                                                                       // 841
Template.__checkName("afInputSearch_materialize");                                                                     // 842
Template["afInputSearch_materialize"] = new Template("Template.afInputSearch_materialize", (function() {               // 843
  var view = this;                                                                                                     // 844
  return HTML.INPUT(HTML.Attrs({                                                                                       // 845
    type: "search",                                                                                                    // 846
    value: function() {                                                                                                // 847
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 848
    }                                                                                                                  // 849
  }, function() {                                                                                                      // 850
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 851
  }));                                                                                                                 // 852
}));                                                                                                                   // 853
                                                                                                                       // 854
Template.__checkName("afInputTel_materialize");                                                                        // 855
Template["afInputTel_materialize"] = new Template("Template.afInputTel_materialize", (function() {                     // 856
  var view = this;                                                                                                     // 857
  return HTML.INPUT(HTML.Attrs({                                                                                       // 858
    type: "tel",                                                                                                       // 859
    value: function() {                                                                                                // 860
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 861
    }                                                                                                                  // 862
  }, function() {                                                                                                      // 863
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 864
  }));                                                                                                                 // 865
}));                                                                                                                   // 866
                                                                                                                       // 867
Template.__checkName("afInputColor_materialize");                                                                      // 868
Template["afInputColor_materialize"] = new Template("Template.afInputColor_materialize", (function() {                 // 869
  var view = this;                                                                                                     // 870
  return HTML.INPUT(HTML.Attrs({                                                                                       // 871
    type: "color",                                                                                                     // 872
    value: function() {                                                                                                // 873
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 874
    }                                                                                                                  // 875
  }, function() {                                                                                                      // 876
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 877
  }));                                                                                                                 // 878
}));                                                                                                                   // 879
                                                                                                                       // 880
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/gildaspk:autoform-materialize/materialize.coffee.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/*
* Template helpers for "materialize" template
 */
var DEFAULT_PICKADATE_FORMAT, DEFAULT_PICKADATE_FORMAT_SUBMIT, removeClass, selectHelpers, toggleInvalidClass;

removeClass = function(atts, klass) {
  if (typeof atts["class"] === "string") {
    atts["class"].replace(klass, '');
  }
  return atts;
};

toggleInvalidClass = function(atts) {
  var context, formId, isInvalid, ss;
  formId = AutoForm.getFormId();
  ss = AutoForm.getFormSchema();
  context = ss.namedContext(formId);
  isInvalid = context.keyIsInvalid(atts.name);
  if (isInvalid) {
    atts = AutoForm.Utility.addClass(atts, "invalid");
  } else {
    atts = removeClass(atts, "invalid");
  }
  return atts;
};

Template['quickForm_materialize'].helpers({
  submitButtonAtts: function() {
    var atts, qfAtts;
    qfAtts = this.atts;
    atts = {};
    if (typeof qfAtts.buttonClasses === 'string') {
      atts['class'] = qfAtts.buttonClasses;
    } else {
      atts['class'] = 'btn waves-effect waves-light';
    }
    return atts;
  }
});

Template['afFormGroup_materialize'].helpers({
  labelFirst: function() {
    var labelFirstTypes, result, type;
    labelFirstTypes = ['select', 'boolean-select', 'select-multiple'];
    type = AutoForm.getInputType(this);
    result = _.contains(labelFirstTypes, type);
    return result;
  },
  addInputField: function() {
    var result, skipInputType, type;
    skipInputType = ['select', 'select-multiple', 'switch'];
    type = AutoForm.getInputType(this);
    result = !_.contains(skipInputType, type);
    return result;
  },
  skipLabel: function() {
    var result, skipLabelTypes, type;
    skipLabelTypes = ['checkbox', 'checkbox-group', 'boolean-checkbox', 'select-radio', 'select-radio-group', 'select-radio-group-inline', 'boolean-radio', 'boolean-radio-group', 'toggle', 'switch'];
    type = AutoForm.getInputType(this);
    result = this.skipLabel || _.contains(skipLabelTypes, type);
    return result;
  }
});

Template.afLabel_materialize.helpers({
  atts: function() {
    var labelAtts;
    labelAtts = this.afFieldLabelAtts;
    return labelAtts;
  }
});

_.each(["afCheckbox_materialize", "afSelect_materialize", "afBooleanRadioGroup_materialize", "afBooleanSelect_materialize", "afSelectMultiple_materialize", "afSwitch", "afTextarea_materialize", "afInputText_materialize", "afInputPassword_materialize", "afInputButton_materialize", "afInputSubmit_materialize", "afInputReset_materialize", "afInputDateTime_materialize", "afInputDateTimeLocal_materialize", "afInputDate_materialize", "afInputMonth_materialize", "afInputTime_materialize", "afInputWeek_materialize", "afInputNumber_materialize", "afInputRange_materialize", "afInputEmail_materialize", "afInputUrl_materialize", "afInputSearch_materialize", "afInputTel_materialize", "afInputColor_materialize"], function(tmplName) {
  Template[tmplName].helpers({
    atts: function() {
      var atts;
      atts = _.clone(this.atts);
      atts = toggleInvalidClass(atts);
      return atts;
    }
  });
});

_.each(['afInputButton_materialize', 'afInputSubmit_materialize', 'afInputReset_materialize'], function(tmplName) {
  Template[tmplName].helpers({
    atts: function() {
      var atts;
      atts = _.clone(this.atts);
      atts = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light');
      return atts;
    }
  });
});

Template['afTextarea_materialize'].helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, "materialize-textarea");
    atts = toggleInvalidClass(atts);
    return atts;
  }
});

_.each(['afRadio_materialize', 'afCheckboxGroup_materialize', 'afRadioGroup_materialize', 'afCheckboxGroupInline_materialize', 'afRadioGroupInline_materialize'], function(tmplName) {
  Template[tmplName].helpers({
    atts: function() {
      var atts;
      atts = _.clone(this.atts);
      atts = toggleInvalidClass(atts);
      if (this.selected) {
        atts.checked = '';
      }
      delete atts['data-schema-key'];
      return atts;
    },
    dsk: function() {
      return {
        'data-schema-key': this.atts['data-schema-key']
      };
    },
    itemAtts: function() {
      var atts;
      atts = _.clone(this.atts);
      atts.id = atts.id + "_" + this._id;
      return atts;
    }
  });
});

selectHelpers = {
  optionAtts: function() {
    var atts, item;
    item = this;
    atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = '';
    }
    return atts;
  }
};

Template['afSelect_materialize'].helpers(selectHelpers);

Template['afSelectMultiple_materialize'].helpers(selectHelpers);

Template['afBooleanSelect_materialize'].helpers(selectHelpers);

Template['afBooleanRadioGroup_materialize'].helpers({
  falseAtts: function() {
    var atts;
    atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = '';
    }
    return atts;
  },
  trueAtts: function() {
    var atts;
    atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = '';
    }
    return atts;
  },
  dsk: function() {
    return {
      'data-schema-key': this.atts['data-schema-key']
    };
  }
});

Template['afSelectMultiple_materialize'].helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, 'browser-default');
    atts = toggleInvalidClass(atts);
    return atts;
  }
});

Template.afSelect_materialize.rendered = function() {
  this.$('select').material_select();
  Tracker.autorun((function(_this) {
    return function() {
      var options, _ref;
      options = (_ref = _this.data) != null ? _ref.items : void 0;
      return _this.$('select').material_select();
    };
  })(this));
};

Template.afBooleanSelect_materialize.rendered = function() {
  this.$('select').material_select();
  Tracker.autorun((function(_this) {
    return function() {
      var options, _ref;
      options = (_ref = _this.data) != null ? _ref.items : void 0;
      return _this.$('select').material_select();
    };
  })(this));
};

Template.afFormGroup_materialize.rendered = function() {
  var formId;
  formId = AutoForm.getFormId();
  this.autorun((function(_this) {
    return function() {
      var value;
      value = AutoForm.getFieldValue(_this.data.name, formId);
      if (!!value) {
        return _this.$('.input-field > label:not(:focus)').addClass('active');
      } else {
        return _this.$('.input-field > label:not(:focus)').removeClass('active');
      }
    };
  })(this));
};

DEFAULT_PICKADATE_FORMAT = 'yyyy/mm/dd';

DEFAULT_PICKADATE_FORMAT_SUBMIT = 'yyyy/mm/dd';

AutoForm.addInputType('pickadate', {
  template: 'afPickadate',
  valueIn: function(val, atts) {
    var result, timezoneId;
    result = val;
    timezoneId = atts.timezoneId;
    if (typeof timezoneId === 'string') {
      if (typeof moment.tz !== 'function') {
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app');
      }
      if (val instanceof Date) {
        result = moment(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId), 'YYYY-MM-DD[T]HH:mm:ss.SSS').toDate();
      }
    }
    return result;
  },
  valueOut: function() {
    var item, result;
    item = this.pickadate('picker').get('select');
    if (item) {
      result = item.obj;
    }
    return result;
  },
  valueConverters: {
    'string': function(val) {
      if (val instanceof Date) {
        return val.toString();
      } else {
        return val;
      }
    },
    'stringArray': function(val) {
      if (val instanceof Date) {
        return [val.toString()];
      }
      return val;
    },
    'number': function(val) {
      if (val instanceof Date) {
        return val.getTime();
      } else {
        return val;
      }
    },
    'numberArray': function(val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    'dateArray': function(val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function(context) {
    if (context.atts.timezoneId) {
      context.atts["data-timezone-id"] = context.atts.timezoneId;
    }
    delete context.atts.timezoneId;
    return context;
  }
});

Template['afPickadate'].rendered = function() {
  var input, opts, picker, userOptions;
  userOptions = this.data.atts.pickadateOptions || {};
  opts = _.defaults(userOptions, {
    format: DEFAULT_PICKADATE_FORMAT_SUBMIT,
    hiddenName: true,
    closeOnSelect: true
  });
  input = this.$('input').pickadate(opts);
  picker = input.pickadate('picker');
  this.$('input').on('change', function() {
    return $(this).pickadate('picker').close();
  });
  if (this.data.value) {
    this.$('input').parent().find('label').addClass('active');
  }
  this.autorun(function() {
    var data;
    data = Template.currentData();
    if (data.value instanceof Date) {
      picker.set('select', data.value);
    } else {
      picker.set('clear');
    }
    if (data.min instanceof Date) {
      picker.set('min', data.min);
    }
    if (data.max instanceof Date) {
      return picker.set('max', data.max);
    }
  });
};

Template.afPickadate.helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    delete atts.dateTimePickerOptions;
    delete atts.pickadateOptions;
    return atts;
  }
});

AutoForm.addInputType('switch', {
  template: 'afSwitch',
  valueIn: function(value) {
    return value;
  },
  valueOut: function() {
    var checked, input, result, _ref, _ref1;
    input = this[0];
    checked = input.checked;
    if (checked) {
      result = ((_ref = input.attributes.trueValue) != null ? _ref.value : void 0) || true;
    } else {
      result = ((_ref1 = input.attributes.falseValue) != null ? _ref1.value : void 0) || false;
    }
    return result;
  }
});

Template.afSwitch.rendered = function() {
  var input;
  input = this.$('input');
  return this.autorun((function(_this) {
    return function() {
      var data, trueValue;
      data = Template.currentData();
      trueValue = _this.data.atts.trueValue || true;
      return input.prop('checked', data.value === trueValue);
    };
  })(this));
};

Template.afSwitch.helpers({
  atts: function() {
    return _.extend(this.atts, {
      id: this.atts.name
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gildaspk:autoform-materialize'] = {};

})();
