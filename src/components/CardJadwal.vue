<template>
  <div class="row mt-5 row-jadwalsholat">
    <div class="title-header mb-2">
      <template v-for="(item, index) of dataMeta" :key="index">
        <h4 class="text-center">
          {{ `Jadwal Imsak Untuk Daerah ${item.city} Provinsi ${item.state}` }}
          <br />
          {{ `Tahun ${item.year}/${item.hijri}H` }}
        </h4>
        <hr />
        <div class="detail table-responsive text-center">
          <table class="table caption-top table-borderless table-striped">
            <caption>
              Detail
            </caption>
            <thead>
              <tr>
                <th>Provinsi</th>
                <th>Kota/Kabupaten</th>
                <th>Garis Lintang (latitude)</th>
                <th>Garis Bujur (longitude)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ item.state }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.latitude }}</td>
                <td>{{ item.longitude }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
    <template v-for="(property, index) of dataApi" :key="index">
      <div class="col-md-4">
        <div class="card mb-2 mt-2">
          <div class="card-header text-card-header">
            {{ `${index + 1} Ramadan 1443 H` }}
          </div>
          <div class="card-body">
            <div class="row row-waktu">
              <div class="col-4 mb-2">
                <i class="iconwaktu icon-imsak"></i>
                <div class="waktu-sholat">
                  <span class="title">Imsak</span>
                  <span class="waktu">{{ `${property.imsak}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="iconwaktu icon-subuh"></i>
                <div class="waktu-sholat">
                  <span class="title">Subuh</span>
                  <span class="waktu">{{ `${property.subuh}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="iconwaktu icon-terbit"></i>
                <div class="waktu-sholat">
                  <span class="title">Terbit</span>
                  <span class="waktu">{{ `${property.syuruk}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="iconwaktu icon-duha"></i>
                <div class="waktu-sholat">
                  <span class="title">Duha</span>
                  <span class="waktu">{{ `${property.dhuha}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="iconwaktu icon-zuhur"></i>
                <div class="waktu-sholat">
                  <span class="title">Zuhur</span>
                  <span class="waktu">{{ `${property.dzuhur}` }}</span>
                </div>
              </div>
              <div class="col-4 mb-2">
                <i class="iconwaktu icon-asar"></i>
                <div class="waktu-sholat">
                  <span class="title">Asar</span>
                  <span class="waktu">{{ `${property.ashar}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="iconwaktu icon-maghrib"></i>
                <div class="waktu-sholat">
                  <span class="title">Maghrib</span>
                  <span class="waktu">{{ `${property.maghrib}` }}</span>
                </div>
              </div>
              <div class="col-4">
                <i class="iconwaktu icon-isya"></i>
                <div class="waktu-sholat">
                  <span class="title">Isya'</span>
                  <span class="waktu">{{ `${property.isya}` }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="github">
      <a href="https://github.com/wawanneutron" target="__blank"
        >More About Me</a
      >
    </div>
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

<style lang="scss">
$assetsPath: "~../assets/icon/jadwal/";

$waktu-imsak: "#{$assetsPath}waktu-imsak.svg";
$waktu-subuh: "#{$assetsPath}waktu-subuh.svg";
$waktu-terbit: "#{$assetsPath}waktu-terbit.svg";
$waktu-duha: "#{$assetsPath}waktu-dhuha.svg";
$waktu-dohor: "#{$assetsPath}waktu-dzuhur.svg";
$waktu-asar: "#{$assetsPath}waktu-ashar.svg";
$waktu-maghrib: "#{$assetsPath}waktu-maghrib.svg";
$waktu-isya: "#{$assetsPath}waktu-isya.svg";

.row-jadwalsholat {
  margin-bottom: 110px;
  .title-header {
    h4 {
      color: #10495c;
      font-weight: 500;
      line-height: 40px;
    }
  }
  .detail {
    color: #10495c;
    margin-top: 50px;
  }
  .text-card-header {
    color: #10495c;
    font-weight: 500;
  }
  .iconwaktu {
    display: inline-block;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 10px;
    width: 20px;
    height: 20px;
  }
  .icon-imsak {
    background-image: url(#{$waktu-imsak});
  }
  .icon-subuh {
    background-image: url(#{$waktu-subuh});
  }
  .icon-terbit {
    background-image: url(#{$waktu-terbit});
  }
  .icon-duha {
    background-image: url(#{$waktu-duha});
  }
  .icon-zuhur {
    background-image: url(#{$waktu-dohor});
  }
  .icon-asar {
    background-image: url(#{$waktu-asar});
  }
  .icon-maghrib {
    background-image: url(#{$waktu-maghrib});
  }
  .icon-isya {
    background-image: url(#{$waktu-isya});
  }
  .waktu-sholat {
    display: inline-block;
    text-transform: uppercase;
    .title {
      color: #10495c;
      font-weight: 600;
    }
    .waktu {
      color: #0f1d37;
      display: block;
      line-height: 18px;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .github {
    text-align: center;
    padding-top: 40px;
    a {
      color: #10495c;
      font-size: 14px;
      font-weight: 200;
      opacity: 30%;
      &:hover {
        color: #0f1d37;
        opacity: 50%;
      }
    }
  }
}

@media (max-width: 576px) {
  .title-header {
    h4 {
      font-size: 18px;
      color: #10495c;
      font-weight: 500;
      line-height: 20px;
    }
  }
  .row-waktu {
    .col-4 {
      text-align: center;
    }
    .iconwaktu {
      display: inline-block;
      background-size: 100%;
      background-repeat: no-repeat;
      margin: 10px 20px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
