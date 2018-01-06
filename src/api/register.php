<?php

     include 'connect.php';

     // 获取前段数据
    $user = isset($_GET['user']) ? $_GET['user'] : null;

     // sql语句
    $sql = "select name from userlist where name=$user";

    // 查询
    $result = $conn->query($sql);


    // 得到数组、使用结果集
    $row = $result->fetch_row();
    //释放查询结果集
    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    //关闭数据库连接
    $conn->close();

?>