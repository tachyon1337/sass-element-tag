
var gulp=require('gulp');
var sassdoc = require('sassdoc');

gulp.task('default',function(){
    console.log('echo sass element-tag...');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});
