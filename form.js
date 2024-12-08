function validateForm()
{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const address=document.getElementById("address").value;
    const pwd=document.getElementById("pwd").value;
    const qual=document.getElementById("qual").value;
    const pno=document.getElementById("pno").value;
    const nameerror=document.getElementById("name-error")
    const emailerror=document.getElementById("email-error")
    const addresserror=document.getElementById("address-error")
    const pwderror=document.getElementById("pwd-error")
    const qualerror=document.getElementById("qual-error")
    const pnoerror=document.getElementById("pno-error")

    nameerror.textContent="";
    emailerror.textContent="";
    addresserror.textContent="";
    pwderror.textContent="";
    qualerror.textContent="";
    pnoerror.textContent="";


    if(name==""|| /\d/.test(name))
    {
        nameerror.textContent="please enter your name properly";
        return false;
    }
    if(email==="" || !email.includes("@"))
        {
            emailerror.textContent="please enter your name properly";
            return false;
        }
        if(address==="")
            {
                addresserror.textContent="please enter your address properly";
                return false;
            }
            if(pwd==="" || pwd.length<6)
                {
                    pwderror.textContent="please enter password atleast 6 character properly";
                    return false;
                }
                if(qual==="")
                    {
                        qualerror.textContent="please enter  qualification properly";
                        return false;
                    }
                    if(pno==="")
                        {
                            pnoerror.textContent="please enter your phonenumber properly";
                            return false;
                        }
return true;
}