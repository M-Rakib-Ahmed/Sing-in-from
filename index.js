const password = document.querySelector('#passworld')
const togglePassword = document.querySelector('#togglePassworld');
console.log(togglePassword);

togglePassword.addEventListener("click", (e)=>{
    e.preventDefault()
    
    
   
    const type = password.getAttribute('type');

    if(type === "password"){
        password.setAttribute('type', 'text');
        togglePassword.textContent  = 'Hide'
    }
    else{
        password.setAttribute('type', 'password');
        togglePassword.textContent = 'show'
    }
})
