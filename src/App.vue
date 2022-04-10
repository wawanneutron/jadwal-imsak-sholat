<template>
  <HeaderBanner />
  <div class="container">
    <JadwalImsyakSholat />
  </div>
  <Footer />
  <Scroll />
</template>

<script>
import HeaderBanner from "@/components/CarouselBanner.vue";
import JadwalImsyakSholat from "@/components/FormRegionJadwal.vue";
import Footer from "@/components/FooterBottom.vue";
import Scroll from "@/components/ScrollTop.vue";

export default {
  name: "App",
  components: {
    HeaderBanner,
    JadwalImsyakSholat,
    Footer,
    Scroll,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap");
@import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,600");
* {
  font-family: "Asap", sans-serif;
}
</style>
