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
    if (openModalDP.value == true) {
      openModalDP.value = false;
    } else {
      if(activeDropdownMenu.value == true){
        activeDropdownMenu.value = !activeDropdownMenu.value;
        openModalDP.value = true;
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
    dropdownMenu,
    modalActions,
  };
});
