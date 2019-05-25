'use strict';
const PLUGIN_NAME = 'gulp-html-js';
var File = require('vinyl');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var gulpHtmlJs = function() {
    return through.obj(function (file, enc, callback) {
      var content = file.contents.toString();
      var regex = new RegExp(`(?<= )<(\\w+) ?.*>[\\n\\s\\w\\W]*</\\1>`, 'g');
      var matches = content.match(regex)
      var result = content

      if (regex.test(content)) {
        for (let match of matches) {
          var match_ = match.replace(/\n/g,'').replace(/(")/g, '\\$1').replace(/> +/g, '>').replace(/ +</g, '<')
          result = result.replace(match, '"' + match_ + '"')
        }

        var aFile = new gutil.File();
        aFile.path = file.path;
        aFile.contents = Buffer.from(result)
      }

      callback(null, new File(aFile))
    });
};
//Export the Method
module.exports = gulpHtmlJs;
