<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="arenatorium-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">Arenatorium </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link class="btn btn-sm btn-primary float-end" to="/world"
                ><i class="fa-solid fa-circle-arrow-left"></i> Entrance
                Chamber</nuxt-link
              >
            </h4>
            <p>
              Welcome to the Arenatorium, the pulsing heart of Club 101 where
              education meets combat. Witness glorious battles, climb the
              leaderboards, and partake in exclusive events.
            </p>
            <p>
              Here, wisdom and valor intertwine, bringing forth unforgettable
              experiences and sights.
            </p>
            <p>
              For now we watch and wait… but soon it shall be filled with feats
              that world has only dreamed of!
            </p>
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
  title: "Arenatorium - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#arenatorium-layout {
  background-image: url("/images/c101/rooms/5-arenatorium.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
