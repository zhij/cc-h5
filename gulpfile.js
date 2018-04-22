var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
	      	stream: true
	    }))
})
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('css/*.scss', ['sass']);
	gulp.watch('index.html',browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})
