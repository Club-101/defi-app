<template>
  <div
    class="container-fluid d-flex p-0 game-layout pt-200"
    id="dragonaissance-layout"
  >
    <div class="container-fluid d-flex p-2 game-sublayout">
      <div class="row w-100 mt-auto g-0">
        <div class="col-12 mb-2">
          <div class="card text-left h-100">
            <h4>
              <span class="duvall-font">The Deagonaissance </span>
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
            <p>The Dragonaissance approaches…</p>
            <p>
              For more information check out our
              <a
                href="https://club101.gitbook.io/club-101-den-of-dragons/the-emergence-a-guide/4-inside-the-emergence-unveiling-the-core-elements/the-dragon-consolidation-deep-dive"
                target="_new"
                >C101 Dragonaissance Section</a
              >
            </p>
            <p>It's going to get spicy!</p>
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
  title: "The Dragonaissance - Club 101 - Dens of Dragons",
});

const actions = [];
</script>

<style lang="scss">
#dragonaissance-layout {
  background-image: url("/images/c101/rooms/6-the-dragonaissance.png");
  background-size: cover;
  background-position: center center;
}
.green-text {
  color: white !important;
}
</style>
