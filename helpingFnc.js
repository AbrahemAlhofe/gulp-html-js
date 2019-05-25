var File = require('vinyl');
var gutil = require('gulp-util');

module.exports = {
  createFile : (file, content) => {
    var aFile = new gutil.File();
    aFile.path = file.path;
    aFile.contents = Buffer.from(content)
    return new File(aFile)
  },
  filter : (string) => {
    var string_ = string.replace(/(")/g, '\\$1').replace(/ +</g, '<').replace(/>\n? */g, '>').replace(/\n/g,'')
    return '"' + string_ + '"'
  }
}
