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
    var d_data;

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

    // 购物车数量
    var $add=$('.b_add');
    var $plus=$('.b_plus');
    var $number=$('.b_number');
    $('.addTobuy').on('click','b',function(){
        console.log(this.className);
        if(this.className=='b_add'){
            if($number.val()==1){
                $plus.css('backgroundPosition','0 -77px');
            }
            $number.val($number.val()*1+1);
        }
        if(this.className=='b_plus'){
            if($number.val()==1){
                return
            }else if($number.val()==2){
                $plus.css('backgroundPosition','0 -34px');
            }
            $number.val($number.val()*1-1);

        }
    });

    // 加入购物车
    $('.a_buy').on('click',function(){
        new Popover({
            title:'',overlay:0.3,
            content:`<h2>已成功加入购物车</h2><button class="continue">继续购物</button><button class="goto">查看购物车</button>`,
            width:500
        });
        // 将购买信息写入数据库
            console.log('d_data',d_data);
            $.ajax({
                url:'../api/carlist.php',
                data:{
                    goodsid:d_data[0].id,
                    price:d_data[0].price,
                    number:$number.val(),
                    imgurl:d_data[0].imgurl,
                    details:d_data[0].details
                },
                success:function(data){
                    console.log(data);
                }
            });
        $('.continue').on('click',function(){
            $('.popover').css('display','none');
            $('.overlay').css('display','none');
        });
        $('.goto').on('click',function(){

            // 跳转到购物车
            location.href="../html/shoppingCar.html";


        });
        
    });


    // 放大镜
    
            $('.big_img').gdsZoom;

            $('.small_img img').on('mouseover',function(){
                $('.big_img img').attr({
                    'src':this.src,
                    'data-big':$(this).attr('data-big') || this.src
                });
            });
        

})(jQuery)