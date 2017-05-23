function ValidateEmail(mail)   
{  
	
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))  
     {  
        
     }
     else
     {  
        mail.focus();
        alert("You have entered an invalid email address!");
        mail.value='';  
      }  
}  

function checkFutureDate(entrydate01)
{
	var dt = parseInt(entrydate01.value.substring(0, 2), 10);
	var mn = parseInt(entrydate01.value.substring(3, 5), 10);
	var yr = parseInt(entrydate01.value.substring(6, 10), 10);
	var myDate = new Date(yr, mn-1, dt);
	var today = new Date();
	{
    	if (myDate>today)
    	{
    		alert('You cannot enter a date in the future!');
    		entrydate01.value='';
     	}
	}
}

//http://en.wikipedia.org/wiki/Telephone_numbers_in_Bangladesh
/*
    Warid : 016
	Banglalink : 019
	Citycell : 011
	Grameenphone : 017
	Robi : 018
	TeleTalk : 015
*/

function validateMobileNumber(mobileNumber) {
   var mob = /^(016|019|011|017|018|015)[0-9]{8}$/;
   
   if (mob.test(mobileNumber) == false) {
       return false;
   }
   return true;
 }
//Declaring valid date character, minimum year and maximum year
var dtCh= "-";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isValidDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		//alert("The date format should be : dd-MM-yyyy")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		//alert("Please enter a valid month")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		//alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		//alert("Please enter a valid date")
		return false
	}
return true
}



function getNomineeContactPhoneCount(fieldId,phoneNumber,mstFieldId)
{
var ajax_load="<img src='/wewbm/resources/images/ajax-loader.gif' border='0' /> " ;
if(phoneNumber=="")
	 return;
var loadUrl="getContactNumberCount.action";	

$("#"+mstFieldId)  
			.html(ajax_load)  
			.load(loadUrl, {contactNumber: phoneNumber},function(responseText){  
			   
				$("#"+mstFieldId).html("");
				//alert(parseInt(responseText,10));
				if(parseInt(responseText,10)>=3)
				{
					document.getElementById(fieldId).value="";
					alert("This Number has already been used for 3 times.");
				}
	 
			});
}




// not done
function passportValidation1(passportNo){
	alert("Entered");
	var passportValidation = /^[a-zA-Z]{2} [0-9]{7}$/;
	
	if (passportValidation.test(passportNo.value)==true)  
    {  
		alert("Matched");
		return true;
    }
    else
    {  
       //mail.focus();
       alert("You have entered an invalid Passport Format!");
       return false;
       //mail.value='';  
     }
	
}


function passportValidation(passportNo){
    var url = 'PassportValidation.action';
    var validity='';
    
    $.ajax({
        type    : "POST",
        url     : url,
        dataType: 'text',
        async   : false,
        data    : {

        	passportNo : passportNo,
        }
    }).done(function (res) {    	   
    	
    	//alert("done"+res);
    	// valid and not valid icon set
    	if(res=="Not valid"){
    		var alertImg="<div style='float:left'><img src='/wewbm/resources/images/redSmall.png' height='20' width='20' /></div>";
    	}
    	else{
    		var alertImg="<div style='float:left'><img src='/wewbm/resources/images/yes.png' height='20' width='20' /></div>";
    	}
    	//var alertImg="<div style='float:left'><img src='/wewbm/resources/images/yes.png' height='20' width='20' /></div>";
		var preFix="<div style='float:left;margin-top:2px;margin-left:5px;'>";
		alertImg=alertImg+preFix;
		var postFix="<div>";
        $('#msg_passportNumber').html(alertImg+res+postFix).show();
        
    	validity=res;
    	
            })
            .always(function () {
                //$('#sw-val-step-3').unmask();
            })
            .fail(function (data) {
                if (data.responseCode)
                    alert(data.responseCode);
                
               
            });
    

    return validity;
}