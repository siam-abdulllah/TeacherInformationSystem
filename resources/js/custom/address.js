var destiField="";
var destiField2="";
var pos;

function fetchJSONData_Dist(divId,dest){
        var url = 'JSONfindDistrict.action';
        destiField=dest;
        
        $.ajax({
            type    : "POST",
            url     : url,
            dataType: 'text',
            async   : false,
            data    : {

            	divisionId : divId,
            }
        }).done(function (res) {    	   
        	fetchDistSuccess(res);
                })
                .always(function () {
                    //$('#sw-val-step-3').unmask();
                })
                .fail(function (data) {
                    if (data.responseCode)
                        alert(data.responseCode);
                });
        
/*     	var myAjax = new Ajax.Request(
                    url, 
                    {
                            method: 'post',
                            parameters: {'divisionId' : divId},
                            onComplete: fetchDistSuccess,
                            cache: true
                    });
         */
   }


   function fetchDistSuccess(result){
       
     	//var result = originalRequest.responseText.evalJSON();
     	var json = JSON.parse(result);
     	var options="";
     	var tdId=""
    	if(destiField=="PERMANENT_DIST")
     	  {
     	   options="<select tabindex='502' name=\"pAddress.districtId\" id=\"PERMANENT_DIST\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UpazillaOrThana(this.value,'PERMANENT_UPAZILLA_OR_THANA','PERMANENT_POST_OFFICE')\">";
     	   tdId="PERMANENT_DIST_TD";
     	   document.getElementById(tdId).innerHTML="";     	   
     	 
     	   
     	  $("#PERMANENT_UPAZILLA_OR_THANA").empty();
     	  $("#PERMANENT_UNION_OR_WARD").empty();
     	  $("#PERMANENT_MAUZA_OR_MOHOLLA").empty();
     	  $("#PERMANENT_VILLAGE").empty();
     	  $("#PERMANENT_POST_OFFICE").empty();
     	  //$1('PERMANENT_POST_CODE').value="";     	  
          
     	  }
     	 if(destiField=="MAILING_DIST")
     	 {
     	  options="<select tabindex='552' name=\"pAddress.mdistrictId\" id=\"MAILING_DIST\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UpazillaOrThana(this.value,'MAILING_UPAZILLA_OR_THANA','MAILING_POST_OFFICE')\">";
     	  tdId="MAILING_DIST_TD";
     	  document.getElementById(tdId).innerHTML="";
     	  
     	  $("#MAILING_UPAZILLA_OR_THANA").empty();
    	  $("#MAILING_UNION_OR_WARD").empty();
    	  $("#MAILING_MAUZA_OR_MOHOLLA").empty();
    	  $("#MAILING_VILLAGE").empty();
    	  $("#MAILING_POST_OFFICE").empty();    	  
    	 // $1('MAILING_POST_CODE').value="";
     	 }
     	else if(destiField=="VOTERAREA_DIST")
    	 {
    	  options="<select tabindex='37' name=\"voterArea.districtId\" id=\"VOTERAREA_DIST\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UpazillaOrThana(this.value,'VOTERAREA_UPAZILLA_OR_THANA','VOTERAREA_POST_OFFICE')\">";
    	  tdId="VOTERAREA_DIST_TD";
    	  document.getElementById(tdId).innerHTML="";
    	  
    	  $("#VOTERAREA_UPAZILLA_OR_THANA").empty();
    	  $("#VOTERAREA_UNION_OR_WARD").empty();
    	  $("#VOTERAREA_MAUZA_OR_MOHOLLA").empty();
    	  $("#VOTERAREA_VILLAGE").empty();
    	  $("#VOTERAREA_POST_OFFICE").empty();    	  
    	 // $1('VOTERAREA_POST_CODE').value="";
    	 }
     	 
     	else if(destiField=="CANDIDATEAREA_DIST")
   	 {
   	  options="<select tabindex='37' name=\"candidateArea.districtId\" id=\"CANDIDATEAREA_DIST\" class=\"addressSelectBox\" onchange=\"fetchJSONData_Ason(this.value,'CANDIDATE_ASON')\">";
   	  tdId="CANDIDATEAREA_DIST_TD";
   	  document.getElementById(tdId).innerHTML="";
   	  
   	//  $("#VOTERAREA_UPAZILLA_OR_THANA").empty();
   	      	  
   	 // $1('VOTERAREA_POST_CODE').value="";
   	 }
     	else if(destiField=="PASSWORD_DIST")
	   	  {
	   	   options="<select tabindex='31' name=\"addressDTO.pDistrict\" id=\"PASSWORD_DIST\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UpazillaOrThana(this.value,'PASSWORD_UPAZILLA_OR_THANA')\">";
	   	   tdId="PASSWORD_DIST_TD";
	   	   document.getElementById(tdId).innerHTML="";
	   	  }
     	 
     	 
     	 
     	 
 		
 		options+="<option value=''>--Select District--</option>";
 		for (var i=0;i<json.districtList.length;i=i+2)
 		{
        	options+="<option value='"+json.districtList[i+1]+"'>"+json.districtList[i]+"</option>"; 
        }
        options+="</select>";

        document.getElementById(tdId).innerHTML=options;

       // setDistrictSelectBoxData(result);
        
 	}
   
/*   function setDistrictSelectBoxData(data){
		//snapshot = Defiant.getSnapshot(data);
		
		var districts = JSON.search(data, '//district');
		
		alert(districts);
		for (var i=0; i<districts.length; i++) {
		     $('#PERMANENT_DIST')
		         .append($("<option></option>")
		         .attr("value",districts[i].dist_id)
		         .text(districts[i].dist_name));
		}
	}*/
   function fetchJSONData_UpazillaOrThana(districtId,dest,dest2){
	   var divistionId;
	   if(dest=="PERMANENT_UPAZILLA_OR_THANA")
		   var divisionId=document.getElementById("PERMANENT_DIV").value;
	   else if(dest=="MAILING_UPAZILLA_OR_THANA")
		   var divisionId=document.getElementById("MAILING_DIV").value;
	   else if(dest=="VOTERAREA_UPAZILLA_OR_THANA")
		   var divisionId=document.getElementById("VOTERAREA_DIV").value;
	   else if(dest=="BIRTH_UPAZILLA_OR_THANA")
		   var divisionId="";
	   //alert('adnan');
       var url = 'JSONfindUpazillaOrThana.action';
       destiField=dest;
       destiField2=dest2;
       
       
       $.ajax({
           type    : "POST",
           url     : url,
           dataType: 'text',
           async   : false,
           data    : {

        	   divisionId : divisionId, districtId : districtId
           }
       }).done(function (res) {    	   
    	  fetchUpazillaOrThanaSuccess(res);
               })
               .always(function () {
                   //$('#sw-val-step-3').unmask();
               })
               .fail(function (data) {
                   if (data.responseCode)
                       alert(data.responseCode);
               });
      
  }
  function fetchUpazillaOrThanaSuccess(result){
      
    	//var result = originalRequest.responseText.evalJSON();
	  var json = JSON.parse(result);
    	var options="";
    	var tdId="";
    //	alert(destiField);
    //	alert(result);
    	if(destiField=="PERMANENT_UPAZILLA_OR_THANA")
    	  {
    	   options="<select tabindex='503' name=\"pAddress.upazillaOrThanaId\" id=\"PERMANENT_UPAZILLA_OR_THANA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UnionOrWard(this.value,'PERMANENT_UNION_OR_WARD')\">";
    	   tdId="PERMANENT_UPAZILLA_OR_THANA_TD";
    	   document.getElementById(tdId).innerHTML="";
    	   
    	  $("#PERMANENT_UNION_OR_WARD").empty();
      	  $("#PERMANENT_MAUZA_OR_MOHOLLA").empty();
      	  $("#PERMANENT_VILLAGE").empty();
      	  $1('PERMANENT_POST_CODE').value="";
      	  
    	  }
    	else if(destiField=="MAILING_UPAZILLA_OR_THANA")
    	 {
    	  options="<select tabindex='553' name=\"pAddress.mupazillaOrThanaId\" id=\"MAILING_UPAZILLA_OR_THANA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UnionOrWard(this.value,'MAILING_UNION_OR_WARD')\">";
    	  tdId="MAILING_UPAZILLA_OR_THANA_TD";
    	  document.getElementById(tdId).innerHTML="";
    	  
    	  $("#MAILING_UNION_OR_WARD").empty();
    	  $("#MAILING_MAUZA_OR_MOHOLLA").empty();
    	  $("#MAILING_VILLAGE").empty();
    	  $1('MAILING_POST_CODE').value="";
    	 
    	 }
    	else if(destiField=="VOTERAREA_UPAZILLA_OR_THANA")
	   	 {
	   	  options="<select tabindex='38' name=\"voterArea.upazillaOrThanaId\" id=\"VOTERAREA_UPAZILLA_OR_THANA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UnionOrWard(this.value,'VOTERAREA_UNION_OR_WARD')\">";
	   	  tdId="VOTERAREA_UPAZILLA_OR_THANA_TD";
	   	  document.getElementById(tdId).innerHTML="";
	   	  
	  $("#VOTERAREA_UNION_OR_WARD").empty();
  	  $("#VOTERAREA_MAUZA_OR_MOHOLLA").empty();
  	  $("#VOTERAREA_VILLAGE").empty();
  	  $1('VOTERAREA_POST_CODE').value="";
	   	 }
    	else if(destiField=="BIRTH_UPAZILLA_OR_THANA")
	   	 {
	   	  options="<select tabindex='7' name=\"personalInfo.empBirthUpazilaOrThana\" id=\"BIRTH_UPAZILLA_OR_THANA\" class=\"addressSelectBox\" style='width:200px;'>";
	   	  tdId="BIRTH_UPAZILLA_OR_THANA_TD";
	   	  document.getElementById(tdId).innerHTML="";
	   	 }
    	else if(destiField=="PASSWORD_UPAZILLA_OR_THANA")
        {
        	options="<select tabindex='32' name=\"addressDTO.pThana\" id=\"PASSWORD_THANA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_UnionOrWard(this.value,'PASSWORD_UNION_OR_WARD')\" >";
        	tdId="PASSWORD_THANA_TD";
        	document.getElementById(tdId).innerHTML="";
        }
			
		options+="<option value=''>--Select Upazilla/Thana--</option>";
		for (var i=0;i<json.upazillaOrThanaList.length;i=i+2)
		{
       	options+="<option value='"+json.upazillaOrThanaList[i+1]+"'>"+json.upazillaOrThanaList[i]+"</option>"; 
       }
       options+="</select>";

       document.getElementById(tdId).innerHTML=options;
       
       
       
       //////////////////////////////////////////
       //var result2 = originalRequest.responseText.evalJSON();
       var json2 = JSON.parse(result);
      	var options2="";
      	var tdId2=""; 
      	
      	if(destiField2=="PERMANENT_POST_OFFICE")
  	      {
  	       options2="<select tabindex='503' name=\"pAddress.postOffice\" id=\"PERMANENT_POST_OFFICE\" class=\"addressSelectBox\" onchange=\"setPostCode(this.value,'PERMANENT_POST_OFFICE')\" >";
  	       tdId2="PERMANENT_POST_OFFICE_TD";
  	       document.getElementById(tdId2).innerHTML="";
  	     }
      	else if(destiField2=="MAILING_POST_OFFICE")
  	      {
  	       options2="<select tabindex='503' name=\"pAddress.mpostOffice\" id=\"MAILING_POST_OFFICE\" class=\"addressSelectBox\" onchange=\"setPostCode(this.value,'MAILING_POST_OFFICE')\" >";
  	       tdId2="MAILING_POST_OFFICE_TD";
  	       document.getElementById(tdId2).innerHTML="";
  	     }
      	else if(destiField2=="VOTERAREA_POST_OFFICE")
	      {
	       options2="<select tabindex='503' name=\"voterArea.postOffice\" id=\"VOTERAREA_POST_OFFICE\" class=\"addressSelectBox\" onchange=\"setPostCode(this.value,'VOTERAREA_POST_OFFICE')\" >";
	       tdId2="VOTERAREA_POST_OFFICE_TD";
	       document.getElementById(tdId2).innerHTML="";
	     }
   			
   		options2+="<option value=''>--Select Post Office--</option>";
   		for (var i=0;i<json2.postOfficeList.length;i=i+2)
   		{
         	options2+="<option value='"+json2.postOfficeList[i+1]+"'>"+json2.postOfficeList[i]+"</option>"; 
         }
         options2+="</select>";

         document.getElementById(tdId2).innerHTML=options2;

	}
  
  function setPostCode(postcode, poid){
	  if(poid=="PERMANENT_POST_OFFICE"){
		  document.getElementById("PERMANENT_POST_CODE").value=postcode; 
	  }
	  else if(poid=="MAILING_POST_OFFICE"){
		  document.getElementById("MAILING_POST_CODE").value=postcode;  
	  }
	  else if(poid=="VOTERAREA_POST_OFFICE"){
		  document.getElementById("VOTERAREA_POST_CODE").value=postcode;  
	  }
	  
	  
  }
  
  function fetchJSONData_UnionOrWard(upazillaOrThanaId,dest){
	   var divistionId;
	   var districtId;
	   
	   if(dest=="PERMANENT_UNION_OR_WARD"){
		   divisionId=document.getElementById("PERMANENT_DIV").value;
		   districtId=document.getElementById("PERMANENT_DIST").value;
	   }
	   else if(dest=="MAILING_UNION_OR_WARD"){
		   divisionId=document.getElementById("MAILING_DIV").value;
		   districtId=document.getElementById("MAILING_DIST").value;
	   }
	   else if(dest=="VOTERAREA_UNION_OR_WARD"){
		   divisionId=document.getElementById("VOTERAREA_DIV").value;
		   districtId=document.getElementById("VOTERAREA_DIST").value;
	   }
	   else if(dest=="PASSWORD_UNION_OR_WARD"){
		   divisionId=0;
		   districtId=0;
	   }
	   
    var url = 'JSONfindUnionOrWard.action';
    destiField=dest;
    
    $.ajax({
        type    : "POST",
        url     : url,
        dataType: 'text',
        async   : false,
        data    : {

     	   divisionId : divisionId, districtId : districtId,upazillaOrThanaId:upazillaOrThanaId
        }
    }).done(function (res) {    	   
    	fetchUnionOrWardSuccess(res);
            })
            .always(function () {
                //$('#sw-val-step-3').unmask();
            })
            .fail(function (data) {
                if (data.responseCode)
                    alert(data.responseCode);
            });
      
/*   	var myAjax = new Ajax.Request(
                  url, 
                  {
                          method: 'post',
                          parameters: {'divisionId' : divisionId, 'districtId' : districtId, 'upazillaOrThanaId' : upazillaOrThanaId},
                          onComplete: fetchUnionOrWardSuccess,
                          cache: true
                  });*/
       
 }
 function fetchUnionOrWardSuccess(result){
     
   	//var result = originalRequest.responseText.evalJSON();
   	var json = JSON.parse(result);
   	var options="";
   	var tdId=""
   	if(destiField=="PERMANENT_UNION_OR_WARD")
   	  {
   	   options="<select tabindex='504' name=\"pAddress.unionOrWardId\" id=\"PERMANENT_UNION_OR_WARD\" class=\"addressSelectBox\" onchange=\"fetchJSONData_MauzaOrMoholla(this.value,'PERMANENT_MAUZA_OR_MOHOLLA')\">";
   	   tdId="PERMANENT_UNION_OR_WARD_TD";
   	   document.getElementById(tdId).innerHTML="";
   	   
   	  $("#PERMANENT_MAUZA_OR_MOHOLLA").empty();
	  $("#PERMANENT_VILLAGE").empty();
	  
   	  }
   	else if(destiField=="MAILING_UNION_OR_WARD")
   	 {
   	  options="<select tabindex='554' name=\"pAddress.munionOrWardId\" id=\"MAILING_UNION_OR_WARD\" class=\"addressSelectBox\" onchange=\"fetchJSONData_MauzaOrMoholla(this.value,'MAILING_MAUZA_OR_MOHOLLA')\">";
   	  tdId="MAILING_UNION_OR_WARD_TD";
   	  document.getElementById(tdId).innerHTML="";
   	  
   	  $("#MAILING_MAUZA_OR_MOHOLLA").empty();
	  $("#MAILING_VILLAGE").empty();
	  
   	 }
   	else if(destiField=="VOTERAREA_UNION_OR_WARD")
  	 {
  	  options="<select tabindex='39' name=\"voterArea.unionOrWardId\" id=\"VOTERAREA_UNION_OR_WARD\" class=\"addressSelectBox\" onchange=\"fetchJSONData_MauzaOrMoholla(this.value,'VOTERAREA_MAUZA_OR_MOHOLLA')\">";
  	  tdId="VOTERAREA_UNION_OR_WARD_TD";
  	  document.getElementById(tdId).innerHTML="";
  	  
  	  $("#VOTERAREA_MAUZA_OR_MOHOLLA").empty();
	  $("#VOTERAREA_VILLAGE").empty();
  	 }   	
   	else if(destiField=="PASSWORD_UNION_OR_WARD")
    {
    	options="<select tabindex='32' name=\"addressDTO.pUnion\" id=\"PASSWORD_UNION\" class=\"addressSelectBox\" onchange=\"fetchPasswordInformation(this.value)\" >";
    	tdId="PASSWORD_UNION_TD";
    	document.getElementById(tdId).innerHTML="";
    	
    }
		options+="<option value=''>--Select Union/Ward--</option>";
		for (var i=0;i<json.unionOrWardList.length;i=i+2)
		{
      	options+="<option value='"+json.unionOrWardList[i+1]+"'>"+json.unionOrWardList[i]+"</option>"; 
      }
      options+="</select>";

      document.getElementById(tdId).innerHTML=options;

	} 
 
 function fetchJSONData_MauzaOrMoholla(unionOrWardId,dest){
	   var divistionId;
	   var districtId;
	   var upazillaOrThanaId;
	   
	   if(dest=="PERMANENT_MAUZA_OR_MOHOLLA"){
		   divisionId=document.getElementById("PERMANENT_DIV").value;
		   districtId=document.getElementById("PERMANENT_DIST").value;
		   upazillaOrThanaId=document.getElementById("PERMANENT_UPAZILLA_OR_THANA").value;
		   
	   }
	   else if(dest=="MAILING_MAUZA_OR_MOHOLLA"){
		   divisionId=document.getElementById("MAILING_DIV").value;
		   districtId=document.getElementById("MAILING_DIST").value;
		   upazillaOrThanaId=document.getElementById("MAILING_UPAZILLA_OR_THANA").value;
	   }
	   else if(dest=="VOTERAREA_MAUZA_OR_MOHOLLA"){
		   divisionId=document.getElementById("VOTERAREA_DIV").value;
		   districtId=document.getElementById("VOTERAREA_DIST").value;
		   upazillaOrThanaId=document.getElementById("VOTERAREA_UPAZILLA_OR_THANA").value;
	   }
	   
  var url = 'JSONfindMauzaOrMoholla.action';
  destiField=dest;
  
  $.ajax({
      type    : "POST",
      url     : url,
      dataType: 'text',
      async   : false,
      data    : {

   	   divisionId : divisionId, districtId : districtId,upazillaOrThanaId:upazillaOrThanaId,unionOrWardId:unionOrWardId
      }
  }).done(function (res) {    	   
	  fetchMauzaOrMohollaSuccess(res);
          })
          .always(function () {
              //$('#sw-val-step-3').unmask();
          })
          .fail(function (data) {
              if (data.responseCode)
                  alert(data.responseCode);
          });
    
/* 	var myAjax = new Ajax.Request(
                url, 
                {
                        method: 'post',
                        parameters: {'divisionId' : divisionId, 'districtId' : districtId, 'upazillaOrThanaId' : upazillaOrThanaId, 'unionOrWardId' : unionOrWardId},
                        onComplete: fetchMauzaOrMohollaSuccess,
                        cache: true
                });*/
     
}
function fetchMauzaOrMohollaSuccess(result){
   
 	//var result = originalRequest.responseText.evalJSON();
 	var json = JSON.parse(result);
 	var options="";
 	var tdId=""
 	if(destiField=="PERMANENT_MAUZA_OR_MOHOLLA")
 	  {
 	   options="<select tabindex='505' name=\"pAddress.mauzaOrMohollaId\" id=\"PERMANENT_MAUZA_OR_MOHOLLA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_Village(this.value,'PERMANENT_VILLAGE')\">";
 	   tdId="PERMANENT_MAUZA_OR_MOHOLLA_TD";
 	   document.getElementById(tdId).innerHTML="";
 	   
 	  $("#PERMANENT_VILLAGE").empty();
	  
 	  }
 	else if(destiField=="MAILING_MAUZA_OR_MOHOLLA")
 	 {
 	  tdId="MAILING_MAUZA_OR_MOHOLLA_TD";
 	  options="<select tabindex='555' name=\"pAddress.mmauzaOrMohollaId\" id=\"MAILING_MAUZA_OR_MOHOLLA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_Village(this.value,'MAILING_VILLAGE')\">";
 	  document.getElementById(tdId).innerHTML="";
 	  
 	  $("#MAILING_VILLAGE").empty();
	  
 	 }
 	else if(destiField=="VOTERAREA_MAUZA_OR_MOHOLLA")
	 {
	  options="<select tabindex='40' name=\"voterArea.mauzaOrMohollaId\" id=\"VOTERAREA_MAUZA_OR_MOHOLLA\" class=\"addressSelectBox\" onchange=\"fetchJSONData_Village(this.value,'VOTERAREA_VILLAGE')\">";
	  tdId="VOTERAREA_MAUZA_OR_MOHOLLA_TD";
	  document.getElementById(tdId).innerHTML="";
	  
	  $("#VOTERAREA_VILLAGE").empty();
	 }
		
		options+="<option value=''>--Select Mauza/Moholla--</option>";
		for (var i=0;i<json.mauzaOrMohollaList.length;i=i+2)
		{
    	options+="<option value='"+json.mauzaOrMohollaList[i+1]+"'>"+json.mauzaOrMohollaList[i]+"</option>"; 
    }
    options+="</select>";

    document.getElementById(tdId).innerHTML=options;

	}

function fetchJSONData_Village(mauzaOrMohollaId,dest){
	   var divistionId;
	   var districtId;
	   var upazillaOrThanaId;
	   var unionOrWardId;
	   
	   if(dest=="PERMANENT_VILLAGE"){
		   divisionId=document.getElementById("PERMANENT_DIV").value;
		   districtId=document.getElementById("PERMANENT_DIST").value;
		   upazillaOrThanaId=document.getElementById("PERMANENT_UPAZILLA_OR_THANA").value;
		   unionOrWardId=document.getElementById("PERMANENT_UNION_OR_WARD").value;
		   
	   }
	   else if(dest=="MAILING_VILLAGE"){
		   divisionId=document.getElementById("MAILING_DIV").value;
		   districtId=document.getElementById("MAILING_DIST").value;
		   upazillaOrThanaId=document.getElementById("MAILING_UPAZILLA_OR_THANA").value;
		   unionOrWardId=document.getElementById("MAILING_UNION_OR_WARD").value;
	   }
	   else if(dest=="VOTERAREA_VILLAGE"){
		   divisionId=document.getElementById("VOTERAREA_DIV").value;
		   districtId=document.getElementById("VOTERAREA_DIST").value;
		   upazillaOrThanaId=document.getElementById("VOTERAREA_UPAZILLA_OR_THANA").value;
		   unionOrWardId=document.getElementById("VOTERAREA_UNION_OR_WARD").value;
	   }
	   
var url = 'JSONfindVillage.action';
destiField=dest;
 
$.ajax({
    type    : "POST",
    url     : url,
    dataType: 'text',
    async   : false,
    data    : {

 	   divisionId : divisionId, districtId : districtId,upazillaOrThanaId:upazillaOrThanaId,unionOrWardId:unionOrWardId,mauzaOrMohollaId:mauzaOrMohollaId
    }
}).done(function (res) {    	   
	fetchVillageSuccess(res);
        })
        .always(function () {
            //$('#sw-val-step-3').unmask();
        })
        .fail(function (data) {
            if (data.responseCode)
                alert(data.responseCode);
        });

/*	var myAjax = new Ajax.Request(
             url, 
             {
                     method: 'post',
                     parameters: {'divisionId' : divisionId, 'districtId' : districtId, 'upazillaOrThanaId' : upazillaOrThanaId, 'unionOrWardId' : unionOrWardId, 'mauzaOrMohollaId' : mauzaOrMohollaId},
                     onComplete: fetchVillageSuccess,
                     cache: true
             });*/
  
}
function fetchVillageSuccess(result){

	//var result = originalRequest.responseText.evalJSON();
	var json = JSON.parse(result);
	var options="";
	var tdId=""
	if(destiField=="PERMANENT_VILLAGE")
	  {
	   options="<select tabindex='506' name=\"pAddress.villageId\" id=\"PERMANENT_VILLAGE\" class=\"addressSelectBox\" >";
	   tdId="PERMANENT_VILLAGE_TD";
	   document.getElementById(tdId).innerHTML="";
	  }
	else if(destiField=="MAILING_VILLAGE")
	 {
	  options="<select tabindex='556' name=\"pAddress.mvillageId\" id=\"MAILING_VILLAGE\" class=\"addressSelectBox\" >";
	  tdId="MAILING_VILLAGE_TD";
	  document.getElementById(tdId).innerHTML="";
	 }
	else if(destiField=="VOTERAREA_VILLAGE")
	 {
	  options="<select tabindex='41' name=\"voterArea.villageId\" id=\"VOTERAREA_VILLAGE\" class=\"addressSelectBox\" >";
	  tdId="VOTERAREA_VILLAGE_TD";
	  document.getElementById(tdId).innerHTML="";
	 }
		
		options+="<option value=''>--Select Village --</option>";
		for (var i=0;i<json.villageList.length;i=i+2)
		{
 	options+="<option value='"+json.villageList[i+1]+"'>"+json.villageList[i]+"</option>"; 
 }
 options+="</select>";

 document.getElementById(tdId).innerHTML=options;

	} 



  function copyPermanentAddress(checkValue)
  {
	  
  
   if(checkValue==true)
   {
	  // alert("I am an alert");
    
    $1('MAILING_DIV').value=$1('PERMANENT_DIV').value;
    //document.getElementById('MAILING_DIV').readOnly =true;
    $('#MAILING_DIV option:not(:selected)').prop('disabled', true);
    
    var t=getDropDown('PERMANENT_DIST');
    var selectedInd=t.selectedIndex;
    var tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    
    $1('MAILING_DIST_TD').innerHTML="<select tabindex='45' name=\"pAddress.mdistrictId\" id=\"MAILING_DIST\" class=\"addressSelectBox\" ><option value='"+$1('PERMANENT_DIST').value+"'>"+tex+"</option></select>";
    document.getElementById('MAILING_DIST').readOnly =true;
    
    t=getDropDown('PERMANENT_UPAZILLA_OR_THANA');
    selectedInd=t.selectedIndex;
    tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    $1('MAILING_UPAZILLA_OR_THANA_TD').innerHTML="<select tabindex='46' name=\"pAddress.mupazillaOrThanaId\" id=\"MAILING_UPAZILLA_OR_THANA\" class=\"addressSelectBox\" ><option  value='"+$1('PERMANENT_UPAZILLA_OR_THANA').value+"'>"+tex+"</option>";
    document.getElementById('MAILING_UPAZILLA_OR_THANA').readOnly =true;
    
    
    t=getDropDown('PERMANENT_UNION_OR_WARD');
    selectedInd=t.selectedIndex;
    tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    $1('MAILING_UNION_OR_WARD_TD').innerHTML="<select tabindex='46' name=\"pAddress.munionOrWardId\" id=\"MAILING_UNION_OR_WARD\" class=\"addressSelectBox\" ><option  value='"+$1('PERMANENT_UNION_OR_WARD').value+"'>"+tex+"</option>";
    document.getElementById('MAILING_UNION_OR_WARD').readOnly =true;
   
    t=getDropDown('PERMANENT_MAUZA_OR_MOHOLLA');
    selectedInd=t.selectedIndex;
    tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    $1('MAILING_MAUZA_OR_MOHOLLA_TD').innerHTML="<select tabindex='46' name=\"pAddress.mmauzaOrMohollaId\" id=\"MAILING_MAUZA_OR_MOHOLLA\" class=\"addressSelectBox\" ><option  value='"+$1('PERMANENT_MAUZA_OR_MOHOLLA').value+"'>"+tex+"</option>";
    document.getElementById('MAILING_MAUZA_OR_MOHOLLA').readOnly =true;
   
    
    t=getDropDown('PERMANENT_VILLAGE');
    selectedInd=t.selectedIndex;
    tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    $1('MAILING_VILLAGE_TD').innerHTML="<select tabindex='46' name=\"pAddress.mvillageId\" id=\"MAILING_VILLAGE\" class=\"addressSelectBox\" ><option  value='"+$1('PERMANENT_VILLAGE').value+"'>"+tex+"</option>";
    document.getElementById('MAILING_VILLAGE').readOnly =true;
    
    t=getDropDown('PERMANENT_POST_OFFICE');
    selectedInd=t.selectedIndex;
    tex="";
    if(selectedInd>=0)
      tex=t.options[selectedInd].text;
    $1('MAILING_POST_OFFICE').innerHTML="<select tabindex='46' name=\"pAddress.mpostOffice\" id=\"MAILING_POST_OFFICE\" class=\"addressSelectBox\" ><option  value='"+$1('PERMANENT_POST_OFFICE').value+"'>"+tex+"</option>";
    document.getElementById('MAILING_POST_OFFICE').readOnly =true;
   
    
    
    $1('MAILING_POST_CODE').value=$1('PERMANENT_POST_CODE').value;
    $1('MAILING_ROAD').value=$1('PERMANENT_ROAD').value;
    $1('MAILING_HOUSEHOLD').value=$1('PERMANENT_HOUSEHOLD').value;
    
    document.getElementById('MAILING_POST_CODE').readOnly =true;
    document.getElementById('MAILING_ROAD').readOnly =true;
    document.getElementById('MAILING_HOUSEHOLD').readOnly =true;
    
    
   }
   
   else
   {
	  // alert("here1");
	$('#MAILING_DIV option:not(:selected)').prop('disabled', false);  
    var t=getDropDown('MAILING_DIV');
    t.selectedIndex=0;
    
    //$1('MAILING_DIV').value="--Select Division--";
	   //document.getElementById('MAILING_DIV').selectedIndex = -1;
	   document.getElementById('MAILING_DIST').selectedIndex = -1;
	   document.getElementById('MAILING_UPAZILLA_OR_THANA').selectedIndex = -1;
	   document.getElementById('MAILING_UNION_OR_WARD').selectedIndex = -1;
	   document.getElementById('MAILING_MAUZA_OR_MOHOLLA').selectedIndex = -1;
	   document.getElementById('MAILING_VILLAGE').selectedIndex = -1;
 
    $1('MAILING_POST_OFFICE').value="";
    $1('MAILING_POST_CODE').value="";
    $1('MAILING_ROAD').value="";
    $1('MAILING_HOUSEHOLD').value="";
    
    
    document.getElementById('MAILING_ROAD').readOnly =false;
    document.getElementById('MAILING_HOUSEHOLD').readOnly =false;
	   
	   
	   
   }
   
  }
  

  
  function areaSelect(fieldValue,fieldId)
  {
   if(fieldValue=="Others")
    document.getElementById(fieldId).style.display="block";
   else
    document.getElementById(fieldId).style.display="none";
    
  }
  


	function getDropDown(listid)
	{
	var dps =  document.getElementsByTagName("select");
	var dpsno;
	
	for(i=0;i<dps.length;i++)
	 {
	   if(dps[i].id==listid)
	   {
	    dpsno = dps[i];
	    break;
	   }
	 }
	return dpsno; 
	} 
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function fetchJSONData_Ason(districtId,dest){
		   var divistionId;
		   /*if(dest=="CANDIDATE_ASON")
			   var divisionId=document.getElementById("PERMANENT_DIV").value;
		   else if(dest=="MAILING_UPAZILLA_OR_THANA")
			   var divisionId=document.getElementById("MAILING_DIV").value;
		   else if(dest=="VOTERAREA_UPAZILLA_OR_THANA")
			   var divisionId=document.getElementById("VOTERAREA_DIV").value;
		   else if(dest=="BIRTH_UPAZILLA_OR_THANA")
			   var divisionId="";*/
		   //alert('adnan');
	       var url = 'JSONfindAson.action';
	       destiField=dest;
	      // destiField2=dest2;
	       
	       
	       $.ajax({
	           type    : "POST",
	           url     : url,
	           dataType: 'text',
	           async   : false,
	           data    : {

	        	   districtId : districtId
	           }
	       }).done(function (res) {    	   
	    	  fetchAsonSuccess(res);
	               })
	               .always(function () {
	                   //$('#sw-val-step-3').unmask();
	               })
	               .fail(function (data) {
	                   if (data.responseCode)
	                       alert(data.responseCode);
	               });
	      
	  }
	  function fetchAsonSuccess(result){
	      
	    	//var result = originalRequest.responseText.evalJSON();
		  var json = JSON.parse(result);
	    	var options="";
	    	var tdId="";
	    //	alert(destiField);
	    //	alert(result);
	    	if(destiField=="CANDIDATE_ASON")
	    	  {
	    	   options="<select tabindex='503' name=\"candidateArea.ason\" id=\"CABDIDATEAREA_ASON\" class=\"addressSelectBox\" >";
	    	   tdId="CANDIDATE_ASON";
	    	   document.getElementById(tdId).innerHTML="";
	    	   
	    	 // $("#PERMANENT_UNION_OR_WARD").empty();
	      	 
	      	  
	    	  }
	    	
	    	
				
			options+="<option value=''>--Select Ason--</option>";
			for (var i=0;i<json.asonList.length;i=i+2)
			{
	       	options+="<option value='"+json.asonList[i+1]+"'>"+json.asonList[i]+"</option>"; 
	       }
	       options+="</select>";

	       document.getElementById(tdId).innerHTML=options;
	       
	       

		}
	
	
	
	
	
	
	



