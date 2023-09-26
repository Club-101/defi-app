<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="knapsack-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">Knapsack </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end"
                to="/world/service-sector"
                ><i class="fa-solid fa-circle-arrow-left"></i> Service
                Sector</nuxt-link
              >
            </h4>
            <p>
              The items you Win, Collect, or Receive, accumulate here.
              Consumables will soon be activated. The new Quests for Glory start
              soon! Stay tuned!
            </p>
            <div class="card text-center h-100">
              <Backpack />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Backpack from "~~/components/C101/Backpack.vue";

definePageMeta({
  layout: "p2e-layout",
});

useHead({
  title: "Knapsack - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#knapsack-layout {
  background-image: url("/images/c101/rooms/4c-knapsack.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
