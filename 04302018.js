// JavaScript [Vanilla]
// 
// purpose: external library for "04302018.htm"
// 
// Auth: Aaron I. Clay
// 0635 EST [04302018] 
// V 1.0.0 
// 
// 
var departs = ["Admin","Test_Depart1","Test_Depart2"]; // array of "Departments" for SELECT elem[dom]
var arRecs = [];                                       // array of faux records to sub.


// DEBUG
function hitTest()
{
	console.log("External file loaded fine...");
}
// END DEBUG

// UTILITIY METHODS:
function loadDeparts()
{
	var retSTR = "";
	for (i =0;i<departs.length;i++)
	{
		retSTR += "<option id=\"" + departs[i] + "\" name=\"" + departs[i] + "\" value=\"" + departs[i] + "\">" + departs[i] + "</otption>\n";
	}
	var tgt_elem = document.getElementById("departs");
	tgt_elem.innerHTML = "";
	tgt_elem.innerHTML = retSTR;
}
function genTenFaux()
{
		for (i =0;i<10;i++)
		{	
			var local = {};
			local = new CreateRec();
			arRecs.push(local);
			local = null;
		};
		
}

function CreateRec()
{
	var fnameSTR = "FNAME_" + Math.random();
	this.FNAME = fnameSTR;
	var lnameSTR = "LNAME_" + Math.random(); 
	this.LNAME = lnameSTR;
	var rndD = Math.floor(Math.random() * 3);
	var new_dep = departs[rndD];
	this.DEPART = new_dep;
	
}
	


// ENTRY POINT [FORM LOAD] 
// 
function init()
{
	loadDeparts();

}
//

//XHR GetResults

function getRecords()	
				{
					var xhr = new XMLHttpRequest();
					var tgt = {};	
					xhr.onreadystatechange = function ()
					{
						if (this.readyState ==4 && this.status == 200)
							{
							var rText = this.responseText;
							tgt = JSON.parse(rText);
							}
						console.log(tgt.ID + " " + tgt.FNAME);
					};
					
			xhr.open("GET","get.php",true);
			xhr.send();
			}
