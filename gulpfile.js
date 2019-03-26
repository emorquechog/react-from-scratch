const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => {
    return gulp.src(['tests/*.test.js'], { read: false }).pipe(
        mocha({
            require: ['@babel/register'],
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        })
    );
});
