import { login, logout } from "./Log/auth";
const buttonLogin=document.querySelector('button-login');
buttonLogin.addEventListener("click", async e =>{
    try {
        await login();
    } catch (error) {
        
    }
});