/**
 * Store que contendrá los estados de las diferentes variables que requiere activación/desactivación en tiempo de ejecución para realizar determinadas acciones
 * Store that will contain the states of the different variables that require activation/deactivation at runtime to perform certain actions.
 */

import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router";
import { useRoute } from "vue-router";

export const useStates = defineStore("states", () => {
  const openModalDP = ref(false);
  const activeDropdownMenu = ref(false);
  const routerParam = useRoute();

  /**
   * Mostrar/ocultar modal de detalles de productos
   * Show/hide the detailed products modal
   */
  function modalProductsActions() {
    if(activeDropdownMenu.value){
        dropdownMenu();
      }
      if(routerParam.name == 'modal-Products'){
        router.replace({name: 'principal-Page'});
      }else{
        router.push({name: 'modal-Products', params: {product: '12555sad'}});
      }
  }

  /**
   * Mostrar/ocultar modal de configuración de cuenta
   * Show/hide the account configuration modal
   */
  function modalAccountConfig() {
    if(activeDropdownMenu.value){
        dropdownMenu();
      }
      if(routerParam.name == 'account-config'){
        router.replace({name: 'principal-Page'});
      }else{
        router.push({name: 'account-config', params: {user: 'Prueba'}});
      }
  }

  /**
   * Mostrar/ocultar menú de opciones de la cuenta
   * Show/hide account option menu
   */
  function dropdownMenu() {
    activeDropdownMenu.value = !activeDropdownMenu.value;
  }


  return {
    openModalDP,
    activeDropdownMenu,
    dropdownMenu,
    modalProductsActions,
    modalAccountConfig
  };
});
