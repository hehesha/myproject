(function($){
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
        }
    });
})(jQuery)