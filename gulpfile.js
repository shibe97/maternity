var gulp = require('gulp');
var gulputil = require('gulp-util');
var sass = require('gulp-sass');


// Sass(SCSS)ビルドタスク
gulp.task('sass', function () {
    // Sass(SCSS)読み込み用ディレクトリ指定
    gulp.src('./public/scss/*.scss')
    //コンパイルメソッド実行
    .pipe(sass({
        includePaths: require('node-bourbon').includePaths
    }))
    //コンパイル後出力ファイル先の指定
    .pipe(gulp.dest('./public/css'));
});

//ファイルの監視
gulp.task('watch',function(){
    gulp.watch(['./public/scss/*.scss'],['sass']); //scssファイルを監視
});

gulp.task('default',['watch']);
