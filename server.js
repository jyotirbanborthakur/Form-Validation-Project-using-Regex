let nameValue=false;
let phoneValue=false;
let emailValue=false;
let cityValue=false;
let zipValue=false;
let fNameClick= document.getElementById("name");
fNameClick.addEventListener('blur',()=>
{
    let regex=/^[a-zA-Z]{3,20}$/
    let str=fNameClick.value;
    if(regex.test(str))
    {
        fNameClick.classList.add("is-valid")
        fNameClick.classList.remove("is-invalid")
        nameValue=true;
      
    }
    else{
        fNameClick.classList.add("is-invalid")
        fNameClick.classList.remove("is-valid")

    }
})

let phoneClick= document.getElementById("phone");
phoneClick.addEventListener('blur',()=>
{
    let regex=/^[0-9]{10}$/
    let str=phoneClick.value;
    if(regex.test(str))
    {
        phoneClick.classList.add("is-valid")
        phoneClick.classList.remove("is-invalid")
        phoneValue=true;
        
    }
    else{
        phoneClick.classList.add("is-invalid")
        phoneClick.classList.remove("is-valid")
      
    }
})

let emailClick= document.getElementById("email");
emailClick.addEventListener('blur',()=>
{
    let regex=/^([.a-zA-Z0-9_]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/
    let str=emailClick.value;
    if(regex.test(str))
    {
        emailClick.classList.add("is-valid")
        emailClick.classList.remove("is-invalid")
        emailValue=true;
       
    }
    else{
        emailClick.classList.add("is-invalid")
        emailClick.classList.remove("is-valid")
      
    }
})

let city= document.getElementById("city");
city.addEventListener('blur',()=>
{
    let regex=/^[a-zA-Z]/
    let str=city.value;
    if(regex.test(str))
    {
        city.classList.add("is-valid")
        city.classList.remove("is-invalid")
        cityValue=true;
        
    }
    else{
        city.classList.add("is-invalid")
        city.classList.remove("is-valid")
     
    }
})

let zip= document.getElementById("zip");
zip.addEventListener('blur',()=>
{
    let regex=/^[0-9]{6}$/
    let str=zip.value;
    if(regex.test(str))
    {
        zip.classList.add("is-valid")
        zip.classList.remove("is-invalid")
        zipValue=true;
      
    }
    else{
        zip.classList.add("is-invalid")
        zip.classList.remove("is-valid")
       
    }
})


let btn=document.getElementById("submitBtn")
btn.addEventListener("click",(e)=>
{
    let alerts = document.getElementById("alert");
    e.preventDefault();
   if(nameValue && emailValue && phoneValue){
        
        alerts.classList.remove("alert-danger","d-none")
        alerts.classList.add("alert-success")
        alerts.innerHTML=`Thanks! form submitted`
   }
   else
   {
    alerts.classList.add("alert-danger")
    alerts.classList.remove("alert-success","d-none")
    alerts.innerHTML=`Kindly enter inputs correctly`
   }
   phoneClick.value=""
   nameValue.value=""
   emailClick.value=""
})
