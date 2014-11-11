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

document.registerElement("{%= tag_name %}", { prototype: proto });