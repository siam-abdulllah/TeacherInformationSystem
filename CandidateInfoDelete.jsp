<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Candidate Information Delete</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="/TeacherInformationSystem/resources/css/bootstrap.min.css">
    <script type="text/javascript" src="/TeacherInformationSystem/resources/js/jquery-2.1.4.min.js"></script>
    <script src="text/javascript" src="/TeacherInformationSystem/resources/js/bootstrap.min.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

	<style>
		.container {
		    position: absolute;
		    width: 70%;
		    height: 80%;
		    top: 25%;
		    left: 26%;
		    margin: -100px 0 0 -150px;
		    border: 2px solid #333333;
		    border-color: #00F91C;
		    border-radius: 6px;
		    border-style: outset inset inset outset;
		    border-width: 2px;
		    box-shadow: 0px 0px 8px #888888;
		    background-color: #fcfcfc;
		}
		.main_table{
			position: absolute;
		    top: 30%;
			left: 50%;
			margin: -100px 0 0 -150px;
			font-size: 25px;
			font-weight:bold;
			color: red;
			
		}
	</style>
  </head>
  
  <body>
  
  
  	<div class="container">

		<div class="main_table">
			<span>Candidate Information</span>
			 <form>
			 <div class="table-responsive"> 
		  		<table class="table">
				  <tr>
				  	<td><label>Name</label></td>
				  	<td><input type="text" readonly  value="<%= request.getParameter("name")%>"></td>
				  	<td><input type="hidden" id="userId"  value="<%= request.getParameter("id")%>"></td>
				  </tr>
				  <tr>
				  	<td><label>Gender</label></td>
				  	<td><input type="text" readonly  value="<%= request.getParameter("gender")%>"></td>
				  </tr>
				  <tr>
				  	<td><label>City</label></td>
				  	<td><input type="text" readonly  value="<%= request.getParameter("city")%>"></td>
				  </tr>
				  <tr>
				  	<td><label>Phone No.</label></td>
				  	<td><input type="text" readonly  value="<%= request.getParameter("phoneNo")%>"></td>
				  </tr>
				   <tr>
				  	<td><label>Email</label></td>
				  	<td><input type="text" readonly  value="<%= request.getParameter("email")%>"></td>
				  </tr>
				 <tr>
				  	<td><label>Address</label></td>
				  	<td><input type="text" readonly value="<%= request.getParameter("address")%>"></td>
				  </tr>
		  		</table>
		  	</div>
		  		<button type="button" onClick="DeleteUser();" >Delete</button>
		  	
		  </form>
		</div> 
	</div>
 
   <script type="text/javascript" src="/TeacherInformationSystem/resources/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript">
  function DeleteUser(){
  var id=document.getElementById("userId").value;
  //alert(id);
  $.ajax({
           type    : "POST",
           url     : "CandidateDelete",
           dataType: 'text',
           async   : false,
           data    : {ID: id }

       }).done(function (msg) {
       				gotoAction();
                  
               })
               .always(function () {
                   //$('#sw-val-step-3').unmask();
               })
               .fail(function (data) {
                   if (data.responseCode)
                       alert(data.responseCode);
               });
  
  };
  function gotoAction()
       {
           var actionName="DeleteCandidateInformationSuccess";
           window.location=actionName;

       }
  
  </script>
  </body>
</html>
