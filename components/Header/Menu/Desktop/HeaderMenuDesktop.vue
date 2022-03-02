<template>
  <nav :class="$style.menu">
    <ul :class="$style.items">
      <li
        v-for="menuLink in menuLinks"
        :key="menuLink.link"
        :class="$style.item"
      >
        <nuxt-link :class="$style.link" :to="localePath(menuLink.link)">{{
          $t(menuLink.title)
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeaderMenuDesktop',

  props: {
    menuLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './HeaderMenuDesktop.module.scss';
</style>
