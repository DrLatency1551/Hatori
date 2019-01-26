var gulp = require('gulp'),
    compass   = require('gulp-compass');

    gulp.task('compass',function(){
        return gulp.src('src/scss/*.scss')
            .pipe(compass({
                sourcemap: true,
                time: true,
          css: 'dist/css/',
          style: 'compact' //nested, expanded, compact, compressed
            }))
            .pipe(gulp.dest('dist/css/'));
    }); 

    gulp.task('watch',function(){
        gulp.watch('src/scss/*.scss',['compass']);
    });
    
    gulp.task('default',['compass','watch']);