(function($){
           $('#log_header').load('register.html header');
               
           
            $('#log_footer').load('register.html footer');

            // 更多合作网站
            $more_a=$('.more_a');
            $more_w=$('.more_w');
            $more_a.on('click',function(){
                if($more_w.css('display')=='block'){
                    $more_w.fadeOut();
                }else{
                    $more_w.fadeIn();
                    $more_w.css('display','block');
                }
            });

            // 登录验证
            $user=$('#user');
            $psd=$('#psd');
            $logbtn=$('#logbtn');
            $logbtn.on('click',function(){
                var _user=user.value;
                var _psd=psd.value;
                console.log(_user,_psd);
                $.ajax({
                    url:"../api/login.php",
                    data:{
                        user:_user,
                        psd:_psd
                    },
                    success:function(data){
                        console.log(data);
                        if(data=='userfail'){
                            alert('用户名不存在');
                        }else if(data=='userok'){
                            alert('密码错误');
                        }else{
                            alert('恭喜你，登录成功');
                            // 跳转到首页
                            location.href='../index.html';
                        }
                    }
                });
            });

})(jQuery);