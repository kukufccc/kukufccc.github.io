var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
    }));

});

//конвектор из scss в css
var gulp = require('gulp');//переменная
var rename = require ('gulp-rename');//переменная
var sass = require ('gulp-sass');//переменная

function css_style(done) {//функция

    gulp.src('./scss/styles.scss')//берет файл по пути scss/style.scss
    .pipe(sass({
        errorLogToConsole: true,//включает вывод ошибок
        outputStyle: 'compressed'//включает "минификацию кода т.е. удалени пробелов и символов типа точка с запятой"
    }))
    .on('error', console.error.bind(console))//выводит ошибки в консоль
    .pipe(rename ({suffix:'.min'}))//добавляет суффикс
    .pipe( gulp.dest ('./css/') );//помещает скобированный файл в указанную папку


    done();//завершает функцию
}


gulp.task(css_style);//с помощью этого можно обращаться к функции
