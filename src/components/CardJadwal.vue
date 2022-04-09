<template>
  <div class="row mt-5">
      <template v-for="(item, index) in dataApi" :key="index">
        <div class="col-md-3">
          <div class="card mb-2">
              <p>
                  <ul>
                    <li>{{ item.date }}</li>
                    <li>{{ item.imsak }}</li>
                  </ul>
              </p>
            </div>
        </div>
      </template>
  </div>
</template>

<script>
  export default {
    name: "CardJadwal",
    props: {
      dataApi: Array,
    },
  };
</script>
