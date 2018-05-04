<?php
/* 05042018.php 
   Call => AJAX
   purpose: add two numbers, return a circle with a diameter of the 2 nums to be displayed.
   auth:A. I. Clay
   time: 0935 EST
*/

$var1 =$_REQUEST['val1'];
$var2 =$_REQUEST['val2'];
$var3 = ($var1 + $var2);

$x = (5 + $var3);
$y = (5 + $var3);
$sH = ($var3 + ($var3 + 20));
$sW = ($var3 + ($var3 + 20));
$cirCumf = (3.14*($val1^2));

$svgLine1 = "<svg xmlns=\"http:\\\\www.w3.org/2000/svg\" height=\"$sH\" width=\"$sW\">";
$svgLine2 = "<circle cx=\"$x\" cy=\"$y\" r=\"$var3\" stroke=\"black\" stroke-width=\"1\" fill=\"grey\" id=\"svgCir\" opacity=\"0.70\" onclick=svgName($var3); />";
$svgLine3 = "</svg>";


echo  "<br /><br />[ADD]: Answer=> &nbsp; $var3 <br /> METHOD[POST/ADD]<br /> Circle With Diameter:&nbsp; $var3<br />Circumerence:&nbsp; $cirCumf <br />" . $svgLine1 . $svgLine2 . $svgLine3;

?>
