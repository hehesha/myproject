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

// 全球精选-------------------------------------------------------------------
        // 写入全球精选
        $global=$('.globalSelect');
        $content_list=$('.content_list');
       var imgdata=new Promise(function(resolve,reject){
            // 请求数据
            $.ajax({
                url:"../api/goodlist.php",
                data:{
                    area:"'gselect'"
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
                // console.log(res);
                var data=JSON.parse(res);
                var $res=data.map(function(item){
                // 生成html结构
                return `
                    <dl data-id=${item.id}>
                        <dt>
                            <a target="_blank">
                                <img src=${item.imgurl} />
                            </a>
                        </dt>
                        <dd class="pro_name">
                            <h3>
                                <a target="_blank">${item.details}</a>
                            </h3>
                        </dd>
                        <dd class="pro_price clearfix">
                            <strong>
                                <em>¥</em>
                                <span class="j_price">${item.price}</span>
                                <a target="_blank">马上买</a>
                            </strong>
                        </dd>
                    </dl>
                `
            }).join('');
                
                $content_list.html($res);
        // console.log($res);

            },function(err){
                //这里得到reject传过来的数据
                console.log(err);
            });
        // 页面切换
        var $g_left=$('.g_l');
        var $g_right=$('.g_r');
        var $g_page=$('.g_page');
        var $slide_con=$('.slide_con');
        console.log($content_list);
        $slide_con.on('mouseover','a',function(){
            this.style.backgroundColor='#bbb';
            this.style.color="#fff";
        }).on('mouseout','a',function(){
            this.style.backgroundColor="#fff";
            this.style.color="#333";
        }).on('click','a',function(){
            var count=$g_page.html();
            if(this.className=='g_l'){
                if(count==2){
                    $content_list.animate({marginLeft:0});
                    $g_page.html(1);
                }
            }else{
                if(count==1){
                    $content_list.animate({marginLeft:-1228});
                    $g_page.html(2);
                }
            }
        });

   // 点击马上买跳转到详情页
   $content_list.on('click','a',function(){
        // 获取当前元素的id
        var $id=this.closest('dl').getAttribute('data-id');
        $id = encodeURI($id);
        location.href='details.html?id='+$id;

   });

 // 全球精选----------------------------------------------------------------      
   


    })(jQuery)