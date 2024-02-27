import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import student from "./Student";
import sidebar from "./tools/sidebar.slice";
import filters from "./tools/filter.slice";
import modals from "./tools/modal.slice";
import korzinka from "./tools/korzinka.slice";
export const store = configureStore({
  reducer: {
    // counter,
    // student,
    // sidebar,
    filters,
    modals,
    korzinka,
  },
});
