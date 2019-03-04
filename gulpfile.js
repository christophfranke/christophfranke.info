const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const md = require('markdown-it')({ html: true })
const mila = require('markdown-it-link-attributes')
const connect = require('gulp-connect')

md.use(mila, {
  attrs: {
    target: '_blank',
    rel: 'noopener'
  }
})

gulp.task('connect', done => {
  connect.server({
  	root: 'dist',
  	port: 3000,
  	livereload: true
  })

  done()
})

gulp.task('static', () => {
	return gulp.src('src/static/**/*')
		.pipe(gulp.dest('dist'))
})

gulp.task('pug', () => gulp.src('src/pages/*.pug')
	.pipe(pug({
		filters: {
			markdown: (input) => {
				return md.render(input)
			}
		}
	}))
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload()))

gulp.task('sass', () => gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload()))


gulp.task('build', gulp.parallel(['pug', 'sass', 'static']))

gulp.task('watch', () => {
	gulp.watch('src/pages/**/*.pug', gulp.series('pug'))
	gulp.watch('src/content/**/*.md', gulp.series('pug'))
	gulp.watch('src/sass/**/*.scss', gulp.series('sass'))
	gulp.watch('src/static/**/*', gulp.series('static'))
})

gulp.task('default', gulp.series('build', 'connect', 'watch'))