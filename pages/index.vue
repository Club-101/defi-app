<template>
  <div
    class="container-fluid d-flex flex-column p-0 game-layout align-items-center"
    id="c101-layout"
    :style="{ backgroundImage: `url(${backgroundImagePath})` }"
  >
    <img
      class="brand-logo"
      :src="logo"
      alt="Logo C101"
      style="width: 95%; max-width: 600px"
    />
    <div class="container-fluid d-flex mt-auto p-2 game-sublayout">
      <div class="row m-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-center h-100">
            <div>
              <nuxt-link to="/world" class="btn btn-primary mt-2 mb-3"
                >Enter the C101 DAPP</nuxt-link
              >
              <h2 class="duvall-font">
                <b>Your Gateway To Mastery Awaits.</b>
              </h2>
              <h2 class="duvall-font">
                <b>#DragonsFlyTogether</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "/images/c101/logo/logo.png";
definePageMeta({
  layout: "p2e-layout",
});

const random = Math.floor(Math.random() * 19) + 1;
const backgroundImagePath = `/images/c101/doors/door-${random}.png`;

useHead({
  title: "Club 101 - Dens of Dragons",
});
</script>

<style lang="scss">
#c101-layout {
  background-size: cover;
  background-position: center center;
}
</style>
