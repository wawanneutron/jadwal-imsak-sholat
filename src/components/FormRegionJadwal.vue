<template>
  <div class="row justify-content-center jadwal-imsak mt-3">
    <div v-if="!formSkeleton">
      <dir class="d-none d-lg-block">
        <content-loader viewBox="0 0 255 50" :speed="1.5">
          <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
          <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
          <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
          <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
          <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
        </content-loader>
      </dir>
      <dir class="d-lg-none" style="margin-top: 150px">
        <ContentLoader
          viewBox="0 0 130 110"
          :speed="1.5"
          style="margin-right: 30px"
        >
          <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
          <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
          <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
          <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
          <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
        </ContentLoader>
      </dir>
    </div>
    <div class="title mb-2 text-center" v-if="formSkeleton">
      <h1>Jadwal Imsakiyah</h1>
      <i>Data ini diambil dari kementrian agama republik Indonesia</i>
    </div>
    <div class="col-md-8 mt-4" v-if="formSkeleton">
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
                    id="stateProvinsi"
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
                    id="stateCity"
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
  <SkeletonLoader :skeletonLoader="state.skleton_loader" />
  <Card :dataApi="state.dataImsak" :dataMeta="state.dataMeta" />
</template>

<script>
import Card from "@/components/CardJadwal.vue";
import SkeletonLoader from "@/components/skeleton/SkeletonLoader.vue";
import { ContentLoader } from "vue-content-loader";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
import Api from "@/api/Api";

export default {
  components: {
    Card,
    SkeletonLoader,
    ContentLoader,
  },
  data() {
    return {
      formSkeleton: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.formSkeleton = true;
    }, 2000);
  },
  setup() {
    const state = reactive({
      state_id: "",
      city_id: "",
      cities: [],
      dataImsak: [],
      dataMeta: [],
      skleton_loader: Boolean,
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
      state.skleton_loader = true;
      // kosongkan data
      state.dataMeta = [];
      state.dataImsak = [];

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
        })
        .finally(() => {
          console.info("skleton loader false");
          state.skleton_loader = false;
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

<style lang="scss" scoped>
.jadwal-imsak {
  color: #10495c;
  .title {
    h1 {
      font-weight: 600;
    }
    i {
      color: #0f1d37;
    }
  }
  #stateProvinsi,
  #stateCity {
    color: #10495c;
  }
}
</style>
