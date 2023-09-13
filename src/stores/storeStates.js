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
  const isPhone = ref(false)

  if(screen.width <= 678){
    isPhone.value = true;
  }

  /**
   * Mostrar/ocultar modal de detalles de productos
   * Show/hide the detailed products modal
   */
  function modalProductsActions(categoryRoute) {
    if(activeDropdownMenu.value){
        dropdownMenu();
      }
      if(routerParam.name == 'modal-Products'){
        router.replace({ name: 'content-principal-page', params:{category: categoryRoute}});
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
      if(routerParam.name == 'account-config' || routerParam.name == 'account-config-shopping'){
        router.replace(router.back());
      }else{
        if(routerParam.name == 'content-principal-page'){
          router.push({name: 'account-config', params: {user: 'user', category: 'Novedades'}});
        }

        if(routerParam.name == 'shopping-Cart'){
          router.push({name: 'account-config-shopping', params: {user: 'user', date: '2023-09-13'}});
        }
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
    isPhone,
    dropdownMenu,
    modalProductsActions,
    modalAccountConfig
  };
});
