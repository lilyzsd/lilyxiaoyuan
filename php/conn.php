<?php
// 第1步，mysql里面有数据，然后通过php连接mysql
header('content-type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','lily');//数据库名称

$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//连接数据库
//@:容错处理，错误信息不显示。
if($conn->connect_error){//如果存在错误，输出错误。
    die('数据库连接错误,错误信息：'.$conn->connect_error);
}

$conn->query('SET NAMES UTF8');


