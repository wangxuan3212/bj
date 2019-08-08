$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");
           $(`<link rel="stylesheet" href="header.css">`).appendTo("head")
        }
    })
})