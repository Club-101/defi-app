<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="skmt-vault-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="me-2 duvall-font mb-2 d-inline-block"
                >The Vault
              </span>
              <!--<a
                href=""
                target="_new"
                class="btn btn-primary me-2"
                ><i class="fa fa-question-circle"></i
              ></a>-->
              <nuxt-link
                class="btn btn-sm btn-primary float-end back-button"
                to="/world/service-sector"
                ><i class="fa-solid fa-circle-arrow-left"></i> Service
                Sector</nuxt-link
              >
            </h4>
            <p>Stake your SKMT Tokens to generate those Staking Rewards!</p>
            <div
              class="card widget-card text-center h-100"
              style="border: 2px solid #ffc123"
            >
              <FarmList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FarmList from "~~/components/Staking/FarmList.vue";

definePageMeta({
  layout: "p2e-layout",
});

useHead({
  title: "The Vault - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#skmt-vault-layout {
  background-image: url("/images/c101/rooms/4d-skmt-vault.png");
  background-size: cover;
  background-position: center center;
}
.green-text,
label {
  color: white !important;
}
</style>
