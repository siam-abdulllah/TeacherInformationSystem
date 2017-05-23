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
  <span>User Information</span>
  <form action="UpdateUser" method="post">
  		<table>
		  <tr>
		  	<td><label>Email</label></td>
		  	<td><input type="text" name="logInDTO.email" value="<%= request.getParameter("email")%>"></td>
		  	<td><input type="hidden" name="logInDTO.id" value="<%= request.getParameter("id")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Password</label></td>
		  	<td><input type="text" name="logInDTO.passWord" value="<%= request.getParameter("passWord")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>Role</label></td>
		  	<td><input type="text" name="logInDTO.role" value="<%= request.getParameter("role")%>"></td>
		  </tr>
		  <tr>
		  	<td><label>User Name</label></td>
		  	<td><input type="text" name="logInDTO.userName" value="<%= request.getParameter("userName")%>"></td>
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
		  	<td><input type="radio" name="logInDTO.approved" <%=yesChecked %> value="Y"> Yes<br>
		  	<input type="radio" name="logInDTO.approved" <%=noChecked %> value="N"> No<br></td>
		  </tr>
  		</table>
  		<button type="submit" >Update</button>
  </form>
  
  </body>
</html>
