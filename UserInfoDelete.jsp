<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'UserInfoEdit.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  <form>
  		<table>
		 <tr>
		  	<td><label>Name</label></td>
		  	<td><input type="text" name="candidateDTO.name" value="<%= request.getParameter("name")%>"></td>
		  	<td><input type="hidden" name="candidateDTO.id" value="<%= request.getParameter("id")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Gender</label></td>
		  	<td><input type="text" name="candidateDTO.gender" value="<%= request.getParameter("gender")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>City</label></td>
		  	<td><input type="text" name="candidateDTO.city" value="<%= request.getParameter("city")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Phone No.</label></td>
		  	<td><input type="text" name="candidateDTO.phoneNo" value="<%= request.getParameter("phoneNo")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Approved</label></td>
		  <%-- 	<td><input type="text" name="logInDTO.approved" value="<%= request.getParameter("approved")%>"></td> --%>
		  <%  String yesChecked="";
		  	  String noChecked="";
		  	  String approved=request.getParameter("approved");
		  if (approved.equals("Y")) 
		  	 { 
		  	 	yesChecked="checked";
		  	 }
		  else
			  {
			 	 noChecked="checked";
			  }%>
		  	<td><input type="radio" name="candidateDTO.approved" <%=yesChecked %> value="Y"> Yes<br>
		  	<input type="radio" name="candidateDTO.approved" <%=noChecked %> value="N"> No<br></td>
		  </tr>
		  <tr>
		  	<td><label>Address</label></td>
		  	<td><input type="text" name="candidateDTO.address" value="<%= request.getParameter("address")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Additional Note</label></td>
		  	<td><input type="text" name="candidateDTO.addtionalNote" value="<%= request.getParameter("addtionalNote")%>"></td>
		  </tr>
		  
  		</table>
  		<button type="button" onClick="DeleteUser();" >Delete</button>
  </form>
  <script type="text/javascript" src="/TeacherInformationSystem/resources/js/jquery-2.1.4.min.js"></script>
  <script type="text/javascript">
  function DeleteUser(){
  var id=document.getElementById("userId").value;
  //alert(id);
  $.ajax({
           type    : "POST",
           url     : "DeleteUserInformation",
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
           var actionName="DeleteUserInformationSuccess";
           window.location=actionName;

       }
  
  </script>
  </body>
</html>
