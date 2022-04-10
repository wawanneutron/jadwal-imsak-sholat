<template>
  <div class="row justify-content-center jadwal-imsak mt-3">
    <div class="title mb-2 text-center">
      <h2>Jadwal Imsakiyah</h2>
      <i>Data ini diambil dari kementrian agama republik Indonesia</i>
    </div>
    <div class="col-md-8 mt-4">
      <section class="choice-region">
        <div class="card border-0">
          <div class="card-header">
            <span>Pilih Daerah</span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Provinsi</label
                  >
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                    id="state"
                    v-model="state.state_id"
                    @change="getCities"
                  >
                    <option selected disabled>-- Pilih Provinsi --</option>
                    <option
                      v-for="(item, index) in stateApi"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Kabupaten/Kota</label
                  >
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                    v-model="state.city_id"
                    @change="jadwalImsak"
                  >
                    <option selected disabled>-- Pilih Kota --</option>
                    <option
                      v-for="(item, index) in state.cities"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Card :dataApi="state.dataImsak" :dataMeta="state.dataMeta" />
</template>

<script>
import Card from "@/components/CardJadwal.vue";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
import Api from "@/api/Api";

export default {
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      state_id: "",
      city_id: "",
      cities: [],
      dataImsak: [],
      dataMeta: [],
    });

    const store = useStore();

    onMounted(() => {
      store.dispatch("stateApi/getStateApi");
    });

    const stateApi = computed(() => {
      return store.getters["stateApi/getStateApi"].slice(1);
    });

    // dapatkan kota
    const getCities = () => {
      console.info(state.state_id);
      Api.get("/city", {
        params: {
          state: state.state_id,
        },
      })
        .then((response) => {
          state.cities = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // dapatkan jadwal imsak
    const jadwalImsak = () => {
      Api.get("/imsyakiyah", {
        params: {
          state: state.state_id,
          city: state.city_id,
          year: "2022",
        },
      })
        .then((response) => {
          let resultImsak = response.data.data;
          let dataMeta = response.data.meta;
          state.dataImsak = resultImsak;
          /* pindahkan dataMeta ke dalam array,
          lalu hapus array index pertama ketika hit data baru */
          state.dataMeta.push(dataMeta);
          if (state.dataMeta.length > 1) {
            state.dataMeta.shift();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      state,
      stateApi,
      getCities,
      jadwalImsak,
    };
  },
};
</script>
