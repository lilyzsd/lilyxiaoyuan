<?php

include "conn.php";


//第2步：输出接口
$arr=array();
$result=$conn->query("select * from yougou");//从数据库中yougou表格中取数据
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);


