//shim
require("document-register-element");

//element setup
var template = require("./_template.html");
require("./{%= tag_name %}.less");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {};
proto.attachedCallback = function() {};
proto.detachedCallback = function() {};
proto.attributeChangedCallback = function() {};

try {
  document.registerElement("{%= tag_name %}", { prototype: proto });
} catch (e) {
  console.error("<{%= tag_name %}> has already been registered.")
}