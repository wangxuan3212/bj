$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/footer.html",
        type:"get",
        success:function(result){
           
           $(result).replaceAll("footer");
           $(`<link rel="stylesheet" href="footer.css">`).appendTo("head")
        }
    })
})