const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

const config = {
  mode: {
    css: {
      bust: false,
      prefix: '.null-%s',
      sprite: 'nullicons.svg',
      dimensions: '',
      render: {
        css: {
          dest: 'nullicons.css'
        }
      }
    },
    view: {
      bust: false,
      prefix: '.null-%s',
      sprite: 'nullicons.svg',
      dimensions: '',
      render: {
        css: {
          dest: 'nullicons.css'
        }
      }
    },
    defs: {
      bust: false,
      prefix: '.null-%s',
      sprite: 'nullicons.svg'
    },
    symbol: {
      bust: false,
      prefix: '.null-%s',
      sprite: 'nullicons.svg'
    },
    stack: {
      bust: false,
      prefix: '.null-%s',
      sprite: 'nullicons.svg'
    }
  }
}

gulp.task('generate-spritesheet', function() {
  gulp.src('svg/*.svg')
    .pipe(svgSprite(config))
    .on('error', function(error){
      console.log(error);
    })
    .pipe(gulp.dest('dist'))
})

gulp.task('watch-icons', function () {
  gulp.watch('svg/*.svg', ['generate-spritesheet'])
});

gulp.task('default', ['generate-spritesheet', 'watch-icons'])
