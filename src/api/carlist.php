<?php

    include 'connect.php';

     // 获取前段数据
    $user = isset($_GET['user']) ? $_GET['user'] :0;
    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;
    $number = isset($_GET['number']) ? $_GET['number'] : null;
    $color = isset($_GET['color']) ? $_GET['color'] : null;
    $size = isset($_GET['size']) ? $_GET['size'] : null;
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null;
    $details = isset($_GET['details']) ? $_GET['details'] : null;

    // 先判断有无相同商品
    $sql="select goodsid , number from carlist where userid='$user' and goodsid='$goodsid'";

    $result = $conn->query($sql);
    $row = $result->fetch_row();
    // print_r($row);
    if($row[0]){
        // 如果存在，对应商品数量增加
        $num=$row[1]+$number;
        $sql="update carlist set number=$num where userid='$user'";
        // 获取查询结果
        $result2 = $conn->query($sql);

        if ($result2) {
            echo "ok";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }else{

        $sql="insert into carlist (userid,goodsid,price,number,color,size,imgurl,details) values('$user','$goodsid','$price','$number','$color','$size','$imgurl','$details')";
        // 获取查询结果
        $result2 = $conn->query($sql);

        if ($result2) {
            echo "ok";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }


        //关闭数据库连接
    $conn->close();




?>