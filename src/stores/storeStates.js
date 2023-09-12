/**
 * Store que contendrá los estados de las diferentes variables que requiere activación/desactivación en tiempo de ejecución para realizar determinadas acciones
 * Store that will contain the states of the different variables that require activation/deactivation at runtime to perform certain actions.
 */

import { defineStore } from "pinia";
import { ref } from "vue";

export const useStates = defineStore("states", () => {
  const openModalDP = ref(false);
  const activeDropdownMenu = ref(false);

  /**
   * Mostrar/ocultar modal de detalles de productos
   * Show/hide the detailed products modal
   */
  function modalActions() {
    if(activeDropdownMenu.value){
        dropdownMenu();
      }
      openModalDP.value = !openModalDP.value;
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
    modalActions
  };
});
