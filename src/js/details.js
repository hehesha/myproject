(function($){
    $('#d_header').load('../index.html header',function(){
        $('.logo img').attr('width','205px');
    });
    $('#d_footer').load('../index.html footer',function(){
        var $arr=$('img');
            for(var i=0;i<$arr.length;i++){
                $arr.eq(i).attr('src','../'+$arr.eq(i).attr('src'));
            }
    });
    $('.allType').load('../index.html nav');

})(jQuery)