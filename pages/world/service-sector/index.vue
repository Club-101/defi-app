<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="service-sector-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">The Service Sector </span>
              <a
                href="https://club101.gitbook.io/club-101-den-of-dragons/the-six-pillars-of-club-101/the-sixth-pillar-active-member-benefits-amb/generative-active-member-rewards-gamr-moar-utility-and-moar-access"
                target="_blank"
                class="btn btn-sm btn-primary"
                ><i class="fa fa-question-circle"></i
              ></a>
              <nuxt-link class="btn btn-sm btn-primary float-end" to="/world"
                ><i class="fa-solid fa-circle-arrow-left"></i> Entrance
                Chamber</nuxt-link
              >
            </h4>
            <p>
              <b
                >Welcome to the Service Sector, Club 101's hub for essential
                Web3 tools and exclusive merchandise.</b
              >
            </p>
            <p>
              Explore the ease of our CryptoSwapper (aka The Alchemsit) for your
              exchanging needs and express your C101 pride with items from our
              Armory!
            </p>
            <p>
              Dive in and make the most of your Club 101 experience! And if you
              have more Service suggestions… let us know in the C101 Disco!
            </p>
            <p class="duvall-font">#DragonsFlyTogether</p>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>Locations</h4>
            <div class="row">
              <nuxt-link
                v-for="location in locations"
                :key="location.name"
                class="col-6 col-md-3 px-1 mb-2"
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
  title: "The WYRD Stronghold - Club 101 - Dens of Dragons",
});

const locations = [
  {
    title: "The Alchemist (Crypto Swapper)",
    link: "/world/service-sector/alchemist",
    image: "/images/c101/rooms/4a-the-alchemist.png",
  },
  {
    title: "The Armory (Merch Store)",
    link: "/world/service-sector/armory",
    image: "/images/c101/rooms/4b-the-armory.png",
  },
  {
    title: "Knapsack",
    link: "/world/service-sector/knapsack",
    image: "/images/c101/rooms/4c-knapsack.png",
  },
  {
    title: "The SKMT Vault",
    link: "/world/service-sector/skmt-vault",
    image: "/images/c101/rooms/4d-skmt-vault.png",
  },
];
</script>

<style lang="scss">
#service-sector-layout {
  background-image: url("/images/c101/rooms/4-service-sector.png");
  background-size: cover;
  background-position: center center;
}
</style>
