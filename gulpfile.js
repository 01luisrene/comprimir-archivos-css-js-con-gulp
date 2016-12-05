var gulp = require('gulp');  
var cleanCSS = require('gulp-clean-css');  
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');  
var pump = require('pump');

//Tarea para comprimir archivos CSS
gulp.task('comprimir-css', function() {  
 return gulp.src('css/*.css') //Ruta de la carpeta CSS apuntando a los archivos `.css`
  .pipe(cleanCSS({compatibility: 'ie8'})) //Comprime los archivos `.css`
  .pipe(gulp.dest('dist')) //Carpeta donde se guardara el archivo `.css` comprimido
  .pipe(notify("Tarea comprimir-css terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Tarea para comprimir archivos js
gulp.task('comprimir-js', function (cb) {  
 pump([
  gulp.src('js/*.js'), //Ruta de la carpeta apuntando a los archivos `.js`
  uglify(), //Comprime los archivos `.js`
  gulp.dest('dist')//Carpeta donde se guardara el archivo `.js` comprimido
   ],
    cb
  )
 .pipe(notify("Tarea comprimir-js terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){  
 gulp.watch('./css/**/*', ['comprimir-css']);
 gulp.watch('./js/**/*', ['comprimir-js']);
});

//Tarea por defecto
gulp.task('default',['watch', 'comprimir-css', 'comprimir-js']);  