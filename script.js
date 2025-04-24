//Email Validation
function validateEmails()
{
    let emailInput=document.getElementById("email");
    let emailArray=emailInput.value.split(',');
    console.log(emailArray)
    let emailCheck=document.getElementById("check-email");
    let invalidEmails = [];
    let validCheck=true;
    //Check validity of each email
    emailArray.forEach(email => {
        if(email.trim()!="")
        {
        const tempInput = document.createElement("input");
        tempInput.type = "email";
        tempInput.value = email.trim();

         if (!tempInput.checkValidity()) {
            invalidEmails.push(email);
            validCheck=false;
         }
        }
        
    });
    if(validCheck==false)
    {
        emailCheck.classList.remove("hide");
        emailInput.classList.add("invalid");
        emailCheck.innerText=`Invalid emails:${invalidEmails}`;
    }
    else{
        emailCheck.classList.add("hide");
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
        ageInput.classList.remove("invalid");
        ageCheck.classList.add("hide");
        return;

    }
    //Age shoud be bw 15 and 151
    else if(age <15 || age>151)
    {
        ageCheck.classList.remove("hide");
        ageInput.classList.add("invalid");
        return
    }
    else{
    ageCheck.classList.add("hide");
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
    let numberCheck2=document.getElementById("number-check2");
    //will run if input addeed then removed
    if(number.trim().length==0)
    {
        numberInput.classList.remove("invalid");
        numberCheck.classList.add("hide");
        numberCheck2.classList.add("hide");
        return;

    }
    if(!(/^\d+$/.test(number)))
    {
        numberInput.classList.add("invalid");
        numberCheck2.classList.remove("hide");
        return;
    }
    //number should be of 11 digits
    if(number.length!=11)
    {
        numberCheck.classList.remove("hide");
        numberInput.classList.add("invalid");
        return;
    }
    else
    {
    numberCheck.classList.add("hide");
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
        matchPass.classList.add("hide");

        return;
    }
    else if(password!=confirmPassword)
    {
        matchPass.classList.remove("hide");
        
        confirmPasswordInput.classList.add("invalid")

        return false;
    }
    else
    {
        matchPass.classList.add("hide");
        confirmPasswordInput.classList.remove("invalid");
        return true;
    }
}

//Password checks
function validatePassword()
{
    let passwordInput=document.getElementById("password");
    let password=passwordInput.value.trim();
    let check1=document.getElementById("8-chars");
    let check2=document.getElementById("alphanum");
    let check3=document.getElementById("uppercase");
    let check4=document.getElementById("lowercase");
    let c1,c2,c3,c4;

    if(passwordInput.value.trim()==="")
    {
        passwordInput.classList.remove("invalid");
        check1.classList.add("hide");
        check2.classList.add("hide");
        check3.classList.add("hide");
        check4.classList.add("hide");
        return;

    }
    //Password length must be at least 8 
    if(password.length<8)
    {
       
        check1.classList.remove("hide");
       
        c1=false;

    }
    else{
        check1.classList.add("hide");
       
        c1=true;

    }
    //Alphanumeric check
    if(!(/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)))
    {
        
        check2.classList.remove("hide");
       
        c2=false;
    }
    else
    {
        check2.classList.add("hide");
        
        c2=true;
    }
    //Uppercase letter check
    if(!(/[A-Z]/.test(password)))
    {
        
        check3.classList.remove("hide");
       
        c3=false;
    }
    else
    {
        check3.classList.add("hide");
        
        c3=true;
    }
    //Lowercase letter check
    if(!(/[a-z]/.test(password)))
    {
        
        check4.classList.remove("hide");
        
        c4=false;
    }
    else
    {
        check4.classList.add("hide");
        
        c4=true;
    }

    if(!(c1 && c2 && c3 && c4))
    {
        passwordInput.classList.add("invalid");
        return;
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

