var File = require('vinyl');
var gutil = require('gulp-util');

module.exports = {
  getTags : (fileContent) => {
    var tags = []
    var index = -1
    for (let chr of fileContent) {
      if (chr == "<") {
        tags.push("")
        index += 1
      }

      tags[index] += chr

      if (chr == ">") {
        tags.push("")
        index += 1
      }
    }
    return tags
  },
  getName : (matches) => {
    var values_o = []
    if (matches.length == 0) return;
    matches.forEach((match) => {
      console.log(matches)
      var openTag_r = new RegExp('<html[^<>]*>', 'g')
      var attr_r = new RegExp(`name *= *('|").*\\1`)
      var value_r = new RegExp(`('|").*\\1`)

      var openTags = match.match(openTag_r)

      openTags.forEach((openTag) => {
        var attr = openTag.match(attr_r)[0]
        var value = attr.match(value_r)[0].replace(/('|")/g, '')
        values_o.push(value)
      })
    })
    return values_o
  },
  getHtml : (tags) => {
    var r_Opentag = new RegExp('<html[^<>]*>', 'g')
    var r_Closetag = new RegExp('</html>', 'g')
    var sent = ""
    var tags_ = []
    tags.forEach((tag) => {
      if (r_Opentag.test(tag)) {
        sent = ''
      }
      sent += tag
      if (r_Closetag.test(tag)) {
        tags_.push(sent)
        sent = ''
      }
    })
    return tags_
  },
  createFile : (file, content) => {
    var aFile = new gutil.File();
    aFile.path = file.path;
    aFile.contents = Buffer.from(content)
    return new File(aFile)
  },
  convert : (string) => {
    var string_ = string.replace(new RegExp('</?html[^<>]*>', 'g'), "").replace(/(")/g, '\\$1').replace(/\s+</g, '<').replace(/>\n?\s+/g, '>').replace(/\n/g,'')
    return '"' + string_ + '"'
  }
}
