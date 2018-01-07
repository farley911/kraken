const gulp = require('gulp');

gulp.task('lint-sass', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
  
  return gulp
    .src([ 'src/app/modules/**/**/*.scss', 'src/app/app.component.scss', 'src/style.scss', 'src/style/*.scss' ])
    .pipe(gulpStylelint({
      fix: true,
      reporters: [{
        console: true,
        formatter: 'string' 
      }]
    }))
    .pipe(gulp.dest('src'));
});