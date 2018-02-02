var gulp = require('gulp'); 
var sass = require('gulp-sass');
// [crayon-5a44c5c0b0a04204850736 inline="true" ]
gulp.task('sass', function(){
  gulp.src('styles/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('styles/'))
});


// Gulp watch syntax
gulp.watch('styles/style.scss', ['sass']);
