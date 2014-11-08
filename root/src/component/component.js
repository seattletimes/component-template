define([
  "../amd/template!./_template.html",
  "../amd/less!./{%= tag_name %}.less",
  "../lib/document-register-element/build/document-register-element"
], function(template) {

  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {};
  proto.attachedCallback = function() {};
  proto.detachedCallback = function() {};
  proto.attributeChangedCallback = function() {};

  document.registerElement("{%= tag_name %}", { prototype: proto });

});