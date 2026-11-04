// input name = password
// 2 input name = Password
// buttton onclick name = changepass()
// show password 1 = show
// show password 2 = Show
//p = enact

const showm = () => {
    "use strict";
    var show = document.getElementById("password");

    if(show.type == "password"){
        show.type = "text";
    }else{
        show.type = "password";
    }
}
document.getElementById("show").addEventListener("click", () =>{
    showm()
})
document.getElementById("password").addEventListener("copy", (e)=>{
    e.preventDefault();
})
document.getElementById("password").addEventListener("paste", (e)=>{
    e.preventDefault();
});
const showse = () => {
    "use strict";
    var shows = document.getElementById("Password");

    if(shows.type == "password"){
        shows.type = "text";
    }else{
        shows.type = "password"
    }
}
document.getElementById("Show").addEventListener("click", () =>{
    showse()
});
document.getElementById("Password").addEventListener("copy", (e)=>{
    e.preventDefault();
})
document.getElementById("Password").addEventListener("paste", (e)=>{
    e.preventDefault();
})

function changepass(){
var man = document.getElementById("password").value;
var men = document.getElementById("Password").value;
var mask = "";


const camel = new Promise((resolve, reject) =>{
    if(man === ""){
            resolve("input a password");
        }
        else if(!/[A-Z]/.test(man)){
            reject("Add an uppercase letter");
        }else if(!/[a-z]/.test(man)){
            reject("Add a lowercase letter");
        }else if(!/[0-9]/.test(man)){
            reject("Add a number");
        }else if(!/[!@#$%^&*]/.test(man)){
            reject("Add special a character");
        }else if(man === men){
            resolve("Password accepted");
            alert("password confirmed")
        }else if(men === ""){
            resolve("confirm your password in the second box");
        }
        else{
            reject("Password doesn't match");
        }
})
     camel.then((camt) =>{
        document.getElementById("enact").innerHTML = camt;
     })
    camel.catch((cant) =>{
        document.getElementById("enact").innerHTML = cant;
    })
    document.getElementById("m")
}
