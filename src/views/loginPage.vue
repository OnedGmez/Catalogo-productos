<script setup></script>

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
            <form>
              <div class="mb-3 div-input-form">
                <input type="text" class="form-control" id="user-e-mail-input" placeholder=" "/>
                <label class="form-label">
                  <span class="span-label-input">Usuario/Correo Eléctronico</span>
                </label>
              </div>

              <div class="mb-3 div-input-form">
                <input type="password" class="form-control" id="password-input" placeholder=" "/>
                <label class="form-label">
                  <span class="span-label-input">Contraseña</span>
                </label>
              </div>
            </form>
            <!-- Agregar componente de boton -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/css/base.css";
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
}

#mid-right-form .form-right{
  width: 75%;
}

#mid-right-form .div-input-form{
  margin: 35px 0;
  position: relative;
}

form .form-control{
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: solid 1.5px var(--vt-c-grey);  
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  transition: all 220ms ease-in-out;
}

form .form-label{
  color: var(--vt-c-grey);
}

/*Anular animaciones por defecto de bootstrap*/
form .form-control:focus{
  outline: none;
  box-shadow: none;
  border-bottom: solid 2px var(--vt-c-orange);
}


</style>
