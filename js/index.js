
var movieShow=document.getElementsByClassName("movie-show-conter");
for(var movie of movieShow){
    movie.onmouseover=function(){
        var movie=this;
        var movieList=movie.children[1];
        movieList.setAttribute("style","height:40px;background: #000; color:#fff;height: 40px;bottom: 8px; transition:all .2s linear; opacity:0.5;")
    }
    movie.onmouseout=function(){
        var movie=this;
        var movieList=movie.children[1];
        movieList.setAttribute("style"," width: 97.5%;position: absolute;color:transparent;line-height:50px;")
    }
}


//设置轮播图的间隔时间
$(".carousel").carousel({
    interval:1500
})
