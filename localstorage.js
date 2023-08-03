/*localStorage.setItem("id","0");
localStorage.setItem("name","sandeep");
localStorage.setItem("place","kerala");
document.write(localStorage.removeItem("id"));

document.write(localStorage.getItem("id"));
document.write(localStorage.getItem("name"));
*/

const input = document.querySelector("#input");
const loginbutton  = document.querySelector('#btn');
const logoutbutton = document.querySelector('#btn');
const h1           = document.querySelector("h1");

loginbutton.onclick=()=>{
    if(input.value){
        localStorage.setItem("token",input.value);
        h1.innerHTML = "welcome";
    }
    
};

logoutbutton.onclick = ()=>{
    localStorage.clear();
    location.reload();
};

