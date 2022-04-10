<template>
  <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/banner/spanduk_ramadhan_2022_2.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Jadwal Imsak dan Jadwal Sholat</h5>
            <p>
              Data resmi dari
              <a
                href="https://kemenag.go.id"
                class="text-white"
                target="__blank"
                >KEMENAG</a
              >
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/spanduk_ramadhan_2022_1_1.jpg"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/spanduk_ramadhan_2022_3.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Tingkatkan Kualitan Ibadah</h5>
            <p>Dibulan yang penuh berkah ini</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/spanduk_ramadhan_2022_4.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Sucikan Hati & Sucikan Jika</h5>
            <p>TIngkatkan kualitan iman dan takwa.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/banner/spanduk_ramadhan_2022_5.jpg"
            class="d-block w-100"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Selamat Berpuasa</h5>
            <p>
              Data ini diambil dari situs Kementrian Agama Republik Indonesia.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
