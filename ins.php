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

	
	$fname = $_POST['FNAME'];
	$lname = $_POST['LNAME'];
	$depart = $_POST['DEPART'];



echo "<em>FNAME: </em>&nbsp;" . $fname . "<br />";
echo "<em>LNAME: </em>&nbsp;" . $lname . "<br />";
echo "<em>DEPART: </em>&nbsp;" . $depart . "<br />";
error_reporting(E_ALL);

$link = mysqli_connect("localhost","DEVTEST","test","testDEV",3306);
if (!$link)
{
	echo mysqli_connect_errno() . PHP_EOL;

}
/* REFERENCE => INSERT tbl_04302018 (FNAME,LNAME,emp_DEPART) values('testF1','testL1','testD1');*/

$insSTR = "INSERT tbl_04302018 (FNAME,LNAME,emp_DEPART) values('$fname','$lname','$depart');";

echo "==> Inserting....";

$res = mysqli_query($link,$insSTR,MYSQLI_STORE_RESULT);

if (!$res)
{
	$message = "invalid insert: " . mysql_error(). "\n";
	$message = "querySTR: \n" . $insSTR;
	die($message);
}

echo "Sucessfully added record." . PHP_EOL;

mysqli_free_result($res);

mysqli_close($link);


?>
