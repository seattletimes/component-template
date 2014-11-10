var template = require("./_template.html");
require("document-register-element");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {};
proto.attachedCallback = function() {};
proto.detachedCallback = function() {};
proto.attributeChangedCallback = function() {};

document.registerElement("{%= tag_name %}", { prototype: proto });