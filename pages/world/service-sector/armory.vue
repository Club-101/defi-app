<template>
  <div class="container-fluid d-flex p-0 game-layout pt-200" id="armory-layout">
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="me-2 duvall-font mb-2 d-inline-block">Armory </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary me-2"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end back-button"
                to="/world/service-sector"
                ><i class="fa-solid fa-circle-arrow-left"></i> Service
                Sector</nuxt-link
              >
            </h4>
            <div class="text-center">
              <p>
                <b
                  >Click through to The Armory, where you’ll find a number of
                  C101 Design options across a wide array of products. Or you
                  can upload your own visuals and go full custom!</b
                >
              </p>
              <a
                target="_new"
                href="https://club101dod.metastitch.net/"
                class="btn btn-primary mt-2 mb-3"
                >Enter Merch Store</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "p2e-layout",
});

useHead({
  title: "Armory - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#armory-layout {
  background-image: url("/images/c101/rooms/4b-the-armory.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
