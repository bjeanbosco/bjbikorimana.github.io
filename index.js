
let Enroll=document.getElementById('enroll');
Enroll.addEventListener('click',enroll)
function enroll(){
  let answer=prompt("Which one do you prefer? Type Coding or Piano");
  if(answer==""){
    alert('Enroll first')
    return false;
  }
 else if(answer=="Coding"){

let aTag = document.createElement('a');
aTag.innerHTML="Learn More On Coding Courses";
aTag.href="https://www.w3schools.com/";
aTag.title="programing course";
aTag.target="_blank";
document.getElementById('piano').innerHTML=aTag;
Enroll.innerHTML="Enrolled"
  }
  else if(answer=="Piano"){
    let Tag = document.createElement('a');
Tag.innerHTML="Learn More on Piano";
Tag.href="https://www.youtube.com/shorts/-EWj_x5txNg";
Tag.title="piano courses";
Tag.target="_blank";
document.getElementById('piano').innerHTML=Tag;
Enroll.innerHTML="Enrolled"
  }
  else if(answer!="Piano"&&answer!="Coding"){
    document.getElementById('piano').innerHTML="We don't have course for you!";
    return false;
  }

}
let Nav=document.querySelectorAll('nav');
