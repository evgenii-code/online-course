<template>
  <header :class="$style.header">
    <app-container :class="$style.container">
      <app-header-menu :class="$style.menu" :menu-links="menuLinks" />
    </app-container>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',

  computed: {
    ...mapGetters({
      menuLinks: 'core/menuLinks',
    }),
  },
};
</script>

<style lang="scss" module>
@import './Header.module.scss';
</style>
