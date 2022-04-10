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
