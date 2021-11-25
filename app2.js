const togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#Password1');

   togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

var password1 = document.querySelector('#password');

   togglePassword.addEventListener('click', function (p) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('bi-eye');
});

// var heading = document.querySelector('.data1') 
// document.getElementById("container").addEventListener("mouseover",color)
// function color(){
//     var firstName = document.querySelector('#fname')
//         if(firstName.value.length <= 3){
//             heading.style.backgroundColor = 'rgb(44, 78, 192);';
//         }
//         else if(firstName.value.length >= 3){
//             heading.style.backgroundColor = '#32CD30';
//         }
  
// }
// setInterval(color, 100)




 function check(){
  var Uname = 'Uname'
  var Pass = 'Pass'
  

    
        var usernameRegex= /\w{8,15}/
        var addressRegex= /[\w\W]{1,}/ 
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var passwordRegex= /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/
        var phonenumberRegex = /^\d{10}$/
         
     var name1 = document.getElementById('fname').value
     var name2 = document.getElementById('lname').value
     var username = document.getElementById('uname').value
     var email = document.getElementById('Email').value
     var password = document.getElementById('Password1').value
     var phone = document.getElementById('Phone').value

     localStorage.setItem(Uname,username)
     localStorage.setItem(Pass,password)


     
    if(usernameRegex.test(username)==true)
    { 
        if(emailRegex.test(email)==true)
        { 
            
          if(passwordRegex.test(password)==true)
           {
             if(phonenumberRegex.test(phone)==true)
                 {  
                   alert('Success!!')
                   window.location.replace("./index1.html")
                 }    

            else
            alert('invalid phone-number')
           
          }
          else
          alert('Invalid password')
         
        }
        else
        alert('Invalid email')
       
    }
    else
    alert('Invalid Username')


}

function login(){
  var Uname = 'Uname'
  var Pass = 'Pass'
  let inp_username = document.getElementById('username').value
  let inp_pass = document.getElementById('password').value
  let storedUname = localStorage.getItem(Uname)
  let storedPass = localStorage.getItem(Pass)
  if(inp_username == storedUname && inp_pass == storedPass)
      {
        alert('success!!')
        window.location.replace("./index3.html")
    }
}

