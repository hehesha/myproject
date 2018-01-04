(function($){
    $('.banner').lxCarousel({
                imgs:['images/index/banner1.jpg','images/index/banner2.jpg','images/index/banner3.jpg','images/index/banner4.jpg','images/index/banner5.jpg','images/index/banner6.jpg','images/index/banner7.jpg'],
                buttons:true,
                width:1023,
                height:400
                // type:"fade"
            });
    // 加载5折区数据
    var sale_content=document.getElementById('sale_content');
    console.log(sale_content);
    var status = [200,304];
    var imgdata;
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
            if(status.includes(xhr.status)){
                imgdata=JSON.parse(xhr.responseText);
                console.log(imgdata);
                // 将数据写入页面
               
                
                // 遍历数组
                sale_content.innerHTML=imgdata.map(function(item){
                    return `
                    <a href="#" title=${item.alt}>
                    <img src=${item.imgsrc} alt=${item.alt}>
                    </a>
                    `
                }).join('');
            }
        }
    xhr.open('get',"api/data/sale.json");
    xhr.send();
    // 闪购区
    var $randcontent=$('#randcontent');
    var $randlist=$('#randlist');
    var tagclass;
    

    $randlist.on('mouseover','li',function(){
            tagclass=this.className;
            console.log(tagclass);
             res=gooddata.map(function(item){
                if(item.type==tagclass){
                    return`
                    <li>
                        <a href="#" title=${item.name}>
                            <img src=${item.imgurl} alt=${item.name}>
                            <p class="pro_name" title=${item.name}>${item.name}</p>
                            <span class="discount_info">${item.count}</span>
                        </a>
                    </li>
                    `
                }
            })
            console.log(res.join(''));
            $randcontent.html(res.join(''));
        });
    var groupamount=document.getElementsByClassName('group_amount');
    var gooddata;
    var xhr_good=new XMLHttpRequest();
    xhr_good.onload=function(){
        if(status.includes(xhr_good.status)){
            gooddata=JSON.parse(xhr_good.responseText);
            console.log('gooddata',gooddata);

            }
    }
    xhr_good.open('get',"api/data/good.json");
    xhr_good.send();
    
})(jQuery)