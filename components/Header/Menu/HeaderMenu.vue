<template>
  <nav :class="$style.menu">
    <ul :class="$style.items">
      <li :class="$style.item">
        <nuxt-link :class="$style.link" to="/">link</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderMenu',

  props: {
    menuLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './HeaderMenu.module.scss';
</style>
