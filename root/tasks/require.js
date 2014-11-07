/*

Builds a source package, starting from src/js/main.js

*/

var async = require("async");
var path = require("path");
var r = require("requirejs");
var project = require("../project.json");

module.exports = function(grunt) {

  grunt.registerTask("amd", "Compile AMD modules to build/main.js", function(mode) {
    var done = this.async();

    var config = {
      baseUrl: "src",
      deps: ["define.js", "registerElement"], //minimal shim for define/require
      generateSourceMaps: mode == "dev" ? true : false,
      preserveLicenseComments: false,
      optimize: mode == "dev" ? "none" : "uglify2",
      stubModules: ["text", "less"],
      //common paths for bower packages
      //luckily, require won't complain unless we use them
      paths: {
        "registerElement": "lib/document-register-element/build/document-register-element"
      }
    };

    for (var key in project.require) {
      config[key] = project.require[key];
    }

    //set name, out for each seed file
    var files = grunt.file.expand(["src/*/*.js", "!src/text.js", "!src/less.js", "!src/template.js", "!src/define.js"]);

    async.each(files, function(src, c) {
      var extension = path.extname(src);
      var basename = path.basename(src);
      var insertRequire = src.replace(/^src\/|\.\w+$/g, "");
      var module = basename.replace(extension, "");
      var output = "build/" + basename;
      config.name = insertRequire;
      config.out = output;
      config.insertRequire = [insertRequire];
      r.optimize(config, c);
    }, function() {
      done();
    });

  });

};
