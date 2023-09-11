<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div id="mid-left-img" class="col-6">
          <div class="img-left">
            <img class="img-fluid" src="../assets/img/LoginDesk.svg" alt="Login-Image"
            />
          </div>
        </div>

        <div id="mid-right-form" class="col-6">
          <div class="form-right">
            <div class="avatar-div">
              <div></div>
            </div>
            <form>
              <div class="mb-3 div-input-form">
                <input type="email" class="form-control" id="user-e-mail-input" placeholder=" " v-model = "email"/>
                <label class="form-label">
                  <span class="span-label-input">Correo Eléctronico</span>
                </label>
              </div>

              <div class="div-input-form">
                <input type="password" class="form-control" id="password-input" placeholder=" " v-model="pass"/>
                <label class="form-label">
                  <span class="span-label-input">Contraseña</span>
                </label>
              </div>
            </form>
            <div class="forgot-password">
              <a href="#">Olvidé mi contraseña</a>
            </div>
          </div>
          <div @click="LogIn" class="button-login">
            Iniciar Sesión
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/animaciones-forms.css";

.row {
  height: 100vh;
}

#mid-left-img {
  background-color: var(--vt-c-green);
  display: flex;
  justify-content: center;
  align-items: center;
}

#mid-left-img .img-left {
  width: 75%;
  height: 75%;
  display: flex;
}

#mid-right-form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#mid-right-form .form-right{
  width: 70%;
  box-shadow: 0px 10px 35px #000000ab;
  padding: 0 20px 15px 20px;
  border-radius: calc(1em + .9vw);
}

.form-right .forgot-password{
  margin-bottom: 10px;
  padding: 0 0.75rem;
}

#mid-right-form .avatar-div{
  width: 75px;
  height: 75px;
  background-color: var(--vt-c-grey);
  flex-wrap: wrap;
  border-radius: 50%;
  position: relative;
  top: -36px;
  margin: auto;
}

#mid-right-form .div-input-form{
  position: relative;
}

#mid-right-form .div-input-form:not(:first-child){
  margin: 36px 0 18px 0;
}

form .form-control{
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: solid 1.5px var(--vt-c-grey);  
  border-bottom-right-radius: calc(1em + 0.1vw);
  border-top-right-radius: calc(1em + 0.1vw);
  transition: all 220ms ease-in-out;
}

form .form-label{
  color: var(--vt-c-grey);
  padding: 0 0.75rem;
}

#mid-right-form .button-login{
  width: 60%;
  background-color: var(--vt-c-orange);
  text-align: center;
  font-size: calc(1rem + .3vw);
  font-weight: 700;
  color: var(--vt-c-white);
  border-bottom-right-radius: calc(1em + 0.1vw);
  border-bottom-left-radius: calc(1em + 0.1vw);
  transition: all 150ms ease-in-out;
  box-shadow: inset 0px 5px 25px #000000ab;
  padding: 2px 0 2px 0;
  position: relative;
}

#mid-right-form .button-login:hover{
  cursor: pointer;
  box-shadow: inset 0px 5px 25px #00000081;
}

/*Anular animaciones por defecto de bootstrap*/
form .form-control:focus{
  border-bottom: solid 2px var(--vt-c-orange);
}


</style>

<script setup>
import router from "@/router";
import { ref } from "vue";

//Variables declaration
const email = ref('');
const pass = ref('');

function LogIn(){
  var regexp =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if((email.value != '' && pass.value != '') && regexp.test(email.value)){
    router.push('/principal')
  }else{
    console.log('Correo y/o contraseña invalido')
  }
}
</script>