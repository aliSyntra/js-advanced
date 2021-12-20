// call 
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
// add users in array 
 let users = [
    //  user1
{
 username:"ali",
 password:"elbaz"
 },
// user2
 {
    username:"massimo",
    password:"casa"
    },
// user3
    {
        username:"papa",
        password:"mama"
    }
]
//  

// call the button and add event listener+ function
// add event listener to button 
const btn = document.getElementById("button").addEventListener("click",bClick)
// function
function bClick(){
    // for loop begin
    for(let user of users){
        // als de button ingeklikt is kijk of  de name input en ww input gelijk zijn en ga naar volgende pagina , sla de naam en password op in de local storage
       if(usernameInput.value==user.username&&passwordInput.value==user.password){
        window.location.href=("secure.html")
        localStorage.setItem('user', JSON.stringify(user));
        var obj = JSON.parse(localStorage.getItem('user'));
       }
    //    als dit niet correct is krijgt de user de volgende melding "username or password wrong"
       else{
           document.getElementById("fout").innerHTML="username or password wrong"
       }
    }

}

