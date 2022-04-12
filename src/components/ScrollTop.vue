<template>
  <!-- <scroll-top- /> -->
  <div class="totop">
    <a
      @click="scrollTop"
      :class="{ 'hidden-button': visible }"
      class="btn btn-arrow btn-light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-up-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
  mounted: function () {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
        return;
      }
      this.visible = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    scrollTop() {
      document.getElementById("app").scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.totop {
  svg {
    color: #10495c;
    border-radius: 50%;
    background: transparent;
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    cursor: pointer;
    z-index: 1;
  }
  svg:hover {
    /* border: 1px solid black; */
    background: transparent;
    color: #e29000;
  }
  .hidden-button {
    display: none;
  }
}
</style>
