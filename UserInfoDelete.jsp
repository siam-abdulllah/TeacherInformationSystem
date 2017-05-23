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
		  	<td><label>Email</label></td>
		  	<td><input type="text" readonly name="logInDTO.email" value="<%= request.getParameter("email")%>"></td>
		  	<td><input type="hidden" id="userId" name="logInDTO.id" value="<%= request.getParameter("id")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Password</label></td>
		  	<td><input type="text" readonly name="logInDTO.passWord" value="<%= request.getParameter("passWord")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Role</label></td>
		  	<td><input type="text" readonly name="logInDTO.role" value="<%= request.getParameter("role")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>User Name</label></td>
		  	<td><input type="text" readonly name="logInDTO.userName" value="<%= request.getParameter("userName")%>"></td>
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
