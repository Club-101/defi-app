<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="stronghold-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">Wyrd Stronghold </span>
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
              <b>Welcome to The WYRD Stronghold!</b>
            </p>
            <p>Here you can Mint & Stake Memberships.</p>
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
  title: "WYRD Stronghold - Club 101 - Dens of Dragons",
});

const locations = [
  {
    title: "WYRD Membership Chamber: Minting & Migration",
    link: "/world/wyrd-stronghold/membership",
    image: "/images/c101/rooms/3a-wyrd-membership-chamber.png",
  },
  {
    title: "WYRD Hall: Staking",
    link: "/world/wyrd-stronghold/hall",
    image: "/images/c101/rooms/3b-wyrd-vault.png",
  },
];
</script>

<style lang="scss">
#stronghold-layout {
  background-image: url("/images/c101/rooms/3-wyrd-stronghold.png");
  background-size: cover;
  background-position: center center;
}
</style>
