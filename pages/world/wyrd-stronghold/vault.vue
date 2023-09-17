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
              <span class="duvall-font">The WYRD Vault: Staking </span>
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
            <p>
              Here you can stake your allegiance, build experience, and
              eventually compete and earn glory (plus Generative Active Member
              Rewards).
            </p>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="card text-center h-100">
            <Staking />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Staking from "~~/components/C101/Wyrd/Staking.vue";

definePageMeta({
  layout: "p2e-layout",
});

useHead({
  title: "The WYRD Vault - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#pasture-layout {
  background-image: url("/images/c101/rooms/3b-wyrd-vault.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
