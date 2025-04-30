//First Name Validity Check
function validateFirstName()
{
    let firstName=document.getElementById("firstName");
    if(firstName.value.trim()=="")
    {
        firstName.classList.add("invalid");
    }
    else
    {
        firstName.classList.remove("invalid");
    }
}

//Last name Validity check
function validateLastName()
{
    let lastName=document.getElementById("lastName");
    if(lastName.value.trim()=="")
    {
        lastName.classList.add("invalid");
    }
    else
    {
        lastName.classList.remove("invalid");
    }
}



//Email Validation
function validateEmails()
{
    let emailInput=document.getElementById("email");
    let emailArray=emailInput.value.trim().split(',');
    console.log(emailArray)
    let emailCheck=document.getElementById("check-email");
    let invalidEmails = [];
    let validEmails=[];
    let validCheck=true;
    //Remains invalid of no input
    if(emailInput.value.trim()=="")
    {
        emailCheck.innerText="";
        emailInput.classList.add("invalid");
        return;
    }
    //Check validity of each email
    emailArray.forEach(email => {
       
        const tempInput = document.createElement("input");
        tempInput.type = "email";
        tempInput.value = email.trim();

         if (!tempInput.checkValidity()) {
            invalidEmails.push(email);
            validCheck=false;
         }
         else if(email.trim()=="")
         {
            invalidEmails.push(email);
            validCheck=false;
         } 
    });
    if(validCheck==false)
    {
        
        emailInput.classList.add("invalid");
        emailCheck.innerText=`Invalid emails: \"${invalidEmails} \"`;
    }
    else{
       
       emailCheck.innerText='';
        emailInput.classList.remove("invalid");
    }
    console.log(invalidEmails);
}

//Age validation
function validateAge()
{
    let ageInput=document.getElementById("age");
    let age=ageInput.value;
    let ageCheck=document.getElementById("age-check");
    //Will run if input added then removed.
    if(ageInput.value.trim()==="")
    {
        
        ageCheck.innerText=""
        return;

    }
    //Age shoud be bw 18 and 151
    else if(age <18 || age>151)
    {
        ageCheck.innerText="Age must be b/w 18 to 151"
        ageInput.classList.add("invalid");

        return
    }
    else{
    
    ageCheck.innerText=""
    ageInput.classList.remove("invalid");
    return;
    }
}

//Validate Contact Number
function validateNumber()
{
    let numberInput=document.getElementById("contact-number");
    let number=numberInput.value;
    let numberCheck=document.getElementById("number-check");
   
    //will run if input addeed then removed
    if(number.trim().length==0)
    {
        numberCheck.innerText="";
        numberInput.classList.remove("invalid"); // B/c its optional
        return;
    }
    if(!(/^\d+$/.test(number)))
    {
        numberInput.classList.add("invalid");
       numberCheck.innerText="Non digits not allowed";
        return;
    }
    else if((/^\d+$/.test(number))){
        numberInput.classList.remove("invalid");
        numberCheck.innerText="";

    }
    //number should be of 11 digits
    if(number.length!=11)
    {
        numberCheck.innerText="Number of digits must be 11";
        numberInput.classList.add("invalid");
        return;
    }
    else
    {
        numberCheck.innerText="";
        numberInput.classList.remove("invalid");
        return;
    }

}

//Confirm Password and Password Matching
function confirmPassword()
{
    let passwordInput=document.getElementById("password");
    let password=passwordInput.value.trim();
    let confirmPasswordInput=document.getElementById("confirm-password");
    let confirmPassword=confirmPasswordInput.value.trim();
    let matchPass=document.getElementById("unmatched-pass");
    if(confirmPasswordInput.value.trim()==="")
    {
       
        matchPass.innerText="";
        confirmPasswordInput.classList.add("invalid");
        return;
    }
    else if(password!=confirmPassword)
    {
      
        matchPass.innerText="Confirm Password is wrong";
        confirmPasswordInput.classList.add("invalid");

        return false;
    }
    else
    {
      
        matchPass.innerText="";
        confirmPasswordInput.classList.remove("invalid");
        return true;
    }
}

//Password checks
function validatePassword()
{
    let passwordInput=document.getElementById("password");
    let password=passwordInput.value.trim();
    let check=document.getElementById("pass-check");
    
    if(passwordInput.value.trim()==="")
    {
        check.innerText="";
        passwordInput.classList.add("invalid");
        return;

    }
    //Password length must be at least 8 
    if(password.length<8)
    {
       
        check.innerText="Password should have atleast 8 characters";
        passwordInput.classList.add("invalid");
        return;

    }
    else if(password.length==8){
        check.innerText="";

    }
    //Alphanumeric check
    if(!(/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)))
    {
        
        check.innerText="Password must have alphanumberic characters";
        passwordInput.classList.add("invalid");
        return;
    }
    else if ((/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)))
    {
       
       check.innerText="";
    }
    //Uppercase letter check
    if(!(/[A-Z]/.test(password)))
    {
        
        
        check.innerText="Password must have one uppercase letter.";
        passwordInput.classList.add("invalid");
        return;
    }
    else if((/[A-Z]/.test(password)))
    {
       
       check.innerText="";
    }
    //Lowercase letter check
    if(!(/[a-z]/.test(password)))
    {
       
        check.innerText="Passowrd must contain at least one lowercase letter";
        passwordInput.classList.add("invalid");
        return;
    }
    else if((/[a-z]/.test(password)))
    {
       
       check.innerText="";
    }

    passwordInput.classList.remove("invalid");
    return;

}

//If any of the field is invalid btn will be disabled 
function hasInvalidInputs() {
    let inputs = document.querySelectorAll('input');
    let submitButton=document.getElementById("submitButton");
    let checkBtn=false;
   
    for (let input of inputs) {
        if (input.classList.contains('invalid')) {
            
            checkBtn=true;
        }
    }
    if(checkBtn==true)
    {
        submitButton.disabled=true;
    }
    else{
        submitButton.disabled=false;
    }
    
}

