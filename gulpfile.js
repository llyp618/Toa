const gulp = require('gulp');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const clean = require('gulp-clean');
const copy = require('gulp-copy')
const changed = require('gulp-changed')
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');

const NODE_ENV = process.env.NODE_ENV


function cleanDist() {
  return gulp.src('./dist/*', {read: false}).pipe(clean())
}


function compile(){
  return (
    tsProject.src()
      .pipe(changed('dist'))
      .pipe(alias({configuration: tsProject.config}))
      .pipe(tsProject()).js
      .pipe(gulp.dest('dist'))
    );
}

function copyPublic () {
  return (
    gulp.src(['src/public/*']).pipe(copy('dist/public', {prefix: 2}))
  )
}

function devServer (done) {
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
  gulp.task('default', gulp.series([cleanDist, compile, copyPublic]))
} else {
  gulp.task('default', gulp.series([cleanDist, compile,  copyPublic, devServer]))
  gulp.watch('./src/**/*', { delay: 800 }, compile, copyPublic)
}
