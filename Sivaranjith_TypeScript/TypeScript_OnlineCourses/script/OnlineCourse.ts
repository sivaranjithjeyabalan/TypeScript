let currentUserId:User;
let AutoIncrementedUserId:number=1001;
let AutoIncrementedCourseId:number=101;
class User
{
   
    userName:string;
    userId:string;
    userAge:number;
    userMobileNo:number;
    enrollArray:Array<Enrolled> = new Array<Enrolled>();
    constructor(pUserName:string,pUserAge:number,pUserMobileNo:number)
    {
       this.userId="OCE"+AutoIncrementedUserId.toString();
        AutoIncrementedUserId++;
        this.userName=pUserName;
        this.userAge=pUserAge;
        this.userMobileNo=pUserMobileNo;
    }
}
class Enrolled
{
    userSelectedCourse:string;
    userReqDays:number;
    courseId:string;
    constructor(pUserSelectedCourse:string,pUserRequiredDays:number)
    {
       this.courseId="CID"+AutoIncrementedCourseId;
        AutoIncrementedCourseId++;
        this.userSelectedCourse=pUserSelectedCourse;
        this.userReqDays=pUserRequiredDays;
    }
}
let userArray:Array<User> = new Array<User>();




//To add user 

function MainMenu()
{
    (document.getElementById("topMain") as HTMLDivElement).style.display="block";
    let availCourse=(document.getElementById("option") as HTMLInputElement).style.display="none";
    (document.getElementById("ecl") as HTMLInputElement).innerHTML=``;
    (document.getElementById("enrollDiv") as HTMLDivElement).style.display="none";
}
function AddUser()
{
    let newUserName=(document.getElementById("uName") as HTMLInputElement).value;
    let newUserAge=(document.getElementById("uAge") as HTMLInputElement).value;
    let newUserMobileNo=(document.getElementById("uMobileNo") as HTMLInputElement).value;

    if(newUserName==""|| newUserAge==""||newUserMobileNo=="")
    {
        document.getElementById("detailsLabel").innerHTML="enter the required fields"
        document.getElementById("detailsLabel").style.visibility="visible";
        document.getElementById("detailsLabel").style.color="red";
    }
    else
    {let data=new User(newUserName,+newUserAge,+newUserMobileNo);
    userArray.push(data);
    alert("your user id is "+data.userId);
    let checkingId=(document.getElementById("userLogin") as HTMLInputElement).style.display="block";
    let homePage=(document.getElementById("details") as HTMLInputElement).style.display="none";
   
    }
}
function NewUser()
{
    (document.getElementById("details") as HTMLDivElement).style.display="block";
    (document.getElementById("topMain") as HTMLDivElement).style.display="none";
}
function ExcistingUser()
{
    (document.getElementById("userLogin") as HTMLDivElement).style.display="block";
    (document.getElementById("topMain") as HTMLDivElement).style.display="none";
}


function CheckId()
{
    let cCheck=false;
    let userEnteredId=(document.getElementById("enteredId") as HTMLInputElement).value;
    for(let i=0;i<userArray.length;i++)
    {
        if(userEnteredId==userArray[i].userId)
        {
            currentUserId=userArray[i];
            cCheck=true;
        }
    }
    if(cCheck)
    {
        let idSuccess=(document.getElementById("userLogin") as HTMLInputElement).style.display="none";
        let availCourse=(document.getElementById("option") as HTMLInputElement).style.display="block";
        let homePage=(document.getElementById("details") as HTMLInputElement).style.display="none";
        (document.getElementById("enrollDiv") as HTMLDivElement).style.display="none";

    }
    else
    {
        alert("Enter a valid id");
    }    
     
}
function AvaliableCourses()
{
    let availableCoursesPage=(document.getElementById("availableCourses") as HTMLInputElement).style.display="block";
    (document.getElementById("option") as HTMLInputElement).style.display="none";
    let selectedCourse=(document.getElementById("course") as HTMLInputElement).value;
    let reqDays=(document.getElementById("requiredDays") as HTMLInputElement).value;
}
function Options()
{
    let availCourse=(document.getElementById("option") as HTMLInputElement).style.display="block";
    (document.getElementById("ecl") as HTMLInputElement).innerHTML=``;
    (document.getElementById("enrollDiv") as HTMLDivElement).style.display="none";

}


//This shows the enrolled courses

function EnrolledCourses()
{
    console.log("The enrolled course of "+currentUserId.enrollArray[currentUserId.enrollArray.length-1].courseId+" is ")
  for(let i =0;i<currentUserId.enrollArray.length;i++)
  {
      (document.getElementById("enrollDiv") as HTMLDivElement).style.display="block";
    let availCourse=(document.getElementById("option") as HTMLInputElement).style.display="none";
       console.log( "Selected course = "
      +currentUserId.enrollArray[i].userSelectedCourse+
      " & Required Days to complete the course = "+
       currentUserId.enrollArray[i].userReqDays);

    (document.getElementById("ecl") as HTMLInputElement).innerHTML+=
    `Course Id : ${currentUserId.enrollArray[i].courseId}<br>
    Selected Course : ${currentUserId.enrollArray[i].userSelectedCourse}<br>
    Required Days : ${currentUserId.enrollArray[i].userReqDays}<br>`;

  }
}



//To calculate total Days required to complete the courses

function TotalDays()
{
    let totalReqDays:number=0;
    for(let i =0;i<currentUserId.enrollArray.length;i++)
    {
        totalReqDays+=currentUserId.enrollArray[i].userReqDays;
    }
    alert("Total days Required "+totalReqDays);
}




// This function helps to enroll the courses

function Enroll()
{
    let selectedCourse=(document.getElementById("course") as HTMLInputElement).value;
    let reqDays=(document.getElementById("requiredDays") as HTMLInputElement).value;
    let enrollData=new Enrolled(selectedCourse,+reqDays);
    currentUserId.enrollArray.push(enrollData);
    alert("Successfully enrolled");

    let availableCoursesPage=(document.getElementById("availableCourses") as HTMLInputElement).style.display="none";
    (document.getElementById("option") as HTMLInputElement).style.display="block";
}