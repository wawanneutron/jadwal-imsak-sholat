<template>
  <div v-if="skeletonLoader == true">
    <div class="row">
      <div class="mb-4">
        <div class="d-none d-lg-block">
          <content-loader
            viewBox="0 0 600 100"
            :speed="1.5"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="30" y="30" rx="3" ry="3" width="30" height="9" />
            <rect x="45" y="53" rx="3" ry="3" width="108" height="9" />
            <rect x="47" y="80" rx="3" ry="3" width="108" height="9" />
            <rect x="189" y="52" rx="3" ry="3" width="108" height="9" />
            <rect x="191" y="79" rx="3" ry="3" width="108" height="9" />
            <rect x="338" y="53" rx="3" ry="3" width="108" height="9" />
            <rect x="340" y="80" rx="3" ry="3" width="108" height="9" />
            <rect x="482" y="52" rx="3" ry="3" width="108" height="9" />
            <rect x="484" y="79" rx="3" ry="3" width="108" height="9" />
          </content-loader>
        </div>
        <dir class="d-lg-none">
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
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
      <div class="col-md-4">
        <content-loader viewBox="0 0 265 230" :speed="1.5">
          <rect x="3" y="27" rx="4" ry="4" width="350" height="25" />
          <rect x="3" y="61" rx="2" ry="2" width="350" height="150" />
        </content-loader>
      </div>
    </div>
  </div>
  <div v-else-if="skeletonLoader == false">
    <!-- nothing component -->
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  name: "skeleton-loader",
  components: {
    ContentLoader,
  },
  props: {
    skeletonLoader: Boolean,
  },
};
</script>
