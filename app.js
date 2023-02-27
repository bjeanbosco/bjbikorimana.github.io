let Content=document.getElementById('main');


Content.addEventListener('mouseover',Change)
function Change(){
    Content.style.backgroundColor="yellow"
    Content.innerHTML="Thank you for your visit!"
    let img=document.createElement('img');
    img.src="bosco.jpg";
    img.width="200px";
    img.height="200px";
    Content.appendChild(img);
};

Content.addEventListener("mouseout",change);
function change(){
    Content.innerHTML="Web development & Appications"
    Content.style

Content.style.backgroundColor="white"
}

let button=document.getElementById('JoinBtn');
button.addEventListener('click',changer);
function changer(){
   document.getElementById('sign_up').style.display="block";
   button.style.display="none";
}
//the code below this line are all about form.html page

function validateForm() {
    let x = document.getElementById('name').value;
    let z=document.getElementById('email').value;
    let P=document.getElementById('password').value;
    let p=document.getElementById('cpassword').value;

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (z == "") {
        alert("Email must be filled out");
        return false;
      }
      
      else if(P == "") {
        alert("password must be filled  ***");
        return false;
      }
      else if(p==""){
   alert("You must confirm new password");
   return false;
      }
      else if (p!=P) {
        alert("***password mismatch");
        return false;
      }
      else if(P.length<8) {
        alert("*** password should have atleast 8 character");
        return false;
      }
      else{
     document.getElementById('sign_up').innerHTML="Thank You for Sign up To my site!!";
        return true;
      }
  }

  //the codes below this line are all for blogs page
  
