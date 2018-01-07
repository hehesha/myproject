<?php

     include 'connect.php';

     // 获取前段数据
    $user = isset($_GET['user']) ? $_GET['user'] : null;
    $psd = isset($_GET['psd']) ? $_GET['psd'] : null;
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null;

    if($psd==null&&$user!=null){

         // sql语句
        $sql = "select name from userlist where name='$user'";

        // 查询
        $result = $conn->query($sql);


        // 得到数组、使用结果集
        $row = $result->fetch_row();
        //释放查询结果集
        $result->close();

        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else if($user!=null&&$psd!=null){
        // 写入数据库
        // md5加密
        $psd = md5($psd);
        $phone = md5($phone);

        $sql="insert into userlist (name,password,phone) values('$user','$psd','$phone')";
        // 获取查询结果
        $result = $conn->query($sql);

        if ($result) {
            echo "ok";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    //关闭数据库连接
    $conn->close();

?>