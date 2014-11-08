define([
  "template!./_template.html",
  "less!./{%= tag_name %}.less"
], function(template) {

  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {};
  proto.attachedCallback = function() {};
  proto.detachedCallback = function() {};
  proto.attributeChangedCallback = function() {};

  document.registerElement("{%= tag_name %}", { prototype: proto });

});