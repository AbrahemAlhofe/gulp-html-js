# gulp-html-js v2.0.0

gulp plugin to make transform html in file javascript to string
## Installation

Use the package manager [npm](https://www.npmjs.com) to install plugin.

```bash
> node install --save-dev gulp-html-js
```

## Usage

```
var gulp = require('gulp');
var htmlJs = require('gulp-html-js')

gulp.task('js', function () {
  return gulp.src('./app.js')
    .pipe(htmlJs()) // plugin
    .pipe(gulp.dest('./public'))
});

gulp.task("default", function () {
  gulp.watch(['./app.js'], gulp.series(["js"]))
})
```

### app js

```
<html name="footer">
  <span v-bind:class='pink'>
      hello {{name}} are you okay
  </span>
</html>


var value = 24

<html name="navbar">
  <span v-bind:class='pink'>
      hello {{name}} are you okay
  </span>
</html>

var obj = {
  template : @navbar,
  data () {
    return {
      val : value
    }
  }
}

var footerTemplate = @footer
```
after run gulp
```bash
> gulp
```

### app js

```
var value = 24

var obj = {
  template : "<span v-bind:class='pink'>hello {{name}} are you okay</span>",
  data () {
    return {
      val : value
    }
  }
}

var footerTemplate = "<span v-bind:class='pink'>hello {{name}} are you okay</span>"

```

NOTE : if not any html in the file plugin return file without any edit

You can read the [documantion](https://github.com/AbrahemAlhofe/gulp-html-js) to know more about plugin.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/https://github.com/AbrahemAlhofe/gulp-html-js/blob/master/LICENSE)
