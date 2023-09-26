<template>
  <div id="main-sidebar" class="sidebar" :class="{ toggled: isSidebarOpen }">
    <div class="sidebar-header">
      <nuxt-link to="/" class="d-flex m-auto">
        <img
          class="brand-logo"
          :src="isSidebarOpen ? logo : icon"
          alt="Logo C101"
        />
      </nuxt-link>
      <a href="javascript:void(0)" class="toggle-menu" @click="toggleSidebar()"
        ><i
          class="fa-solid"
          :class="{
            'fa-chevron-right': !isSidebarOpen,
            'fa-chevron-left': isSidebarOpen,
          }"
        ></i
      ></a>
    </div>
    <ul class="sidebar-menu">
      <li>
        <nuxt-link
          to="/"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-dashboard"></i><span class="label">Home</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-gamepad"></i><span class="label">World</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/wyrd-stronghold/hall"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-vault"></i><span class="label">WYRD Hall</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/service-sector/alchemist"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-flask"></i><span class="label">Alchemist</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/service-sector/armory"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-shield"></i><span class="label">Armory</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/service-sector/knapsack"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-bag-shopping"></i
          ><span class="label">Knapsack</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/service-sector/skmt-vault"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-coins"></i><span class="label">The Vault</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/world/arenatorium"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-trophy"></i
          ><span class="label">Arenatorium</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/links"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          ><i class="fa-solid fa-info-circle"></i
          ><span class="label">Links</span>
        </nuxt-link>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          class="sidebar-link"
          :class="{ 'text-center w-auto': !isSidebarOpen }"
          @click="disconnectWallet"
          ><i class="fa-solid fa-unlink"></i
          ><span class="label"> Disconnect</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import icon from "/images/c101/logo/icon.png";
import logo from "/images/c101/logo/logo.png";
const { isSidebarOpen, toggleSidebar, closeSidebar } = useUiState();
</script>

<script>
const { closeSidebar } = useUiState();

export default {
  mounted() {
    var mainPanelDiv = document.querySelector("#main");
    var sidebarLinks = document.querySelectorAll(".sidebar-link");
    mainPanelDiv.addEventListener("click", function (event) {
      closeSidebar();
    });
    sidebarLinks.forEach((element) => {
      element.addEventListener("click", (e) => {
        closeSidebar();
      });
    });
  },
};
</script>
