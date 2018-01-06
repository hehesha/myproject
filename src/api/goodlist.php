<?php
        include 'connect.php';

        // 在后端获取前端的数据
    $area = isset($_GET['area']) ? $_GET['area'] : null;

    // sql语句
    $sql = "select * from goodlist where type=$area";

    // 查询
    $result = $conn->query($sql);

    // 得到数组、使用结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);
    // $row = $result->fetch_assoc();
    // $row = $result->fetch_row();

    //释放查询结果集
    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    //关闭数据库连接
    $conn->close();

?>
