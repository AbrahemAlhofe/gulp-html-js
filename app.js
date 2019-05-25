'use strict';
const PLUGIN_NAME = 'gulp-html-js';
var through = require('through2');
var helping = require('./helpingFnc')
var result, content
//var PluginError = gutil.PluginError;

var gulpHtmlJs = function() {
    return through.obj(function (file, enc, callback) {
      result = content = file.contents.toString();

      var regex = new RegExp(`(?<= )<(\\w+) ?.*>[\\n\\s\\w\\W]*</\\1>`, 'g');
      var matches = content.match(regex)

      if (regex.test(content)) {
        for (let match of matches) {
          result = result.replace(match, helping.filter(match))
        }
      }

      callback(null, helping.createFile(file, result))
    });
};
//Export the Method
module.exports = gulpHtmlJs;
