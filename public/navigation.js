window.onload=function(){
    $.wait = function( callback, seconds){
        return window.setTimeout(callback, seconds * 100 );
    }
    $.get("navigation.html",function(data){
        $("#navigation").html(data);
        var temp=$("#navigation").attr('pagename');
        if(temp!=''){
            document.getElementById("nav_"+temp).classList.add('active');
        }
        $.wait( function(){ $('.loading').fadeOut() }, 2);
    });
}
