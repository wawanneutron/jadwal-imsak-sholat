<template>
  <div class="container">
    <CarouselHeader />
    <JadwalImsyakSholat />
  </div>
  <Footer />
</template>

<script>
import JadwalImsyakSholat from "@/components/FormRegionJadwal.vue";
import CarouselHeader from "@/components/CarouselHeader.vue";
import Footer from "@/components/FooterBottom.vue";

export default {
  name: "App",
  components: {
    JadwalImsyakSholat,
    CarouselHeader,
    Footer,
  },
};
</script>
