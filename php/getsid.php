<?php
// 第6步getsid.php根据传过来的sid，从数据库取相应的数据返给前端
include "conn.php";
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("select * from taobaopic where sid=$sid");
    echo json_encode($result->fetch_assoc());
}else{
    exit('非法操作');//单独打开此页面，是没有sid，就输非法操作
}

