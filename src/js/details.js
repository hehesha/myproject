(function($){
    $('#d_header').load('../index.html header',function(){
        var $arr=$('img');
            for(var i=0;i<$arr.length;i++){
                $arr.eq(i).attr('src','../'+$arr.eq(i).attr('src'));
            }
    });
    $('#d_footer').load('../index.html footer',function(){
        var $arr=$('img');
            for(var i=0;i<$arr.length;i++){
                $arr.eq(i).attr('src','../'+$arr.eq(i).attr('src'));
            }
    });
    $('.allType').load('../index.html nav');
// -----------------------------------------------------------
    // 加载数据
    //用变量接收地址栏的数据信息
    var params = location.search;
    console.log(params);
    //提取字符串问号后面的信息
    g_id = params.slice(4);
    console.log(g_id);
    // var id = params.slice(4,7);
   
    // 请求数据
    var detaildata=new Promise(function(resolve,reject){
        $.ajax({
            url:'../api/details.php',
            data:{
                id:g_id
            },
            success:function(data){
                    resolve(data);
                },
            fail:function(){
                    reject('请求失败');
                }
        });
    });
    $big_img=$('.big_img');
    $d_price=$('.d_price');
    $d_tit=$('.d_tit');

    //指定Resolved状态和Rejected状态的回调函数
    detaildata.then(function(res){
        console.log(res);
        d_data=JSON.parse(res);
        // 商品插入页面
        $big_img.html(`<img src=${d_data[0].imgurl}>`);
        for(var i=0;i<$d_tit.length;i++){
            $d_tit.eq(i).html(d_data[0].details);
        }
        $d_price.html(`￥${d_data[0].price}`);

    },function(err){
         console.log(err);
    });

})(jQuery)