<template>
<div class="space-menu">
    <div class="options-menu">
        <div class="options-categories">
            <ul class="options">
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Niño</li>
                <li>Niña</li>
                <li class="selected">Nuevos Productos</li>
                <li>Favoritos</li>
            </ul>
        </div>
        <div class="option-contact">
            <span>
                Contactanos
            </span>
        </div>
    </div>
    <div class="profile">
        <span>
            <font-awesome-icon icon="user-tie" />
        </span>
    </div>
</div>
</template>

<style scoped>
.space-menu{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-shadow: 0px 5px 20px #0000001c;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.space-menu .options-menu{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.options-menu .options-categories{
    display: flex;
    align-items: center;
    width: 100%;
}

.options-categories .options{
    list-style-type: none;
    display: inline-flex;
    align-items: center;
    padding: 0;
    height: 100%;
    margin: 0;
}

.options li{
    margin-right: 35px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
}

.selected{
    background-color: var(--vt-c-orange);
    color: #FFF;
}

.options-menu .option-contact{
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 30px;
}

.space-menu .profile{
    margin: auto 0;
    width: 48px;
    height: 48px;
    background-color: var(--vt-c-soft-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>

<script setup>

</script>