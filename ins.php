<?php 

	/* INS.php => 04302018.htm / 04302018.js / 04302018.css 
    
	PURPOSE:
	inserts records directly to database [NO VALIDATION! => Brevity ] 
	
	VERSION:
	PHP 7.0.27-0+deb9u1 (cli) (built: Jan  5 2018 13:51:52) ( NTS )
	Copyright (c) 1997-2017 The PHP Group
	Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.0.27-0+deb9u1, Copyright (c) 1999-2017, by Zend Technologies

	*/ 

	
	$fname = $_REQUEST['FNAME'];
	$lname = $_REQUEST['LNAME'];
	$depart = $_REQUEST['DEPART'];

 error_reporting(E_ALL);

$link = mysqli_connect("localhost","DEVTEST","test","testDEV",3306);
if (!$link)
{
	echo mysqli_connect_errno() . PHP_EOL;

}

// REFERENCE => INSERT tbl_04302018 (FNAME,LNAME,emp_DEPART) values('testF1','testL1','testD1');

$insSTR = "INSERT tbl_04302018 (FNAME,LNAME,emp_DEPART) values('$fname','$lname','$depart');";

$message = "";

$res = mysqli_query($link,$insSTR,MYSQLI_STORE_RESULT);

if (!$res)
{
	$message = "FAIL";
	echo $message;
	die($message);
}

$message = "SUCCESS";

echo $message;

mysqli_free_result($res);

mysqli_close($link); 

?>

