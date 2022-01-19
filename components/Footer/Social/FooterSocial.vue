<template>
  <nav :class="$style.list">
    <ul :class="$style.items">
      <li
        v-for="socialLink in socialLinks"
        :key="socialLink.link"
        :class="$style.item"
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          :href="socialLink.link"
          :class="$style.link"
        >
          <v-icon :class="$style.icon" :name="socialLink.icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'FooterSocial',

  props: {
    socialLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import './FooterSocial.module.scss';
</style>
