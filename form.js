const form = document.querySelector('#my-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
   
   if(!validateinput()) {
    e.preventDefault();
   }
})

function validateinput(){
    const userval = username.value.trim()
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;

    if(userval === ''){
        success = false;
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailval ===''){
        success = false;
        seterror(email, 'email is required')
      

    }
    else if(!validateEmail(emailval)){
        success = false;
        seterror(email, 'pls enter a valid email')
     

    }
    else{
        setsuccess(email)
    }
    if(passwordval ===''){
        success = false;
        seterror(password, 'password is required')
      

    }
    else if(passwordval.length<8){
        success = false;
        seterror(password, 'password must be atleast 8 characters')
       

    }
    else{
        setsuccess(password)
    }
    if(cpasswordval === ''){
        success = false;
        seterror(cpassword, 'confirm password is required')
      

    }
    else if(cpasswordval!=passwordval){
        success = false;
        seterror(cpassword,'password is not matching')
        

    }
    else{
        setsuccess(cpassword)
    }
    return success;
}


function seterror(element,msg){
    const inputgrp = element.parentElement;
    const errorelement = inputgrp.querySelector('.error');

    errorelement.innerText = msg;
    inputgrp.classList.add('error');
    inputgrp.classList.remove('success')

}

function setsuccess(element){
    const inputgrp = element.parentElement;
    const errorelement = inputgrp.querySelector('.error');

    errorelement.innerText = '';
    inputgrp.classList.add('success');
    inputgrp.classList.remove('error');

}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };