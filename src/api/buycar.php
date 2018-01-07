<?php

        include 'connect.php';
        $user = isset($_GET['user']) ? $_GET['user'] :0;


        $sql="select * from carlist where userid='$user'";

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