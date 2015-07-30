var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['js/jquery-1.11.1.min.js','js/imagesLoaded.js','js/masonry.pkgd.min.js', 'js/main.js', 'js/jquery.fluidbox.min.js'])
    .pipe(concat('gallery-deps.js'))
    .pipe(gulp.dest('.dist/'));
});

/*
  <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/imagesLoaded.js"></script>
    <script src="js/masonry.pkgd.min.js"></script>
    <script src="js/main.js"></script>
 */