<?php
	
	/* INS.php => 04302018.htm / 04302018.js / 04302018.css 
	
		PURPOSE: simple class to 'GET' stored records on database.
		
		VERSION:
		PHP 7.0.27-0+deb9u1 (cli) (built: Jan  5 2018 13:51:52) ( NTS )
		Copyright (c) 1997-2017 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    	with Zend OPcache v7.0.27-0+deb9u1, Copyright (c) 1999-2017, by Zend Technologies
		
	*/

	
	error_reporting(E_ALL);
	
	$strQUERY = "SELECT * FROM tbl_04302018 ORDER BY ID ASC;";

	$link = mysqli_connect("localhost","DEVTEST","test","testDEV");
	
	$res = $link->query($strQUERY);

	$opener = "{\"records\":[";
	$close = "]}";
	$middle = "";
	if ($res->num_rows > 0)
	{
		$cnt = $res->num_rows;
		$rwCNT = 0;
		
		while ($row= $res->fetch_assoc())
		{
		
		$rwCNT +=1;
		$id = $row["ID"];
		$fname = $row["FNAME"];
		$lname = $row["LNAME"];
		$depart = $row["emp_DEPART"];
		
		
		if ($rwCNT < $cnt)
		{
		$middle = $middle . "{\"ID\":\"$id\",\"FNAME\":\"$fname\",\"LNAME\":\"$lname\",\"DEPART\":\"$depart\"},";
		}
		if ($rwCNT >= $cnt)
		{
		$middle = $middle .  "{\"ID\":\"$id\",\"FNAME\":\"$fname\",\"LNAME\":\"$lname\",\"DEPART\":\"$depart\"}";
		}
	}
			
	};
	
	$conSTR = $opener . $middle . $close;
	echo $conSTR;

	$arRES = mysqli_fetch_all($res,MYSQLI_BOTH);

	// DEBUG
	//echo $arRES;
	// END DEBUG
	
	
?>


