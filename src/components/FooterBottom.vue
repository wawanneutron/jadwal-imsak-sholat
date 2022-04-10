<template>
  <!-- Bottom Navbar -->
  <nav class="navbar navbar-dark bg-nav-bottom navbar-expand fixed-bottom">
    <ul class="navbar-nav justify-content-center w-100">
      <li class="nav-item text-center">
        <a href="#" class="nav-link">
          <div class="icon_footer">
            <img
              src="../assets/icon/waktu-sholat-imsak_1.svg"
              alt=""
              srcset=""
            />
          </div>
          Jadwal Imsak
        </a>
      </li>
      <li class="nav-item text-center pointer">
        <a href="#" class="nav-link" @click="jadwalSholat">
          <div class="icon_footer">
            <img src="../assets/icon/ic_sholat.svg" alt="" srcset="" />
          </div>
          Jadwal Sholat
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    jadwalSholat() {
      alert("Coming soon..");
    },
  },
};
</script>

<style lang="scss">
.bg-nav-bottom {
  background-color: #10495c;
  padding: 0;
  .icon_footer {
    img {
      width: 35px;
    }
  }
  li {
    margin: auto;
  }
}

@media (min-width: 576px) {
  .bg-nav-bottom {
    background-color: #10495c;
    .icon_footer {
      img {
        width: 35px;
      }
    }
    li {
      margin-left: 30px;
      margin-right: 30px;
    }
  }
}

@media (min-width: 768px) {
  .bg-nav-bottom {
    /* background-color: #215d71; */
    background-color: #10495c;
    .icon_footer {
      img {
        width: 50px;
      }
    }
    li {
      margin-left: 35px;
      margin-right: 35px;
    }
  }
}
</style>
