// import vuex
import { createStore } from "vuex";
// import module
import stateApi from "./module/stateApi";
// create store vuex
export default createStore({
  modules: {
    stateApi,
  },
});
