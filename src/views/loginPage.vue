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

/*Anular animaciones por defecto de bootstrap*/
form .form-control:focus{
  outline: none;
  box-shadow: none;
  border-bottom: solid 2px var(--vt-c-orange);
}


</style>
