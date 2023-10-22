<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="migration-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="me-2 duvall-font mb-2 d-inline-block"
                >WYRD Migration Chamber
              </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary me-2"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end back-button"
                to="/world/wyrd-stronghold/membership"
                ><i class="fa-solid fa-circle-arrow-left"></i> WYRD
                Membership</nuxt-link
              >
            </h4>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="card text-center h-100">
            <h1>Coming Soon!</h1>
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
  title: "WYRD Migration Chamber - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#migration-layout {
  background-image: url("/images/c101/rooms/wyrd-migration-chamber.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
