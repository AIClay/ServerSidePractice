// JavaScript [Vanilla]
// 
// purpose: external library for "04302018.htm"
// 
// Auth: Aaron I. Clay
// 0635 EST [04302018] 
// V 1.0.1 
// 
// 
var departs = ["Admin","Test_Depart1","Test_Depart2"]; // array of "Departments" for SELECT elem[dom]
var arRecs = [];    								   //array of faux records to sub.
var fnameELEM =null;
var lnameELEM =null;
var departELEM =null;


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


// ENTRY POINT [FORM LOAD] 
// 
function init()
{
	
	loadDeparts();
	fnameELEM = document.getElementById('fnameTXT');
	lnameELEM = document.getElementById('lnameTXT');
	departELEM = document.getElementById('departs');
	getRecords();
	
}

//XHR GetResults
			
			var rec = "";
			var recs = [];
			var split_recs = [];
			function getRecords()	
				{
					
					var xhr = new XMLHttpRequest();
					var lclAr = [];
					var lclOBJ = {};
					var rText = "";
					xhr.onreadystatechange = function ()
					{
						if (this.readyState ==4 && this.status == 200)
							{
							rText = this.responseText;
							lclOBJ = JSON.parse(rText);
							for (a = 0;a < lclOBJ.records.length;a++)
							{
								lclAr.push(lclOBJ.records[a]);
							}
						}						
						// display them after call=>
						DisplayRecords(lclAr);
						
						
					}
									
					
			xhr.open("GET","data/get.php",true);
			xhr.send();
			
			}


function DisplayRecords(lclAr)
{
			var elemSTR = "";
			var elemSTR_C = "<br /><br /></span><br />";
									
			for (c = 0; c < lclAr.length; c++)
				{
			elemSTR += "<span class='recLineID'>" + lclAr[c].ID + "</span>&nbsp;&nbsp;<span class='recLineFNAME'>" + lclAr[c].FNAME;
			elemSTR += "&nbsp;&nbsp;<span class='recLineLNAME'>" + lclAr[c].LNAME + "</span>&nbsp;&nbsp;<span class='recLineDEPART'>" + lclAr[c].DEPART + "</span><br />";				
				}
			
			var tgt = document.getElementById('display');
			tgt.innerHTML = "";
			tgt.innerHTML = (elemSTR + elemSTR_C);
	
}

function DisplayFail()
{
			var tgt = document.getElementById('display');
			tgt.innerHTML = "";
			tgt.innerHTML = "<span><strong>There was an error getting the records. [STATUS => FAIL].";
}
function DisplayWait()
{
			var tgt = document.getElementById('display');
			tgt.innerHTML = "";
			tgt.innerHTML = "Waiting for server response....";
}

//XHR Ins New Rec => Refresh Records [Display]
function InsRecord(FNAME,LNAME,DEPART)
{
	var qSTR = "data/ins.php?FNAME=" + FNAME + "&LNAME=" + LNAME + "&DEPART=" + DEPART;
	var xhr = new XMLHttpRequest();
	var rText = "";
	xhr.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			rText = this.responseText;
		}
		
		if (rText.length > 0)
		{
		 switch (rText)
			{
			case "SUCCESS":
				getRecords();
				break;
			case "FAIL":
				DisplayFail();				
				break;
			default:
				getRecords();
				break;
			}
		}
		if (rText.length <= 0)
		{
			DisplayWait();
		}
		
	}
	
	xhr.open("POST",qSTR,true);
	xhr.send(); 
	
}
