'use strict';
const PLUGIN_NAME = 'gulp-html-js';
var through = require('through2');
var helping = require('./helpingFnc')
var result, content
//var PluginError = gutil.PluginError;

var gulpHtmlJs = function() {
    return through.obj(function (file, enc, callback) {
      result = content = file.contents.toString();
      ////////////////////////////////////
      var tags = helping.getTags(content)
      var matches = helping.getHtml(tags)
      var names = helping.getName(matches)
      ///////////////////////////////////

      if (matches.length !== 0) {
        matches.forEach((match, i) => {
          result = result.replace(match, "")
        })
        matches.forEach((match, i) => {
          result = result.replace('@'+names[i], helping.convert(match))
        })
        result = result.replace(new RegExp('^\\s+\\n', 'gm'), '\n')
      }

      callback(null, helping.createFile(file, result))
    });
};
//Export the Method
module.exports = gulpHtmlJs;
