<template>
  <header :class="headerClasses">
    <app-container :class="$style.container">
      <v-logo :theme="theme" :class="$style.logo" />

      <app-header-menu :class="$style.menu" :menu-links="menuLinks" />

      <div :class="$style.wrapper">
        <v-button size="large">{{ $t('header.consultation') }}</v-button>

        <app-header-account :class="$style.account" />
      </div>

      <v-icon name="burger-menu" :class="$style.burger" />
    </app-container>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

const HEADER_THEME_NAMES = ['light', 'dark'];

export default {
  name: 'AppHeader',

  props: {
    theme: {
      type: String,
      default: 'light',
      validator: (theme) => HEADER_THEME_NAMES.includes(theme),
    },
  },

  computed: {
    ...mapGetters({
      menuLinks: 'core/menuLinks',
    }),

    headerClasses() {
      return {
        [this.$style.header]: true,
        [this.$style[this.theme]]: true,
      };
    },
  },
};
</script>

<style lang="scss" module>
@import './Header.module.scss';
</style>
