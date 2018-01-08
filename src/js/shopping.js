(function($){
    var gNum=0;
    var gtotal=0;
    // 获取数据
    $.ajax({
        url:'../api/buycar.php',
        success:function(data){
            goodsdata=JSON.parse(data);
            console.log(goodsdata);
            // 将数据写入页面
            var res=goodsdata.map(function(item){
                var sum=item.price* item.number;
                return`
                <li class="clearfix">
                        <input type="checkbox" class="checkbox"/>
                        <div class="img">
                        <img src=${item.imgurl}>
                        </div>
                        <div class="details">
                                ${item.details}
                        </div>
                        <p class="price">
                            ${item.price}
                        </p>
                        <div class="number">
                            <input type="button" value="-" class="plus"/>
                            <input type="text" class="num" value=${item.number}>
                            <input type="button" value="+" class="add"/>
                        </div>
                        <span class="sum">${sum}</span>
                        <span class="delete">&times;</span>
                    </li>
                `

            }).join('');
            console.log(res);
            $('.goodul').html(res);
            for(var i=0;i<goodsdata.length;i++){
                gNum+=goodsdata[i].number*1;
            }
            $('.total_num').html(gNum);
        }
    });


    // 数量的增加或减少
    $('.goodul').on('click','.number input',function(){
        // console.log(this);
        if(this.className=='plus'){
            if($(this).next().val()>1){
                $(this).next().val($(this).next().val()*1-1);
                gNum--;
            }
        }else if(this.className=='add'){
            $(this).prev().val($(this).prev().val()*1+1);
            gNum++;
        }
        $num=$(this).parent().find('.num').val()*1*$(this).parent().prev().html();
        $(this).parent().next().html($num);
        console.log(gNum);
        console.log($('.total_num'));
        $('.total_num').html(gNum);
    });

    // 已选商品
    console.log($('.goodul .checkbox'));

    // 删除
    console.log($('.goodul .delete'));
    
        
   

})(jQuery)