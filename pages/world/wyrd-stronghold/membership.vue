<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="pasture-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">The WYRD Membership Chamber </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end"
                to="/world/wyrd-stronghold"
                ><i class="fa-solid fa-circle-arrow-left"></i> WYRD
                Stronghold</nuxt-link
              >
            </h4>
            <p>Here you will become a WYRD Club 101 Member ( #GetWYRD!).</p>
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
  title: "The WYRD Membership - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#pasture-layout {
  background-image: url("/images/c101/rooms/3a-wyrd-membership-chamber.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
