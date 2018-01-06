(function($){
    // 获取元素
    $user=$('#user');
    $phone=$('#phone');
    $yzcode=$('#yzcode');
    $scode=$('#scode');
    $ccode=$('#ccode');
    $submit=$('#submit');
    $form=$('form');

    $form.on('click','input',function(){
        // this.nextElementSibling
        // this.next().animate({top:-100});
        var span=$(this).next().animate({left:-100});
        $(this).next().next().fadeIn();
        // console.log(span);
    });
    var userv;
    var phonev;
    var psd1;
    var psd2;
    // 验证用户名
    $user.on('blur',function(){
        var val=user.value;
        // 4-20位字符，可由数字字母下划线组成
        var reg=/^[\w]{4,20}$/
        if(!reg.test(val)){
           $(this).next().next().html("请输入正确的用户名，用户名应为4-20位字符");
           userv=0;
        }
            // 请求数据判断用户名是否被占用
            $.ajax({

                url:"../api/register.php",
                data:{
                    user:"'"+val+"'",
                },
                success:function(data){
                    if(JSON.parse(data)==null){
                       $user.next().next().fadeOut();
                       userv=1;
                    }
                }
            });
     }); 

     // 验证手机
     $phone.on('blur',function(){
        var val=phone.value;
        var reg=/^1[34578]\d{9}$/;
        if(!reg.test(val)){
            $(this).next().next().html("格式错误，请输入正确的手机号码");
            phonev=0;
        }
        else{

            $(this).next().next().fadeOut();
            phonev=1;
        }
     });
     // 设置密码
    $scode.on('blur',function(){
        var val=scode.value;
        // 6-20个大小写英文字母、符号或数字的组合
        var reg=/^\w{6,20}$/;
        if(!reg.test(val)){
            $(this).next().next().html("密码为6~20位字符");
            psd1=0;
        }else{
            $(this).next().next().fadeOut();
             psd1=1;
        }
    });  

    // 确认密码
    $ccode.on('blur',function(){
        if(scode.value!=ccode.value){
            $(this).next().next().html("密码不一致");
            psd2=0;
        }else{
            $(this).next().next().fadeOut();
             psd2=1;
        }
    });

    $submit.on('click',function(){
        if(userv&&phonev&&psd1&&psd2){
            console.log(999);
        }
    });
        
        

})(jQuery)