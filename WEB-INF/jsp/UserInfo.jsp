<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>User Information</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/TeacherInformationSystem/resources/css/bootstrap.min.css">
  <script type="text/javascript" src="/TeacherInformationSystem/resources/js/jquery-2.1.4.min.js"></script>
  <script src="text/javascript" src="/TeacherInformationSystem/resources/js/bootstrap.min.js"></script>
  <style>
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
  </style>
</head>
<body>

<div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
      <h4>User Information</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="/TeacherInformationSystem/logIn">Home</a></li>
        <li><a href="#section2">Add User</a></li>
        <li><a href="#section3">Email</a></li>
        <li><a href="#section3">Photos</a></li>
      </ul>
      <button  class="btn btn-danger" onclick="window.location.href='LogOut.action';">Log Out</button>
      <br><br><br>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog..">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>

    <div class="col-sm-9">
      <%-- <h4><small>User Detail Information</small></h4> --%>
      <hr>
      <h2>User Detail Information</h2> 
      <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
      <!-- <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       --><br><br>
      <input type="button" value="show" onClick>
      <div class="table-responsive"> 
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
       		<table id="user_table"  class="table table-bordered" border="1">
			<thead>
				<tr>
					<td>ID</td>
					<td>Email</td>
					<td>Password</td>
					<td>Role</td>
					<td>UserName</td>
					<td>Approved</td>
					<td>&nbsp;</td>
				</tr>
			</thead>
			<tbody>
			
				<c:forEach items="${requestScope.list}"
				var="UserInformationList" varStatus="loop">
				<tr>
					<td>${UserInformationList.id}</td>
					<td>${UserInformationList.email}</td>
					<td>${UserInformationList.passWord}</td>
					<%-- <td>${UserInformationList.role}</td> --%>
					<%-- <c:set var = "role" scope = "session" value = "${UserInformationList.role}"/> --%>
					<c:set var="test" value="${UserInformationList.role}"/>
					 <%
					    String role=(String)pageContext.getAttribute("test"); 
					    if(role.equals("1"))
					    { %> 
					    	<td>Admin</td>
					    <% }
					    else if (role.equals("2"))  //No exception.
					    
					    { %>
					     	<td>General User</td>
					    <% }
					  	%>  
     				 <c:if test = "${UserInformationList.role} == '1'">
     				 	<td>Admin</td>
     				 </c:if>
     				 <c:if test = "${UserInformationList.role} == '2'">
     					 <td>General User</td>
     				 </c:if>
					<td>${UserInformationList.userName}</td>
					<td>${UserInformationList.approved}</td>
					<td><a  href="/TeacherInformationSystem/UserInfoEdit.jsp?id=${UserInformationList.id}&email=${UserInformationList.email}&passWord=${UserInformationList.passWord}&role=${UserInformationList.role}&userName=${UserInformationList.userName}&approved=${UserInformationList.approved}">Edit</a></td>
					<td><a href="/TeacherInformationSystem/UserInfoDelete.jsp?id=${UserInformationList.id}&email=${UserInformationList.email}&passWord=${UserInformationList.passWord}&role=${UserInformationList.role}&userName=${UserInformationList.userName}&approved=${UserInformationList.approved}">Delete</a></td>
				</tr>
				</c:forEach>
			</tbody>
			
			
		</table>  
       </div>
		    
      <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>Candidate Information</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
      <h5><span class="label label-success">Lorem</span></h5><br>
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       --><hr>
       <div class="table-responsive"> 
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
       	<table id="user_table"  class="table table-bordered" border="1">
			<thead>
				<tr>
					<td>ID</td>
					<td>Name</td>
					<td>Gender</td>
					<td>City</td>
					<td>Phone No.</td>
					<td>Email</td>
					<td>&nbsp;</td>
				</tr>
			</thead>
			<tbody>
			
				<c:forEach items="${requestScope.candidateList}"
				var="CandidateInformationList" varStatus="loop">
				<tr>
					<td>${CandidateInformationList.id}</td>
					<td>${CandidateInformationList.name}</td>
					<td>${CandidateInformationList.gender}</td>
					<td>${CandidateInformationList.city}</td>
					<td>${CandidateInformationList.phoneNo}</td>
					<td>${CandidateInformationList.email}</td>
					<%-- <td>${UserInformationList.role}</td> --%>
					<%-- <c:set var = "role" scope = "session" value = "${UserInformationList.role}"/> --%>
					<c:set var="test" value="${CandidateInformationList.approved}"/>
					 <%
					    String role=(String)pageContext.getAttribute("test"); 
					    if(role.equals("Y"))
					    { %> 
					    	<td>Approved</td>
					    <% }
					    else if (role.equals("N"))  //No exception.
					    
					    { %>
					     	<td>Not Approved</td>
					    <% }
					  	%>  
     				 <%-- <c:if test = "${UserInformationList.role} == '1'">
     				 	<td>Admin</td>
     				 </c:if>
     				 <c:if test = "${UserInformationList.role} == '2'">
     					 <td>General User</td>
     				 </c:if>
					<td>${UserInformationList.userName}</td>
					<td>${UserInformationList.approved}</td> --%>
					<td><a  href="/TeacherInformationSystem/UserInfoEdit.jsp?id=${UserInformationList.id}&email=${UserInformationList.email}&passWord=${UserInformationList.passWord}&role=${UserInformationList.role}&userName=${UserInformationList.userName}&approved=${UserInformationList.approved}">Edit</a></td>
					<td><a href="/TeacherInformationSystem/UserInfoDelete.jsp?id=${UserInformationList.id}&email=${UserInformationList.email}&passWord=${UserInformationList.passWord}&role=${UserInformationList.role}&userName=${UserInformationList.userName}&approved=${UserInformationList.approved}">Delete</a></td>
				</tr>
				</c:forEach>
			</tbody>
			
			
		</table>  
       </div>
       

      <h4>Leave a Comment:</h4>
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
      <br><br>
      
      <p><span class="badge">2</span> Comments:</p><br>
      
      <div class="row">
        <div class="col-sm-2 text-center">
          <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
        </div>
        <div class="col-sm-2 text-center">
          <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
          <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
          <p><span class="badge">1</span> Comment:</p><br>
          <div class="row">
            <div class="col-sm-2 text-center">
              <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
            </div>
            <div class="col-xs-10">
              <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
              <p>Me too! WOW!</p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>
<script>
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("user_table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script>
</body>
</html>
