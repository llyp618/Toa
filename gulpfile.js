const gulp = require('gulp');
const ts = require('gulp-typescript');
const alias = require('gulp-ts-alias');
const clean = require('gulp-clean');
const copy = require('gulp-copy')
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const watch = require('gulp-watch'); // repalce "gulp.watch" to watch delete or add file

const tsProject = ts.createProject('tsconfig.json');

const NODE_ENV = process.env.NODE_ENV


function cleanDist() {
  return gulp.src('./dist/*', {read: false}).pipe(clean());
}


function compile(){
  return (
    tsProject.src()
      .pipe(plumber({ 
        errorHandler(e){
          console.error(e)
        }} 
      ))
      .pipe(changed('dist'))
      .pipe(alias({configuration: tsProject.config}))
      .pipe(tsProject()).js
      .pipe(gulp.dest('dist'))
    );
}

function copyAssets () {
  return (
    gulp.src(['src/public/*', 'src/views/*']).pipe(copy('dist/', { prefix: 1 }))
  );
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
    'watch': ['dist'],
    'done': done
  })
}

if (NODE_ENV === 'production') {
  gulp.task('default', gulp.series([cleanDist, compile, copyAssets]));
} else {
  gulp.task('default', gulp.series([cleanDist, compile,  copyAssets, devServer]));
  // watch
  watch('./src/**/*.ts', compile);
  watch(['./src/views/*', './src/public'], copyAssets);
}
