    var gulp = require('gulp');
    var browserSync = require('browser-sync');
    var sass = require('gulp-sass');
    var prefix = require('gulp-autoprefixer');
    var cp = require('child_process');
    var cleanCSS = require('gulp-clean-css');
    var uglify = require('gulp-uglify');
    var pump = require('pump');
    var imagemin = require('gulp-imagemin');
    var imageminPngquant = require('imagemin-pngquant');
    var imageresize = require('gulp-image-resize');
    var rename = require("gulp-rename");
    var changed = require('gulp-changed');
    var parallel = require("concurrent-transform");
    var os = require("os");

    var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
    var messages = {
      jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
    };

    /**
     * Build the Jekyll Site
     */
    gulp.task('jekyll-build', function(done) {
      browserSync.notify(messages.jekyllBuild);
      return cp.spawn(jekyll, ['build'], {
          stdio: 'inherit'
        })
        .on('close', done);
    });

    /**
     * Rebuild Jekyll & do page reload
     */
    gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
      browserSync.reload();
    });

    /**
     * Wait for jekyll-build, then launch the Server
     */
    gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
      browserSync({
        server: {
          baseDir: '_site'
        }
      });
    });

    /**
     * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
     */
    gulp.task('sass', function() {
      return gulp.src('_scss/main.scss')
        .pipe(sass({
          includePaths: ['scss'],
          onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
          cascade: true
        }))
        .pipe(cleanCSS({
          compatibility: 'ie8'
        }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
        .pipe(gulp.dest('css'));
    });

    /**
     * Minify javascript files (must be run separatly after gulp)
     */
    gulp.task('compress', function(cb) {
      pump([
          gulp.src('js/*.js'),
          uglify(),
          gulp.dest('_site/js')
        ],
        cb
      );
    });

    /**
     * Optimize Image Files
     */

    gulp.task('optimize', function() {
      gulp.src('img/**/*.{jpg,gif}')
        .pipe(parallel(
          imageresize({
            quality: 0.8,
            samplingFactor: [2, 2],
            noProfile: true,
            interlace: true,
          }),
          os.cpus().length
        ))
        .pipe(gulp.dest('img'));
      gulp.src('img/**/*.{svg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
    });

    /**
     * Resize image files
     */

    var resizeImageTasks = [];
    [400, 600, 900, 1200, 1800, 2400].forEach(function(size) {
      var resizeImageTask = 'resize_' + size;
      gulp.task(resizeImageTask, function() {
        gulp.src('unsized-img/**/*.{jpg,png,gif}')
          .pipe(parallel(
            imageresize({
              width: size,
              upscale: false,
            }),
            os.cpus().length
          ))
          .pipe(rename(function(path) {
            path.basename += '-' + size;
          }))
          .pipe(gulp.dest('img'));
        gulp.src('unsized-img/**/*.{jpg,png,gif,svg,ico}')
          .pipe(gulp.dest('img'));
      });
      resizeImageTasks.push(resizeImageTask);
    });



    /**
     * Watch scss files for changes & recompile
     * Watch html/md files, run jekyll & reload BrowserSync
     */
    gulp.task('watch', function() {
      gulp.watch('_scss/*.scss', ['sass']);
      gulp.watch(['*.html', '_layouts/*.html', '_posts/*', 'work/*.html', 'services/*.html', 'culture/*.html', 'blog/*.html', 'contact/*.html', 'about/*.html', 'blog/**/*.md', 'work/**/*.md', 'play/*.html'], ['jekyll-rebuild']);
    });

    /**
     * Default task, running just `gulp` will compile the sass,
     * compile the jekyll site, launch BrowserSync & watch files.
     */
    gulp.task('default', ['browser-sync', 'watch']);

    /**
     * Resizes images and places them in new folder
     */
    gulp.task('resize', resizeImageTasks);

    /**
     * Runs minification and image compression
     */
    gulp.task('min', ['optimize']);
