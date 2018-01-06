 (function($){
        // 加载头部和尾部
        $('#goods_header').load('../index.html header',function(){
            $('.logo img').attr('width','205px');
        });
        $('#goods_footer').load('../index.html footer',function(){
            var $arr=$('img');
            for(var i=0;i<$arr.length;i++){
                $arr.eq(i).attr('src','../'+$arr.eq(i).attr('src'));
            }
           
        });
        // 轮播图插件
        $('.g_banner').lxCarousel({
                imgs:['../images/goodlist/banner1.jpg','../images/goodlist/banner2.jpg','../images/goodlist/banner3.jpg','../images/goodlist/banner4.jpg','../images/goodlist/banner5.jpg'],
                buttons:true,
                width:1054,
                height:408
                // type:"fade"
            });


        // 写入全球精选
        $global=$('.globalSelect');
       var imgdata=new Promise(function(resolve,reject){
            // 请求数据
            $.ajax({
                url:"../api/goodlist.php",
                data:{
                    area:"gselect"
                },
                success:function(data){
                    resolve(data);
                },
                fail:function(){
                    reject('请求失败');
                }
            });

       });
          
      //指定Resolved状态和Rejected状态的回调函数
              imgdata.then(function(res){
                //这里得到resolve传过来的数据
                console.log(666);
            },function(err){
                //这里得到reject传过来的数据
                console.log(err);
            })
   

    //     var $res=imgdata.map(function(item){
    //         // 生成html结构
    //         return `
    //             <dl data-id=${item.id}>
    //                 <dt>
    //                     <a href="#">
    //                         <img src=${item.imgurl} />
    //                     </a>
    //                 </dt>
    //                 <dd class="pro_name">
    //                     <h3>
    //                         <a href="#">${item.details}</a>
    //                     </h3>
    //                 </dd>
    //                 <dd class="pro_price clearfix">
    //                     <strong>
    //                         <em>¥</em>
    //                         <span class="j_price">${item.price}</span>
    //                         <a href="#">马上买</a>
    //                     </strong>
    //                 </dd>
    //             </dl>
    //         `
    //     }).join('');
    //     console.log($res);
   


    })(jQuery)