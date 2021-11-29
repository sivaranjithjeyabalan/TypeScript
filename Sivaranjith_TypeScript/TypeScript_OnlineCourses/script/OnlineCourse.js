var currentUserId;
var AutoIncrementedUserId = 1001;
var AutoIncrementedCourseId = 101;
var User = /** @class */ (function () {
    function User(pUserName, pUserAge, pUserMobileNo) {
        this.enrollArray = new Array();
        this.userId = "OCE" + AutoIncrementedUserId.toString();
        AutoIncrementedUserId++;
        this.userName = pUserName;
        this.userAge = pUserAge;
        this.userMobileNo = pUserMobileNo;
    }
    return User;
}());
var Enrolled = /** @class */ (function () {
    function Enrolled(pUserSelectedCourse, pUserRequiredDays) {
        this.courseId = "CID" + AutoIncrementedCourseId;
        AutoIncrementedCourseId++;
        this.userSelectedCourse = pUserSelectedCourse;
        this.userReqDays = pUserRequiredDays;
    }
    return Enrolled;
}());
var userArray = new Array();
//To add user 
function MainMenu() {
    document.getElementById("topMain").style.display = "block";
    var availCourse = document.getElementById("option").style.display = "none";
    document.getElementById("ecl").innerHTML = "";
    document.getElementById("enrollDiv").style.display = "none";
}
function AddUser() {
    var newUserName = document.getElementById("uName").value;
    var newUserAge = document.getElementById("uAge").value;
    var newUserMobileNo = document.getElementById("uMobileNo").value;
    if (newUserName == "" || newUserAge == "" || newUserMobileNo == "") {
        document.getElementById("detailsLabel").innerHTML = "enter the required fields";
        document.getElementById("detailsLabel").style.visibility = "visible";
        document.getElementById("detailsLabel").style.color = "red";
    }
    else {
        var data = new User(newUserName, +newUserAge, +newUserMobileNo);
        userArray.push(data);
        alert("your user id is " + data.userId);
        var checkingId = document.getElementById("userLogin").style.display = "block";
        var homePage = document.getElementById("details").style.display = "none";
    }
}
function NewUser() {
    document.getElementById("details").style.display = "block";
    document.getElementById("topMain").style.display = "none";
}
function ExcistingUser() {
    document.getElementById("userLogin").style.display = "block";
    document.getElementById("topMain").style.display = "none";
}
function CheckId() {
    var cCheck = false;
    var userEnteredId = document.getElementById("enteredId").value;
    for (var i = 0; i < userArray.length; i++) {
        if (userEnteredId == userArray[i].userId) {
            currentUserId = userArray[i];
            cCheck = true;
        }
    }
    if (cCheck) {
        var idSuccess = document.getElementById("userLogin").style.display = "none";
        var availCourse = document.getElementById("option").style.display = "block";
        var homePage = document.getElementById("details").style.display = "none";
        document.getElementById("enrollDiv").style.display = "none";
    }
    else {
        alert("Enter a valid id");
    }
}
function AvaliableCourses() {
    var availableCoursesPage = document.getElementById("availableCourses").style.display = "block";
    document.getElementById("option").style.display = "none";
    var selectedCourse = document.getElementById("course").value;
    var reqDays = document.getElementById("requiredDays").value;
}
function Options() {
    var availCourse = document.getElementById("option").style.display = "block";
    document.getElementById("ecl").innerHTML = "";
    document.getElementById("enrollDiv").style.display = "none";
}
//This shows the enrolled courses
function EnrolledCourses() {
    console.log("The enrolled course of " + currentUserId.enrollArray[currentUserId.enrollArray.length - 1].courseId + " is ");
    for (var i = 0; i < currentUserId.enrollArray.length; i++) {
        document.getElementById("enrollDiv").style.display = "block";
        var availCourse = document.getElementById("option").style.display = "none";
        console.log("Selected course = "
            + currentUserId.enrollArray[i].userSelectedCourse +
            " & Required Days to complete the course = " +
            currentUserId.enrollArray[i].userReqDays);
        document.getElementById("ecl").innerHTML +=
            "Course Id : ".concat(currentUserId.enrollArray[i].courseId, "<br>\n    Selected Course : ").concat(currentUserId.enrollArray[i].userSelectedCourse, "<br>\n    Required Days : ").concat(currentUserId.enrollArray[i].userReqDays, "<br>");
    }
}
//To calculate total Days required to complete the courses
function TotalDays() {
    var totalReqDays = 0;
    for (var i = 0; i < currentUserId.enrollArray.length; i++) {
        totalReqDays += currentUserId.enrollArray[i].userReqDays;
    }
    alert("Total days Required " + totalReqDays);
}
// This function helps to enroll the courses
function Enroll() {
    var selectedCourse = document.getElementById("course").value;
    var reqDays = document.getElementById("requiredDays").value;
    var enrollData = new Enrolled(selectedCourse, +reqDays);
    currentUserId.enrollArray.push(enrollData);
    alert("Successfully enrolled");
    var availableCoursesPage = document.getElementById("availableCourses").style.display = "none";
    document.getElementById("option").style.display = "block";
}
