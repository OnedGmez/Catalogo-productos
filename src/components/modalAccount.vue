<template>
    <div @keyup.esc="states.modalAccountConfig" class="modal fade show" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div id="menu-modal" class="col-4">
                                <div class="profile-photo">
                                    <div class="photo">
                                        <span>
                                            <font-awesome-icon icon="user-tie" />
                                        </span>
                                    </div>
                                </div>
                                <div class="options-account-config">
                                    <ul class="options">
                                        <li class="selected-border">Información general</li>
                                        <li>Información de contacto</li>
                                        <li>Información de ubicación</li>
                                        <li>Cambiar contraseña</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="mid-general-info" class="col-8">
                                <div style="display: none;" id="general-information">
                                    <div class="informacion-div">
                                        Información general
                                    </div>
                                    <form>
                                        <div class="mb-3 div-input-form">
                                            <input type="text" class="form-control" id="id-input" placeholder=" "
                                                value="onedg8@gmail.com" disabled />
                                            <label class="form-label">
                                                <span class="span-label-input">Número de identificación</span>
                                            </label>
                                        </div>

                                        <div class="nombre-apellido">
                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="name-input" placeholder=" "
                                                    value="Oned Alejandro" disabled />
                                                <label class="form-label">
                                                    <span class="span-label-input">Nombres</span>
                                                </label>
                                            </div>

                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="last-name-input" placeholder=" "
                                                    value="Gómez Sauceda" disabled />
                                                <label class="form-label">
                                                    <span class="span-label-input">Apellidos</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="div-input-form">
                                            <input type="date" class="form-control" id="date-input" placeholder=" "
                                                value="2000-03-17" disabled />
                                            <label class="form-label">
                                                <span class="span-label-input">Fecha de Nacimiento</span>
                                            </label>
                                        </div>
                                    </form>
                                    <div class="change-photo">
                                        <label class="form-label">
                                            <span class="span-label-input">Cambiar foto de perfil</span>
                                        </label>
                                        <input type="file" name="input-file-photo" id="change-profile-photo">
                                    </div>
                                </div>
                                <div style="display: none;" id="contact-information">
                                    <div class="informacion-div">
                                        Información de Contacto
                                    </div>
                                    <form>
                                        <div class="mb-3 div-input-form">
                                            <input type="email" class="form-control" id="email-contact-input"
                                                placeholder=" " value="onedg8@gmail.com" />
                                            <label class="form-label">
                                                <span class="span-label-input">Correo eléctronico</span>
                                            </label>
                                        </div>

                                        <div class="mb-3 div-input-form">
                                            <input type="email" class="form-control" id="alternative-email-contact-input"
                                                placeholder=" " value="onedg8@gmail.com" />
                                            <label class="form-label">
                                                <span class="span-label-input">Correo eléctronico alternativo</span>
                                            </label>
                                        </div>

                                        <div class="phone">
                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="prefix-phone-input"
                                                    placeholder=" " value="+504" disabled />
                                                <label class="form-label">
                                                    <span class="span-label-input">Prefijo</span>
                                                </label>
                                            </div>

                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="phone-number-input"
                                                    placeholder=" " value="" />
                                                <label class="form-label">
                                                    <span class="span-label-input">Número de teléfono</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="phone">
                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="alternative-prefix-phone-input"
                                                    placeholder=" " value="+504" disabled />
                                                <label class="form-label">
                                                    <span class="span-label-input">Prefijo</span>
                                                </label>
                                            </div>

                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="alternative-phone-number-input"
                                                    placeholder=" " value="8776 - 4313" />
                                                <label class="form-label">
                                                    <span class="span-label-input">Número de teléfono alternativo</span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div style="display: none;" id="location-information">
                                    <div class="informacion-div">
                                        Información de Localización
                                    </div>
                                    <form>
                                        <div class="country-depto">
                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="country-input" placeholder=" "
                                                    value="Honduras" disabled />
                                                <label class="form-label">
                                                    <span class="span-label-input">País</span>
                                                </label>
                                            </div>

                                            <div class="div-input-form">
                                                <input type="text" class="form-control" id="depto-input" placeholder=" "
                                                    value="La Paz" />
                                                <label class="form-label">
                                                    <span class="span-label-input">Departamento</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="div-input-form">
                                            <input type="text" class="form-control" id="residential-input" placeholder=" "
                                                value="Residencial Urquía" />
                                            <label class="form-label">
                                                <span class="span-label-input">Colonia/Barrio/Residencial</span>
                                            </label>
                                        </div>
                                        <div class="div-input-form">
                                            <input type="text" class="form-control" id="store-name-input" placeholder=" "
                                                value="Novedades DE TODO UN POCO" />
                                            <label class="form-label">
                                                <span class="span-label-input">Nombre del negocio</span>
                                            </label>
                                        </div>
                                        <div class="div-input-form">
                                            <textarea class="form-control" id="address-input" placeholder=" " rows=1
                                                cols=20></textarea>
                                            <label class="form-label">
                                                <span class="span-label-input">Describe dos referencias de ubicación</span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div id="change-password">
                                    <div class="informacion-div">
                                        Cambiar Contraseña
                                    </div>
                                    <form>
                                        <div class="div-input-form">
                                            <input type="text" class="form-control" id="old-pass-input" placeholder=" " />
                                            <label class="form-label">
                                                <span class="span-label-input">Contraseña antigua</span>
                                            </label>
                                        </div>
                                        <div class="div-input-form">
                                            <input type="text" class="form-control" id="new-pass-input" placeholder=" "/>
                                            <label class="form-label">
                                                <span class="span-label-input">Nueva contraseña</span>
                                            </label>
                                        </div>
                                        <div class="div-input-form">
                                            <input type="text" class="form-control" id="rewrite-pass-input" placeholder=" "/>
                                            <label class="form-label">
                                                <span class="span-label-input">Confirmar contraseña</span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/animaciones-forms.css";

.modal-body {
    padding: 0;
}

#menu-modal .profile-photo {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--vt-c-grey);
}

.profile-photo .photo {
    width: 70px;
    height: 70px;
    background-color: var(--vt-c-orange);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1.5vw);
    color: var(--vt-c-white);
}

.options-account-config .options {
    padding: 0;
    height: auto;
    margin-top: 5px;
    margin-bottom: 20px;
}

.options li {
    list-style-type: none;
    height: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--vt-c-soft-grey);
    padding: 5px 15px;
    margin: 0 5px;
    font-weight: 500;
}

.options li:hover {
    cursor: pointer;
    font-weight: 700;
    border-left: solid 4px var(--vt-c-orange);
}

#mid-general-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

#general-information,
#contact-information,
#location-information, #change-password {
    position: relative;
    width: 90%;
    margin: 15px 0 15px 0;
}

.informacion-div {
    margin-bottom: 30px;
}

#general-information .nombre-apellido {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#general-information .change-photo {
    width: 100%;
}

#general-information .change-photo input {
    width: 100%;
    margin-bottom: 10px;
}

#general-information .div-input-form,
#contact-information .div-input-form,
#location-information .div-input-form, #change-password .div-input-form {
    position: relative;
    margin-bottom: 30px !important;
}

#contact-information .phone {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

#location-information .country-depto {
    display: flex;
    justify-content: space-between;
}

form .form-control {
    border: none;
    width: 100%;
    height: 100%;
    border-bottom: solid 1.5px var(--vt-c-grey);
    border-bottom-right-radius: calc(1em + 0.1vw);
    border-top-right-radius: calc(1em + 0.1vw);
    transition: all 220ms ease-in-out;
}

form .form-label {
    color: var(--vt-c-grey);
    padding: 0 0.75rem;
}
</style>

<script setup>
import { ref } from "vue";
import { useStates } from "../stores/storeStates";

const states = useStates();
</script>
