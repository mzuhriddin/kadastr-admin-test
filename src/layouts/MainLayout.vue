<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="header bg-white text-primary">
      <q-toolbar class="absolute-center justify-between q-pr-xl q-pl-lg">
        <div class="header-right">
          <q-btn
            flat
            icon="menu"
            size="lg"
            @click="toggleLeftDrawer"
          />
          <q-toolbar-title class="text-weight-medium route-name" style="font-size: 28px">
            {{ $route.name }}
          </q-toolbar-title>
        </div>
        <div class="row justify-between no-wrap">
          <q-btn flat size="lg">
            <img src="../assets/notifications.svg" alt="">
          </q-btn>
          <q-btn flat size="lg">
            <img src="../assets/fullscreen.svg" alt="">
          </q-btn>
          <q-btn flat size="lg">
            <img src="../assets/input.svg" alt="">
          </q-btn>

        </div>

      </q-toolbar>


    </q-header>

    <q-drawer show-if-above :breakpoint="1024" v-model="leftDrawerOpen" side="left"
              class="bg-primary text-white drawer" :width="$q.screen.width > 720 ? 394 : 300">
      <img class="logo" src="../assets/logo-big.svg" alt="" width="188" height="94"/>

      <q-list>
        <q-item clickable v-ripple to="/" :active="false">
          <q-item-section avatar>
            <q-icon class="drawer-image">
              <img src="../assets/dashboard.svg" alt="" width="32" height="32">
            </q-icon>
          </q-item-section>
          <q-item-section class="drawer-content">
            Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/appeals" :active="false">
          <q-item-section avatar>
            <q-icon class="drawer-image">
              <img src="../assets/assignment.svg" alt="" width="32" height="32">
            </q-icon>
          </q-item-section>
          <q-item-section class="drawer-content">
            Appeals
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/operators" :active="false">
          <q-item-section avatar>
            <q-icon class="drawer-image">
              <img src="../assets/supervisor_account.svg" alt="" width="32" height="32">
            </q-icon>
          </q-item-section>
          <q-item-section class="drawer-content">
            Operators
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/settings" :active="false">
          <q-item-section avatar>
            <q-icon class="drawer-image">
              <img src="../assets/settings.svg" alt="" width="32" height="32">
            </q-icon>
          </q-item-section>
          <q-item-section class="drawer-content">
            Settings
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/help" :active="false">
          <q-item-section avatar>
            <q-icon class="drawer-image">
              <img src="../assets/help_outline.svg" alt="" width="32" height="32">
            </q-icon>
          </q-item-section>
          <q-item-section class="drawer-content">
            Help
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },

  },

}

</script>

<style lang="sass" scoped>
.header
  height: 86px

.header-right
  display: flex
  align-items: center

.logo
  margin: 46px 160px 97px 46px

.drawer-content
  font-size: 24px
  line-height: 28px

.drawer-image
  margin: 0 0 0 42px
  padding-right: 34px

@media (max-width: 720px)


</style>
