/* JS 
    Files=> 05042018.htm; 05042018.css 
	purpose: set up AJAX calls to pass variables and process response text.
	auth: A. I. Clay
	Time: 0935 EST
	
	!! CONSOLE FOR 'CLICK' OUPUT !! 
	
*/

function test()
{
	console.log("testing....");
}

function testPHP()
{
	var xhr = new XMLHttpRequest();
	var rText = "";
	xhr.onreadystatechange = function () 
	{
		if (this.readyState == 4 && this.status == 200)
		{
			rText = this.responseText;
		}
	
		var len = 0;
		len = rText.length;
		if (len > 0)
		{
			console.log(rText);
		}
		if (len < 0)
		{
			console.log("Waiting for server response....");
		}
		
		
	}
	xhr.open("POST","data/tst.php?val1=1&val2=2",true);
	xhr.send();
	
	
}

var elem1;
var elem2;

function init()
{
	elem1 = document.getElementById('num1Val');
	elem2 = document.getElementById('num2Val');
}

function AddThem()
{
	
	
	
	var xhr = new XMLHttpRequest();
	var rText = "";
	xhr.onreadystatechange = function () 
	{
		if (this.readyState == 4 && this.status == 200)
		{
			rText = this.responseText;
		}
	
		var len = 0;
		len = rText.length;
		if (len > 0)
		{
			var e = document.getElementById('ans');
			e.innerHTML = "";
			e.innerHTML = rText;
		}
		if (len < 0)
		{
			console.log("Waiting for server response....");
		}
		
		
	}
	xhr.open("POST","data/05042018.php?val1=" + elem1.value + "&val2=" + elem2.value,true);
	xhr.send();
	
}

function svgName(radius)
{
	console.log("Circles Diameter: => " + radius);
}		
		
