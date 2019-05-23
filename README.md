# gulp-html-js v1.0.2

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
var obj = () => {
  temple : <div class="active">
            <span v-bind:class='pink'>
              hello {{name}} are you okay
            </span>
           </div>
}
```
after run gulp
```bash
> gulp
```

### app js

```
var obj = () => {
  temple : "<div class=\"active\"><span v-bind:class='pink'>hello {{name}} are you okay</span></div>"
}
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/https://github.com/AbrahemAlhofe/gulp-html-js/blob/master/LICENSE)
