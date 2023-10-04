<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="alchemist-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="me-2 duvall-font mb-2 d-inline-block"
                >Alchemist
              </span>
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
            <iframe
              id="simpleswap-frame"
              name="SimpleSwap Widget"
              height="450px"
              src="https://simpleswap.io/widget/2b0f0648-c73a-4896-8db8-14e355b15a4a"
              frameborder="0"
              class="mx-auto"
            ></iframe>
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
  title: "Alchemist - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#alchemist-layout {
  background-image: url("/images/c101/rooms/4a-the-alchemist.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
