<?php


    include 'connect.php';
     // 获取前段数据
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    // sql语句
    $sql = "select * from goodlist where id=$id";

    // 查询
    $result = $conn->query($sql);

    // 得到数组、使用结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);
    //释放查询结果集
    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    //关闭数据库连接
    $conn->close();
?>