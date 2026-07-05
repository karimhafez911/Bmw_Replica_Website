const submitbutton = document.getElementById("submit");
const email = document.getElementById("email")
const emailerrorMSG = document.getElementById("emailerrorMSG")
const password = document.getElementById("pass1");
const confirmpassword = document.getElementById("pass2");
const passworderrorMSG = document.getElementById("passwordmismatch");

submitbutton.onclick = function()
{
       if(!email.value.includes("@"))
        {
        emailerrorMSG.textContent = "please write your email correctly";
        }
       else 
        {
        emailerrorMSG.textContent = ""; 
        }
        if(password.value != confirmpassword.value)
        {
           passworderrorMSG.textContent = "The Two Passwords must be the same! ";
        }
}