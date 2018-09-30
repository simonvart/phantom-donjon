var gulp = require('gulp');

/**
 * Copy Phaser Game File in source directory
 */
gulp.task('copyPhaser', function() {
    var sourceFiles = ['node_modules/phaser/dist/phaser.min.js'];
    var destination = 'src/js';

    return gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});

gulp.task('default', ['copyPhaser']);