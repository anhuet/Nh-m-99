const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const browersync = require('browser-sync').create()

gulp.task('sass',() => {
    return gulp.src('src/scss/**/*.scss')
                .pipe(sass({
                    outputStyle: 'compressed'
                }).on('error', sass.logError))
                .pipe(gulp.dest('dist/css/'))
})
gulp.task('pug',() =>{
    return gulp.src('src/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))

})

gulp.task('default', () => {
    gulp.watch('src/**/*.pug',gulp.series('pug'))
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
   
})