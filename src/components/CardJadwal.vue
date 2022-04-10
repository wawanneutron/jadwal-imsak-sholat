<template>
  <div class="row mt-5 row-card-jadwal">
    <div class="title mb-2">
      <template v-for="(item, index) of dataMeta" :key="index">
        <h4>
          {{
            `Jadwal Imsak ${item.hijri}H / ${item.year} Untuk Daerah ${item.city} - ${item.state}`
          }}
        </h4>
        <div>{{ `Provinsi : ${item.state}` }}</div>
        <div>{{ `Kota/Kabupaten : ${item.city}` }}</div>
        <div>{{ `Garis Lintang (latitude) : ${item.latitude}` }}</div>
        <div>{{ `Garis Bujur (longitude) : ${item.longitude}` }}</div>
      </template>
    </div>
    <template v-for="(property, index) of dataApi" :key="index">
      <div class="col-md-4">
        <div class="card jadwal-sholat mb-2 mt-2">
          <div class="card-body">
            <div class="row">
              <div class="col-4 mb-2">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Imsak</span>
                  <span class="waktu">{{ `${property.imsak}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Subuh</span>
                  <span class="waktu">{{ `${property.subuh}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Terbit</span>
                  <span class="waktu">{{ `${property.syuruk}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Duha</span>
                  <span class="waktu">{{ `${property.dhuha}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Zuhur</span>
                  <span class="waktu">{{ `${property.dzuhur}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Asar</span>
                  <span class="waktu">{{ `${property.ashar}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Maghrib</span>
                  <span class="waktu">{{ `${property.maghrib}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="icon-jadwal"></i>
                <div class="waktu-sholat">
                  <span class="title">Isya'</span>
                  <span class="waktu">{{ `${property.syuruk}` }}</span>
                </div>
              </div>
            </div>
          </div>
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
    dataMeta: Object,
  },
};
</script>

<style>
.row-card-jadwal {
  margin-bottom: 110px;
}
i.icon-jadwal {
  background-image: url("../assets/icon/waktu-sholat-imsak.svg");
}
.jadwal-sholat i.icon-jadwal {
  display: inline-block;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 10px;
  width: 20px;
  height: 20px;
}
.jadwal-sholat .waktu-sholat {
  display: inline-block;
}
.jadwal-sholat .waktu-sholat .title,
.jadwal-sholat .waktu-sholat .waktu {
  display: block;
  line-height: 18px;
  font-size: 14px;
  font-weight: bold;
}
</style>
