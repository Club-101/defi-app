<template>
  <div class="row">
    <div
      v-for="social in socials"
      :key="social.name"
      class="col-12 col-sm-4 col-xl-3 social-card"
    >
      <a
        target="_new"
        :href="social.link"
        class="social-holder w-100"
        :style="`background-color:${social.color}`"
      >
        <div class="m-auto">
          <i class="fa-4x" :class="social.icon" />
          <p>{{ social.name }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.social-card {
  padding: 8px;
  a.social-holder {
    display: flex;
    padding: 20px;
    border-radius: 8px;
    opacity: 0.7;
    i {
      color: white;
    }
    p {
      margin: 0;
      padding: 0;
      margin-top: 10px;
      color: white;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>

<script setup>
const socials = [
  {
    name: "Gitbook",
    color: "#020202",
    link: "https://club101.gitbook.io/club-101-den-of-dragons/",
    icon: "fas fa-link",
  },
  {
    name: "Discord",
    color: "#5865F2",
    link: "https://discord.gg/club101",
    icon: "fab fa-discord",
  },
  {
    name: "Twitter",
    color: "#29A9E1",
    link: "https://twitter.com/Club101DoD",
    icon: "fab fa-twitter",
  },
  {
    name: "Instagram",
    color: "#C13584",
    link: "https://www.instagram.com/club101dod/",
    icon: "fab fa-instagram",
  },
];
</script>
