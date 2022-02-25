<template>
  <nav :class="$style.menu">
    <ul :class="$style.items">
      <li
        v-for="menuLink in menuLinks"
        :key="menuLink.link"
        :class="$style.item"
      >
        <nuxt-link :class="$style.link" :to="menuLink.link">{{
          $t(menuLink.title)
        }}</nuxt-link>
      </li>

      <li :class="[$style.item, $style.bottom]">
        <v-button :class="$style.button">{{
          $t('header.consultation')
        }}</v-button>
      </li>

      <li :class="$style.item">
        <app-header-account :class="$style.account" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeaderMenuMobile',

  props: {
    menuLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './HeaderMenuMobile.module';
</style>
