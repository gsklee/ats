import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';

const _ = GulpLoadPlugins();

Gulp.task('build:scripts',
  () => Gulp.src('ats.babel.js')
            .pipe(_.rename('ats.js'))
            .pipe(_.babel())
            .pipe(Gulp.dest('.'))
);
