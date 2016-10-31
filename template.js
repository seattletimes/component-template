var exec = require("child_process").exec;
var path = require("path");

exports.description = "A standard starting-point for news app development at the Seattle Times.";
exports.template = function(grunt, init, done) {
  //prelims
  var here = path.basename(process.cwd());

  //process
  init.process(init.defaults, [
    init.prompt("author_name"),
    init.prompt("tag_name", here),
    init.prompt("component_description"),
    init.prompt("github_repo", "seattletimes/component-" + here)
  ], function(err, props) {
    //add environment variables, dynamic properties
    props.s3_key = process.env.AWS_ACCESS_KEY_ID || "";
    props.s3_secret = process.env.AWS_SECRET_ACCESS_KEY || "";
    props.s3_region = process.env.AWS_DEFAULT_REGION || "us-west-1";

    var root = init.filesToCopy(props);
    //rename "component" to tag name during move
    for (var key in root) {
      if (key.indexOf("component") > -1) {
        var src = root[key];
        delete root[key];
        var dest = key.replace(/component/g, props.tag_name);
        root[dest] = src;
      }
    }
    init.copyAndProcess(root, props);

    //install node modules
    console.log("Installing Node modules...");
    exec("npm install --cache-min 999999", done);
  });
};