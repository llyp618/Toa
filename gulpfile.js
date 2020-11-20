const gulp = require('gulp');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const clean = require('gulp-clean');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');

const NODE_ENV = process.env.NODE_ENV


function cleandist() {
  return gulp.src('./dist/*', {read: false}).pipe(clean())
}


function compile(){
  return (
    tsProject.src()
      .pipe(alias({configuration: tsProject.config}))
      .pipe(tsProject()).js
      .pipe(gulp.dest('dist'))
    );
}

function devserver (done) {
  nodemon({
    'verbose': true,
    'ext': 'js',
    'script': './dist/main.js',
    'delay': '500',
    'env': {
      'NODE_ENV': 'development'
    },
    'done': done
  })
}

if (NODE_ENV === 'production') {
  gulp.task('default', gulp.series([cleandist, compile]))
} else {
  gulp.task('default', gulp.series([cleandist, compile, devserver]))
  gulp.watch('./src/**/*', { delay: 800 }, compile)
}
