<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="membership-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="me-2 duvall-font mb-2 d-inline-block"
                >WYRD Membership Chamber
              </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary me-2"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end back-button"
                to="/world/wyrd-stronghold"
                ><i class="fa-solid fa-circle-arrow-left"></i> WYRD
                Stronghold</nuxt-link
              >
            </h4>
            <p>Here you will become a WYRD Club 101 Member ( #GetWYRD!).</p>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>Locations</h4>
            <div class="row">
              <nuxt-link
                v-for="location in locations"
                :key="location.name"
                class="col-6 col-sm-4 px-1 mb-2"
                :to="location.link"
              >
                <div class="card location-card h-100">
                  <img class="w-100" :src="location.image" />
                  <p>{{ location.title }}</p>
                </div>
              </nuxt-link>
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
  title: "WYRD Membership Chamber - Club 101 - Dens of Dragons",
});

const locations = [
  {
    title: "WYRD Minting Chamber",
    link: "/world/wyrd-stronghold/minting",
    image: "/images/c101/rooms/wyrd-minting-chamber.png",
  },
  {
    title: "WYRD Migration Chamber",
    link: "/world/wyrd-stronghold/migration",
    image: "/images/c101/rooms/wyrd-migration-chamber.png",
  },
];
</script>

<style lang="scss">
#membership-layout {
  background-image: url("/images/c101/rooms/3a-wyrd-membership-chamber.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
