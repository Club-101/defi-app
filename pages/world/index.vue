<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="entrance-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">Entrance Chamber</span>
            </h4>
            <p>
              <b>Welcome into the Club 101 DAPP!</b>
            </p>
            <p>This is the home of C101 Utility.</p>
            <p>
              How does navigating work? You can quick travel to key features via
              the menu, or explore by clicking on the thumbnail visuals.
            </p>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4 class="duvall-font">Locations</h4>
            <div class="row">
              <nuxt-link
                v-for="location in locations"
                :key="location.name"
                class="col-6 col-sm-4 col-md-3 px-1 mb-2"
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
  title: "Entrance Chamber - Club 101 - Dens of Dragons",
});

const locations = [
  {
    title: "The WYRD Stronghold",
    link: "/world/wyrd-stronghold",
    image: "/images/c101/rooms/3-wyrd-stronghold.png",
  },
  {
    title: "The Service Sector",
    link: "/world/service-sector",
    image: "/images/c101/rooms/4-service-sector.png",
  },
  {
    title: "Arenatorium",
    link: "/world/arenatorium",
    image: "/images/c101/rooms/5-arenatorium.png",
  },
  {
    title: "The Dragonaissance",
    link: "/world/dragonaissance",
    image: "/images/c101/rooms/6-the-dragonaissance.png",
  },
];
</script>

<style lang="scss">
#entrance-layout {
  background-image: url("/images/c101/rooms/2-entrance-chamber.png");
  background-size: cover;
  background-position: center center;
}
</style>
