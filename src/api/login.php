<?php
    
     include 'connect.php';

     // 获取前段数据
    $user = isset($_GET['user']) ? $_GET['user'] : null;
    $psd = isset($_GET['psd']) ? $_GET['psd'] : null;

    // 密码md5加密
    $psd = md5($psd);

    $sql = "select * from userlist where name='$user'";

    // 获取查询结果
    $result = $conn->query($sql);
    if($result->num_rows>0){
        
        // 匹配密码是否正确
        $sql2 = "select count(*) from userlist where name='$user' and password='$psd'";
        $result2 = $conn->query($sql2);  
        $row = $result2->fetch_row();

        if($row[0]){
    
            echo 'ok';
        }else{
            echo 'userok';
        }

    }else{
        echo 'userfail';
    }


?>