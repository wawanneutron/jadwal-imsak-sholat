import Api from "@/api/Api";

const stateApi = {
  namespaced: true,
  state: {
    dataApi: [],
  },

  mutations: {
    GET_STATE_API(state, stateData) {
      state.dataApi = stateData;
    },
  },

  actions: {
    getStateApi({ commit }) {
      Api.get("/state")
        .then((response) => {
          commit("GET_STATE_API", response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  getters: {
    getStateApi(state) {
      return state.dataApi;
    },
  },
};

export default stateApi;
