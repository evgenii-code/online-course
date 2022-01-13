<template>
  <h1 :class="$style.logo">
    <nuxt-link :to="localePath('/')" :class="$style.link">
      <img :src="logoSrc" :alt="alt" :class="$style.image" />
    </nuxt-link>
  </h1>
</template>

<script>
const LOGO_THEME_NAMES = ['light', 'dark'];

export default {
  name: 'AppLogo',

  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: (theme) => LOGO_THEME_NAMES.includes(theme),
    },
  },

  computed: {
    alt() {
      return this.$t('appName') + ' ' + this.$t('logo');
    },

    logoSrc() {
      return require(`~/assets/images/logo/logo-full-for-${this.theme}.svg?data`);
    },
  },
};
</script>

<style lang="scss" module>
@import './Logo.module.scss';
</style>
