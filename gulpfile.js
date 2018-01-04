// 引入gulp模块
let gulp=require('gulp');
let sass=require('gulp-sass');


let path={
    sass:'./src/sass/*.scss'
}
// 创建任务
// 编译sass文件
gulp.task('compileSass',function(){
    // 返回文件流
    gulp.src(path.sass)
    // 编译
        .pipe(sass({outputStyle:'expended'}))
        // 输出
        .pipe(gulp.dest('./src/css'))
})

// 监听文件修改、并执行相应任务
gulp.task('listenSass',function(){
    // 监听这个文件，当文件修改时执行相应任务
    gulp.watch(path.sass,['compileSass']);
})