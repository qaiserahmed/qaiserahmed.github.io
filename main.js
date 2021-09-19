
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let welcomeUser = document.getElementById("welcomeUser");
let logOut = document.getElementById("logOut");
let userLogedIn = document.getElementById("userLogedIn");

let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloonred"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
    else if (e.target.className === "balloonblue"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "FAIL!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
    
    else if (e.target.className === "balloonyellow"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "FAIL!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }  
    else if (e.target.className === "balloongrey"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "FAIL!";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};

var loginUsrObj = localStorage.getItem("loginObjD");
loginUsrObj = JSON.parse(loginUsrObj)

if (!loginUsrObj) {
    swal({
        title: "Not Allowed",
        text: "You are not logged in, please login first",
        icon: "warning",
        button: "OK",
    })
        .then((value) => {
            window.location.href = "index.html"

        });
    // document.body.innerHTML = `you are not logged in, please go to login page`

} else {
    // userName.innerHTML = `Name : ${loginUsrObj.userName}`
    // userEmail.innerHTML = `Email : ${loginUsrObj.email}`
    welcomeUser.innerHTML = `Welcome : ${loginUsrObj.userName}`;
    userLogedIn.innerHTML = `You are now logged in`


    // getting data from local storage
    var userData = localStorage.getItem("userLocal1");
    if (userData === null) {
        var userData = []

    } else {

        userData = JSON.parse(userData)
    }

    let userTable = document.getElementById("userTable");

    for (var i = 0; i < userData.length; i++) {
        userTable.innerHTML += `
         <tr>
            <th scope="row">${i+1}</th>
            <td>${userData[i].userName}</td>
            <td>${userData[i].email}</td>
         </tr>
    `
    }


    logOut.addEventListener('click', function () {
        localStorage.removeItem('loginObjD')
        window.location.href = "index.html"
        console.log(loginUsrObj)
    })




}

