Seattle Times Component Template
================================

(or, The Poor Journalist's Polymer)
-----------------------------------

This project is a scaffolding for `grunt-init <http://gruntjs.com/project-scaffolding>`__ intended to smooth the process of creating reusable web components. It provides a basic setup process for bundling custom element definitions, along with their templates and styles, into a single .js file for easy use.

Since these components are meant to be used with IE9 and up with a very small footprint, they do not use all the features of the Web Components "spec," and they do not use Polymer's platform shim. Instead, the following libraries/techniques are used:

* A LESS plugin for RequireJS packages styles with the component, and automatically adds them on first load, instead of HTML imports
* `doT.js templates <http://olado.github.io/doT/>`__ are pre-compiled and packaged through a second AMD plugin, instead of using ``<template>``
* The minimal `registerElement() <https://github.com/WebReflection/document-register-element>`__ shim is included for custom elements
* Shadow root is not supported by default, although you're welcome to make use of it

By default, the template sets up your package to be published to Bower, in addition to deployment as a bundle file. This way, you can include these components in other projects without incurring a loading penalty from pulling in the bundles separately.

For more details as to how the scaffolding is installed and run, see our `news app template <https://github.com/seattletimes/newsapp-template>`__, on which this is based.

Project layout
--------------

By default, a project can contain one or more components. Each one should be contained in its own folder, along with its styles and templates. So, for example, if we were making a component called ``responsive-frame``, we would probably have the following layout:

* /src/responsive-frame/responsive-frame.js - Main module for the custom element
* /src/responsive-frame/_template.html - doT template for the element
* /src/responsive-frame/responsive-frame.less - LESS file for the element

The scaffolding will also set up an ``index.html`` file with your tag pre-inserted for testing. In the build directory, each component folder will generate two JavaScript files--one for development, which includes a source map, and one marked ``.min.js``, which is for production and omits the source map (eventually it'll be minified as well). 